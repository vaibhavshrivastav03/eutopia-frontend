import { motion } from "motion/react";
import { Check, Heart, Building2, MapPin, Clock, Phone, Users } from "lucide-react";
import { useNavigate } from "react-router";
import imgBgPattern from "figma:asset/c21f25bdfa9378944b010dd50361a71faac4e7ed.png";

export function RequestSent() {
  const navigate = useNavigate();

  return (
    <div 
      className="flex flex-col h-full text-white relative overflow-y-auto no-scrollbar pt-12"
      style={{ backgroundImage: `url(${imgBgPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Header */}
      <div className="flex flex-col items-center px-8 mb-8 shrink-0">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="bg-[#22c55e] w-[96px] h-[96px] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.4)] mb-6"
        >
          <Check size={48} strokeWidth={4} />
        </motion.div>
        
        <h1 className="font-bold text-[30px] mb-2">Request Sent</h1>
        <p className="text-[#bfdbfe] text-[18px] text-center leading-snug">
          Hospital notified. Blood matching<br/>process initiated.
        </p>
      </div>

      <div className="px-6 flex-1">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#f8fafc] rounded-2xl p-5 text-slate-900 shadow-xl"
        >
          <h2 className="font-bold text-[12px] text-slate-500 uppercase tracking-widest mb-4">
            Request Summary
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-2.5 rounded-xl text-red-600 shrink-0">
                <Heart size={20} fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-[12px]">Blood Type</span>
                <span className="font-bold text-[18px] text-slate-900 leading-none mt-0.5">O+</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-2.5 rounded-xl text-blue-600 shrink-0">
                <Building2 size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-[12px]">Hospital</span>
                <span className="font-bold text-[18px] text-slate-900 leading-none mt-0.5">Nisa Premier Hospital</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-slate-200 p-2.5 rounded-xl text-slate-600 shrink-0">
                <MapPin size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-[12px]">Location</span>
                <span className="font-bold text-[16px] text-slate-900 leading-tight mt-0.5">Public Service Institute</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-slate-200 p-2.5 rounded-xl text-slate-600 shrink-0">
                <Clock size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-[12px]">Timestamp</span>
                <span className="font-bold text-[18px] text-slate-900 leading-none mt-0.5">
                  {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 pt-8 pb-10 flex flex-col gap-4 shrink-0 bg-gradient-to-t from-[#223e53] to-transparent">
        <motion.button 
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/dashboard")}
          className="w-full bg-[#e53935] text-white rounded-xl py-4 flex flex-col items-center justify-center border-b-4 border-[#7f1d1d] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)]"
        >
          <span className="font-bold text-[18px] mb-1 text-center leading-tight">RETURN TO<br/>DASHBOARD</span>
          <span className="text-[10px] opacity-90">Track your request status from there.</span>
        </motion.button>
        
        <div className="flex gap-3">
          <motion.button 
            whileTap={{ scale: 0.96 }}
            className="flex-1 bg-[#16a34a] text-white rounded-xl py-3 flex flex-col items-center justify-center gap-1 shadow-md"
          >
            <Phone size={24} />
            <span className="font-bold text-[14px]">Call Hospital</span>
          </motion.button>
          
          <motion.button 
            whileTap={{ scale: 0.96 }}
            className="flex-1 bg-[#334155] text-white rounded-xl py-3 flex flex-col items-center justify-center gap-1 shadow-md"
          >
            <Users size={24} />
            <span className="font-bold text-[14px]">Notify Contact</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}