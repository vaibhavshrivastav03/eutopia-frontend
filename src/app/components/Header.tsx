import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { EutopiaLogo } from "./EutopiaLogo";

interface HeaderProps {
  showEmergencyAccess?: boolean;
  title?: string;
  showBack?: boolean;
  rightAction?: React.ReactNode;
}

export function Header({ showEmergencyAccess = true, title, showBack = false, rightAction }: HeaderProps) {
  const navigate = useNavigate();

  if (title) {
    return (
      <div className="flex items-center justify-between p-6 bg-white text-slate-800 shrink-0 z-10 relative border-b border-slate-100">
        <div className="flex items-center gap-2">
          {showBack && (
            <button 
              onClick={() => navigate(-1)} 
              className="p-3 -ml-3 text-slate-800 active:bg-slate-200 md:hover:bg-slate-100 rounded-full transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Go back"
            >
              <ArrowLeft size={24} />
            </button>
          )}
          <h1 className="text-[18px] font-bold tracking-tight">{title}</h1>
        </div>
        {rightAction && <div>{rightAction}</div>}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start p-6 pb-2 w-full shrink-0 z-10 relative">
      <EutopiaLogo className="ml-[-12px]" />
      {showEmergencyAccess && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 flex flex-col font-bold text-[10px] text-[rgba(0,242,255,0.8)] tracking-[3px] leading-tight"
        >
          <p>EMERGENCY</p>
          <p>ACCESS</p>
        </motion.div>
      )}
    </div>
  );
}
