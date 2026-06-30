import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

const FIRE_TRIGGER_VIDEO =
  "https://aispbvvuiuuluzzpkkml.supabase.co/storage/v1/object/public/Website%20Content/Trigger%20fire%20video.mp4";

export function FireTracking() {
  const navigate = useNavigate();

  return (
    <div
      className="w-full flex items-stretch sm:items-center justify-center p-0 sm:p-8"
      style={{
        background: "#0a1628",
        minHeight: "100dvh",
      }}
    >
      <div
        className="relative w-full overflow-hidden fire-frame rounded-none sm:rounded-[40px] border-0 sm:border-[12px] border-slate-900"
        style={{
          maxWidth: "100%",
          minHeight: "100dvh",
          background: "#000",
          boxShadow: "0 30px 80px rgba(0,0,0,.5)",
        }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          playsInline
          preload="auto"
          controls
        >
          <source
            src={FIRE_TRIGGER_VIDEO}
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>

        <button
          onClick={() => navigate("/emergency-services")}
          className="absolute top-5 left-5 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white"
        >
          <ChevronLeft size={22} />
        </button>
      </div>

      <style>{`
        @media (min-width:640px){
          .fire-frame{
            max-width:414px !important;
            min-height:0 !important;
            height:896px;
            max-height:96dvh;
          }
        }
      `}</style>
    </div>
  );
}