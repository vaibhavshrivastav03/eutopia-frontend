import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Native React port of the Eutopia holographic bracelet scene.
 * Renders a 3D silver chain bracelet with a glossy pink heart charm and a
 * heartbeat light burst on a transparent canvas, so it composites over
 * whatever background sits behind it.
 */
export function BraceletScene({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = mount.clientWidth || 360;
    let height = mount.clientHeight || 360;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 9.2);

    // ---- procedural environment map so silver picks up scene colors ----
    function makeEnvTexture() {
      const c = document.createElement("canvas");
      c.width = 512;
      c.height = 256;
      const g = c.getContext("2d")!;
      const grd = g.createLinearGradient(0, 0, 512, 256);
      grd.addColorStop(0, "#0a1830");
      grd.addColorStop(0.5, "#13243f");
      grd.addColorStop(1, "#06101f");
      g.fillStyle = grd;
      g.fillRect(0, 0, 512, 256);
      const blob = (x: number, y: number, r: number, col: string) => {
        const rg = g.createRadialGradient(x, y, 0, x, y, r);
        rg.addColorStop(0, col);
        rg.addColorStop(1, "rgba(0,0,0,0)");
        g.fillStyle = rg;
        g.fillRect(0, 0, 512, 256);
      };
      blob(120, 150, 150, "rgba(255,80,160,.85)");
      blob(400, 90, 160, "rgba(55,200,245,.85)");
      blob(260, 40, 120, "rgba(255,255,255,.55)");
      blob(300, 230, 140, "rgba(60,120,255,.6)");
      const tex = new THREE.CanvasTexture(c);
      tex.mapping = THREE.EquirectangularReflectionMapping;
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    }
    const envTex = makeEnvTexture();
    scene.environment = envTex;

    // ---- lights ----
    scene.add(new THREE.AmbientLight(0x33506e, 0.7));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(2, 4, 5);
    scene.add(key);
    const pink = new THREE.PointLight(0xff3f96, 2.4, 22);
    pink.position.set(-3.2, -0.5, 2.5);
    scene.add(pink);
    const cyan = new THREE.PointLight(0x33c6f4, 2.4, 22);
    cyan.position.set(3.4, 1.2, 2.2);
    scene.add(cyan);
    const under = new THREE.PointLight(0x4f7bff, 1.6, 16);
    under.position.set(0, -1.6, 1.5);
    scene.add(under);

    // ============ BRACELET ============
    const bracelet = new THREE.Group();
    scene.add(bracelet);
    bracelet.rotation.x = 0.62;
    bracelet.position.y = -0.15;

    const silver = new THREE.MeshStandardMaterial({
      color: 0xc9d2dc,
      metalness: 1.0,
      roughness: 0.22,
      envMap: envTex,
      envMapIntensity: 1.5,
    });

    const R = 2.55;
    const LINKS = 46;
    const ringR = 0.235;
    const tubeR = 0.072;
    const linkGeo = new THREE.TorusGeometry(ringR, tubeR, 14, 30);

    for (let i = 0; i < LINKS; i++) {
      const th = (i / LINKS) * Math.PI * 2;
      const link = new THREE.Mesh(linkGeo, silver);
      link.position.set(Math.cos(th) * R, 0, Math.sin(th) * R);
      link.rotation.y = -th;
      link.rotation.x = Math.PI / 2;
      if (i % 2 === 0) link.rotation.z = Math.PI / 2;
      bracelet.add(link);
    }

    // ---- heart charm ----
    const heartGroup = new THREE.Group();
    heartGroup.position.set(0, 0, R);
    bracelet.add(heartGroup);

    const conn = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.05, 12, 24), silver);
    conn.position.set(0, -0.16, 0.05);
    heartGroup.add(conn);

    const hs = new THREE.Shape();
    const x = 0;
    const y = 0;
    hs.moveTo(x, y + 0.25);
    hs.bezierCurveTo(x, y + 0.25, x - 0.05, y + 0.55, x - 0.5, y + 0.55);
    hs.bezierCurveTo(x - 1.1, y + 0.55, x - 1.1, y - 0.15, x - 1.1, y - 0.15);
    hs.bezierCurveTo(x - 1.1, y - 0.55, x - 0.65, y - 1.0, x, y - 1.35);
    hs.bezierCurveTo(x + 0.65, y - 1.0, x + 1.1, y - 0.55, x + 1.1, y - 0.15);
    hs.bezierCurveTo(x + 1.1, y - 0.15, x + 1.1, y + 0.55, x + 0.5, y + 0.55);
    hs.bezierCurveTo(x + 0.05, y + 0.55, x, y + 0.25, x, y + 0.25);

    const heartGeo = new THREE.ExtrudeGeometry(hs, {
      depth: 0.28,
      bevelEnabled: true,
      bevelThickness: 0.07,
      bevelSize: 0.08,
      bevelSegments: 4,
      steps: 1,
    });
    heartGeo.center();
    heartGeo.scale(0.62, 0.62, 0.62);

    const heartPink = new THREE.MeshStandardMaterial({
      color: 0xff4f86,
      metalness: 0.55,
      roughness: 0.18,
      envMap: envTex,
      envMapIntensity: 1.2,
      emissive: 0x3a0a1c,
      emissiveIntensity: 0.5,
    });
    const heart = new THREE.Mesh(heartGeo, [heartPink, silver]);
    heart.position.set(0, -0.72, 0.18);
    heart.rotation.x = -0.25;
    heartGroup.add(heart);

    const rim = new THREE.Mesh(heartGeo, silver);
    rim.position.copy(heart.position);
    rim.position.z -= 0.06;
    rim.rotation.copy(heart.rotation);
    rim.scale.set(1.08, 1.08, 0.6);
    heartGroup.add(rim);

    // ---- "EUTOPIA ♥ ID" text on the heart face ----
    function heartTextTexture() {
      const c = document.createElement("canvas");
      c.width = 256;
      c.height = 256;
      const g = c.getContext("2d")!;
      g.clearRect(0, 0, 256, 256);
      g.textAlign = "center";
      g.fillStyle = "#2a0716";
      g.font = "600 30px Georgia, serif";
      g.fillText("EUTOPIA", 128, 108);
      g.fillText("ID", 128, 182);
      g.fillStyle = "#7a0e2e";
      g.font = "26px serif";
      g.fillText("♥", 128, 150);
      const t = new THREE.CanvasTexture(c);
      t.anisotropy = 4;
      return t;
    }
    const textPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(0.95, 0.95),
      new THREE.MeshBasicMaterial({ map: heartTextTexture(), transparent: true, depthWrite: false }),
    );
    textPlane.position.set(0, -0.66, 0.36);
    textPlane.rotation.x = -0.25;
    heartGroup.add(textPlane);

    // ============ MOUSE PARALLAX ============
    let mx = 0;
    let my = 0;
    let tmx = 0;
    let tmy = 0;
    const onMove = (e: PointerEvent) => {
      tmx = e.clientX / window.innerWidth - 0.5;
      tmy = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onMove);

    // ============ ANIMATE ============
    const clock = new THREE.Clock();
    let introT0: number | null = null;
    let raf = 0;
    function animate() {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const k = REDUCED ? 0 : 1;

      bracelet.rotation.y = Math.sin(t * 0.35) * 0.45 * k;
      bracelet.position.y = -0.15 + Math.sin(t * 0.8) * 0.06 * k;
      heartGroup.rotation.z = Math.sin(t * 1.1 - 0.4) * 0.08 * k;

      if (introT0 === null) introT0 = t;
      const introP = REDUCED ? 1 : Math.min((t - introT0) / 1.4, 1);
      const eo = 1 - Math.pow(1 - introP, 3);
      const beat =
        Math.pow(Math.max(0, Math.sin(t * 1.6)), 6) +
        0.5 * Math.pow(Math.max(0, Math.sin(t * 1.6 - 0.5)), 6);

      if (introP < 1) {
        under.intensity = 1.4 + eo * 3.0;
      } else {
        under.intensity = 1.4 + beat * 1.4;
      }

      pink.intensity = 2.2 + Math.sin(t * 1.3) * 0.5 * k;
      cyan.intensity = 2.2 + Math.sin(t * 1.3 + 2) * 0.5 * k;

      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;
      camera.position.x = mx * 0.8;
      camera.position.y = 0.2 - my * 0.5;
      camera.lookAt(0, -0.1, 0);

      renderer.render(scene, camera);
    }
    animate();

    const onResize = () => {
      if (!mount) return;
      width = mount.clientWidth || width;
      height = mount.clientHeight || height;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      ro.disconnect();
      renderer.dispose();
      linkGeo.dispose();
      heartGeo.dispose();
      silver.dispose();
      heartPink.dispose();
      envTex.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative ${className}`} style={style}>
      <div ref={mountRef} className="absolute inset-0" />

      {/* DATASYNC ACTIVE board */}
      <div
        className="absolute left-1 top-2 pointer-events-none"
        style={{
          padding: "8px 12px",
          borderRadius: 6,
          border: "1px solid rgba(120,200,255,.32)",
          background: "linear-gradient(180deg, rgba(20,46,74,.45), rgba(8,20,36,.22))",
          backdropFilter: "blur(3px)",
          filter: "drop-shadow(0 0 14px rgba(60,170,230,.25))",
          animation: "braceletFloatUI 6s ease-in-out infinite",
        }}
      >
        <div className="flex items-center gap-2">
          {/* satellite icon */}
          <svg width="22" height="16" viewBox="0 0 30 22" fill="none">
            <path d="M6 12 12 6m-3 3 4 4m4-10 5 5m-2.5-2.5L20 8" stroke="#9fdcff" strokeWidth="1.3" />
            <rect x="3.5" y="9.5" width="5" height="5" rx="1" transform="rotate(45 6 12)" stroke="#9fdcff" strokeWidth="1.3" />
            <rect x="15.5" y="9.5" width="5" height="5" rx="1" transform="rotate(45 18 12)" stroke="#9fdcff" strokeWidth="1.3" />
            <path d="M22 4a6 6 0 0 1 4 4M22.5 8a2.5 2.5 0 0 1 1.5 1.5" stroke="#ff7ab6" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <div className="text-right leading-tight">
            <div style={{ fontSize: 9, letterSpacing: 3, color: "#bfe6ff", opacity: 0.8 }}>DATASYNC</div>
            <div
              style={{
                fontSize: 13,
                letterSpacing: 2,
                fontWeight: 700,
                color: "#eafaff",
                textShadow: "0 0 10px rgba(120,220,255,.7)",
                animation: "braceletBlink 1.6s ease-in-out infinite",
              }}
            >
              ACTIVE
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes braceletBlink { 0%,100%{opacity:1} 50%{opacity:.45} }
        @keyframes braceletFloatUI { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
      `}</style>
    </div>
  );
}
