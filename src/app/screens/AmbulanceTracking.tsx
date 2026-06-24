import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

const AMBULANCE_TRIGGER_VIDEO =
  "https://aispbvvuiuuluzzpkkml.supabase.co/storage/v1/object/public/Website%20Content/Ambulance%20trigger%20.mov";

export function AmbulanceTracking() {
  const navigate = useNavigate();

  return (
    <div
      className="w-full flex items-stretch sm:items-center justify-center p-0 sm:p-8"
      style={{ background: "#0a1628", minHeight: "100dvh" }}
    >
      <div
        className="relative w-full overflow-hidden ambulance-frame rounded-none sm:rounded-[40px] border-0 sm:border-[12px] border-slate-900"
        style={{
          maxWidth: "100%",
          minHeight: "100dvh",
          background: "#0a1628",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-6 bg-[#0a1628]">
          <div className="w-full max-w-md rounded-2xl border border-white/15 bg-[#13243f] p-6 shadow-2xl">
            <div className="text-[11px] tracking-[0.25em] text-[#7fd2f5] font-bold mb-3">
              AMBULANCE TRIGGER VIDEO
            </div>
            <a
              href={AMBULANCE_TRIGGER_VIDEO}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[14px] text-white underline break-all leading-relaxed"
            >
              {AMBULANCE_TRIGGER_VIDEO}
            </a>
          </div>
        </div>
        <button
          onClick={() => navigate("/emergency-services")}
          className="absolute top-5 left-5 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white"
        >
          <ChevronLeft size={22} />
        </button>
      </div>
      <style>{`
        @media (min-width:640px){
          .ambulance-frame{
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
