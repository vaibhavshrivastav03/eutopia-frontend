import { motion } from "motion/react";
import { Search, ChevronLeft, MapPin, Phone, ExternalLink, ShieldCheck, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { useState, useEffect } from "react";
import { Skeleton } from "../components/Skeleton";

export function Hospitals() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const hospitals = [
    {
      name: "St. Mary's General",
      dist: "1.2 miles away • 12 min drive",
      open: true,
      color: "text-[#1577d3]",
      bg: "bg-[#1577d3]/10",
      icon: ShieldCheck
    },
    {
      name: "City Medical Center",
      dist: "2.5 miles away • 18 min drive",
      open: true,
      color: "text-[#1577d3]",
      bg: "bg-[#1577d3]/10",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50 text-slate-900 relative">
      <div className="bg-slate-50 flex items-center justify-between px-4 py-4 sticky top-0 z-20">
        <motion.button 
          whileTap={{ scale: 0.96 }} 
          onClick={() => navigate(-1)} 
          className="p-3 -ml-3 active:bg-slate-200 md:hover:bg-slate-200 rounded-full transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Go back"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <h1 className="font-bold text-[18px]">Hospitals</h1>
        <button className="p-2 -mr-2"><Search size={24} /></button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-6">
        <div className="bg-slate-200 rounded-xl p-1 flex mb-6 shadow-inner">
          <button className="flex-1 py-2 text-[13px] font-semibold text-slate-500 rounded-lg">Map View</button>
          <button className="flex-1 py-2 text-[13px] font-semibold bg-white text-[#1577d3] shadow-sm rounded-lg">List View</button>
        </div>

        {loading ? (
          <Skeleton className="w-full h-[180px] rounded-2xl mb-8" />
        ) : (
          <div className="w-full h-[180px] rounded-2xl overflow-hidden mb-8 shadow-sm border border-slate-200 relative">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop" alt="Map" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
            {/* Fake pins */}
            <div className="absolute top-[40%] left-[30%] bg-[#1577d3] text-white p-1.5 rounded-full border-2 border-white shadow-md">
              <ShieldCheck size={14} />
            </div>
            <div className="absolute top-[60%] right-[40%] bg-[#1577d3] text-white p-1.5 rounded-full border-2 border-white shadow-md">
              <ShieldCheck size={14} />
            </div>
          </div>
        )}

        <div className="flex justify-between items-end mb-4">
          <h2 className="font-bold text-[18px]">Nearby Hospitals</h2>
          <button className="text-[#1577d3] font-semibold text-[13px]">View All</button>
        </div>

        <div className="flex flex-col gap-4 mb-8">
          {loading ? (
            Array(2).fill(0).map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-4">
                <div className="flex gap-3">
                  <Skeleton className="w-12 h-12 rounded-xl shrink-0" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-40 mb-2" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                </div>
                <Skeleton className="h-6 w-48 rounded-md" />
                <div className="flex gap-2">
                  <Skeleton className="h-10 flex-1 rounded-xl" />
                  <Skeleton className="h-10 w-12 rounded-xl shrink-0" />
                </div>
              </div>
            ))
          ) : (
            hospitals.map((h, i) => (
              <motion.div key={i} whileHover={{ y: -2 }} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${h.bg} ${h.color}`}>
                    <h.icon size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[16px] text-slate-900">{h.name}</span>
                    <span className="text-slate-500 text-[13px]">{h.dist}</span>
                  </div>
                </div>
                
                {h.open && (
                  <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-md self-start uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle size={12} /> Emergency Open 24/7
                  </div>
                )}
                
                <div className="flex gap-2 mt-1">
                  <motion.button whileTap={{ scale: 0.96 }} className="flex-1 bg-[#1577d3] hover:bg-[#0f60aa] text-white py-2.5 rounded-xl font-bold text-[14px] flex justify-center items-center gap-2 shadow-[0_4px_10px_rgba(21,119,211,0.2)]">
                    <ExternalLink size={16} /> Directions
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.96 }} className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex justify-center items-center hover:bg-slate-200">
                    <Phone size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ))
          )}
        </div>

        <h2 className="font-bold text-[18px] mb-4">Affiliated Clinics</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4">
          {loading ? (
             Array(2).fill(0).map((_, i) => (
               <div key={i} className="min-w-[240px] bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
                 <Skeleton className="w-full h-[120px] rounded-xl mb-4" />
                 <Skeleton className="h-5 w-40 mb-2" />
                 <Skeleton className="h-3 w-32 mb-4" />
                 <Skeleton className="h-10 w-full rounded-xl" />
               </div>
             ))
          ) : (
            <motion.div whileTap={{ scale: 0.98 }} className="min-w-[260px] bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex flex-col cursor-pointer">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=200&fit=crop" alt="Clinic" className="w-full h-[120px] object-cover rounded-xl mb-4" />
              <h3 className="font-bold text-[16px] text-slate-900">Northside Urgent Care</h3>
              <p className="text-slate-500 text-[12px] mb-4">Closes at 9:00 PM • 3.1 miles</p>
              <button className="w-full py-2.5 bg-[#1577d3]/10 text-[#1577d3] rounded-xl font-bold text-[13px]">
                Book Appointment
              </button>
            </motion.div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}