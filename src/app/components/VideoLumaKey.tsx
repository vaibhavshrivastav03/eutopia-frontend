import { useEffect, useRef } from "react";

/**
 * Plays a video and keys out its black background in real time.
 * Each frame is drawn to a canvas and every pixel's alpha is derived from its
 * brightness, so pure-black areas become fully transparent and glowing parts
 * stay opaque — giving real transparency over any background (no blend tricks).
 */
export function VideoLumaKey({
  src,
  className = "",
  style,
  tolerance = 70,
  softness = 45,
}: {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  /** color distance from the sampled background within which pixels are fully transparent */
  tolerance?: number;
  /** distance range above tolerance over which alpha ramps to opaque */
  softness?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let raf = 0;
    const draw = () => {
      raf = requestAnimationFrame(draw);
      const w = video.videoWidth;
      const h = video.videoHeight;
      if (!w || !h || video.readyState < 2) return;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      ctx.drawImage(video, 0, 0, w, h);
      const frame = ctx.getImageData(0, 0, w, h);
      const d = frame.data;
      // Sample background color from the four corners (average) each frame
      const corners = [0, (w - 1) * 4, (h - 1) * w * 4, ((h - 1) * w + (w - 1)) * 4];
      let kr = 0;
      let kg = 0;
      let kb = 0;
      for (const c of corners) {
        kr += d[c];
        kg += d[c + 1];
        kb += d[c + 2];
      }
      kr /= corners.length;
      kg /= corners.length;
      kb /= corners.length;

      for (let i = 0; i < d.length; i += 4) {
        const dr = d[i] - kr;
        const dg = d[i + 1] - kg;
        const db = d[i + 2] - kb;
        const dist = Math.sqrt(dr * dr + dg * dg + db * db);
        let a: number;
        if (dist <= tolerance) a = 0;
        else if (dist >= tolerance + softness) a = 255;
        else a = ((dist - tolerance) / softness) * 255;
        d[i + 3] = a;
      }
      ctx.putImageData(frame, 0, 0);
    };

    const start = () => {
      video.play().catch(() => {});
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
    };

    video.addEventListener("loadeddata", start);
    if (video.readyState >= 2) start();

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("loadeddata", start);
    };
  }, [tolerance, softness]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="hidden"
      />
      <canvas ref={canvasRef} className={className} style={style} />
    </>
  );
}
