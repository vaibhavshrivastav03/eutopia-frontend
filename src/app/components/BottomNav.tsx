import { motion } from "motion/react";
import { useLocation, useNavigate } from "react-router";
import { Home, FileText, Building2, User } from "lucide-react";
import { SoundEngine } from "../utils/sound";

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/dashboard", icon: Home, label: "Home" },
    { path: "/records", icon: FileText, label: "Records" },
    { path: "/hospital", icon: Building2, label: "Hospital" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="bg-white border-t border-slate-200 flex justify-between items-center px-6 py-4 pb-8 z-30 shadow-[0_-10px_20px_rgba(0,0,0,0.02)] shrink-0 w-full mt-auto sticky bottom-0">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path || (item.path === "/records" && ['/lab-tests', '/prescriptions', '/doctor-notes'].includes(location.pathname));
        return (
          <motion.button
            key={item.path}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              if (!isActive) {
                SoundEngine.playPop();
                navigate(item.path);
              }
            }}
            className={`flex flex-col items-center transition-colors ${isActive ? 'text-[#1577d3]' : 'text-slate-400'}`}
          >
            <item.icon size={24} />
            <span className={`text-[10px] mt-1 ${isActive ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
