import { Outlet } from "react-router";

export function MobileFrame() {
  return (
    <div
      className="w-full flex items-stretch sm:items-center justify-center p-0 sm:p-8"
      style={{ background: "#0a1628", minHeight: "100dvh" }}
    >
      <div
        className="w-full relative overflow-hidden flex flex-col rounded-none sm:rounded-[40px] border-0 sm:border-[12px] border-slate-900 mobile-frame"
        style={{
          maxWidth: "100%",
          minHeight: "100dvh",
          background: "#ffffff",
          boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
        }}
      >
        <Outlet />
      </div>
      <style>{`
        @media (min-width: 640px) {
          .mobile-frame {
            max-width: 414px !important;
            min-height: 0 !important;
            height: 896px;
            max-height: 96dvh;
          }
        }
      `}</style>
    </div>
  );
}
