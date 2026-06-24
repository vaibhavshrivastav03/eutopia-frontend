import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";

export function Layout() {
  const location = useLocation();

  return (
    <div className="bg-[#0f172a] flex items-stretch sm:items-center justify-center font-sans p-0 sm:p-8 w-full layout-root">
      <div className="w-full bg-[#1c3445] shadow-2xl overflow-hidden relative border-0 sm:border-[12px] border-slate-900 text-slate-100 flex flex-col rounded-none sm:rounded-[40px] layout-frame">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden no-scrollbar bg-[#1c3445]"
            style={{
              backgroundImage:
                "radial-gradient(circle at top, rgba(0,242,255,0.05) 0%, rgba(0,242,255,0) 60%)",
            }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
      <style>{`
        .layout-root {
          min-height: 100vh;
          min-height: 100dvh;
        }
        .layout-frame {
          max-width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
        }
        @media (min-width: 640px) {
          .layout-frame {
            max-width: 414px;
            min-height: 0;
            height: 896px;
            max-height: 96dvh;
          }
        }
      `}</style>
    </div>
  );
}
