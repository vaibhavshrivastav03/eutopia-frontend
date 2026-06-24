import { motion } from "motion/react";
import { ChevronLeft, ShieldCheck, Syringe, Shield, Link2, Hospital, Building2, Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { useState, useEffect } from "react";
import { Skeleton } from "../components/Skeleton";

export function VaccinationRecords() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

    const vaccines = [
    {
      name: "COVID-19 (Pfizer)", date: "15 Oct 2023 • 10:30 AM",
      dose: "Dose 2 of 2", clinic: "City General Hospital",
      icon: Shield
    },
    {
      name: "Influenza (Flu Shot)", date: "02 Sep 2023 • 01:15 PM",
      dose: "Seasonal Annual Dose", clinic: "Wellness Clinic Center",
      icon: Syringe
    },
    {
      name: "Hepatitis B", date: "14 Mar 2023 • 09:45 AM",
      dose: "Dose 3 of 3 (Complete)", clinic: "Metro Medical Hub",
      icon: ShieldCheck
    },
    {
      name: "Tdap", date: "10 Jan 2022 • 11:20 AM",
      dose: "10 Year Booster", clinic: "Primary Care Associates",
      icon: Link2
    }
  ];

  return (
    <div className="flex flex-col h-full bg-[#f6f7f8] text-slate-900 relative">
      {/* Header */}
      <div className="bg-[#f6f7f8]/80 backdrop-blur-md flex items-center justify-center px-4 py-4 sticky top-0 z-20 border-b border-slate-200">
        <motion.button 
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate(-1)} 
          className="absolute left-2 p-3 active:bg-slate-200 md:hover:bg-slate-200 rounded-full transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Go back"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <h1 className="font-bold text-[18px]">Vaccination Records</h1>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pt-4 pb-24">
        {/* Summary Card */}
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-[#1577d3] rounded-[12px] p-5 text-white shadow-[0_10px_15px_-3px_rgba(21,119,211,0.2)] mb-6 relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-4 relative z-10">
            <span className="text-[14px] font-medium opacity-90">Immunization Status</span>
            <ShieldCheck size={22} className="text-white opacity-90" />
          </div>
          <h2 className="text-[24px] font-bold leading-tight mb-3 relative z-10">Up to date</h2>
          <p className="text-[12px] opacity-80 leading-snug relative z-10 w-[90%]">
            All recommended vaccinations for your age group and health profile are current.
          </p>
          
          {/* Decorative background element */}
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
            <ShieldCheck size={120} />
          </div>
        </motion.div>

        <h3 className="font-bold text-[18px] text-slate-900 mb-4">Administered Vaccines</h3>

        <div className="flex flex-col gap-3">
          {loading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-[12px] p-4 flex gap-4 border border-slate-200 shadow-sm">
                <Skeleton className="w-12 h-12 rounded-lg shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <Skeleton className="h-4 w-28 mb-2" />
                  <Skeleton className="h-3 w-40" />
                </div>
              </div>
            ))
          ) : (
            vaccines.map((vac, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -2 }}
                className="bg-white rounded-[12px] p-[17px] flex gap-4 border border-slate-200 shadow-sm transition-all"
              >
                <div className="w-[48px] h-[48px] rounded-[8px] bg-[#1577d3]/10 flex items-center justify-center shrink-0 text-[#1577d3]">
                  <vac.icon size={20} strokeWidth={2} />
                </div>
                
                <div className="flex-1 flex flex-col pt-0.5">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-[16px] text-slate-900 leading-tight">{vac.name}</span>
                    <span className="text-slate-500 font-medium text-[12px] shrink-0 ml-2">{vac.date}</span>
                  </div>
                  
                  <span className="text-slate-600 text-[14px] mb-2">{vac.dose}</span>
                  
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Building2 size={12} />
                    <span className="text-[12px]">{vac.clinic}</span>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        <p className="text-center text-slate-400 text-[12px] leading-relaxed mt-8 px-4 pb-4">
          End of records. Contact your healthcare provider if any information is missing or incorrect.
        </p>
      </div>

      {/* Upload FAB */}
      <div className="absolute bottom-24 right-4 z-50">
        <label className="flex items-center justify-center w-14 h-14 bg-[#1577d3] text-white rounded-full shadow-lg shadow-[#1577d3]/40 cursor-pointer hover:bg-[#115b9e] hover:scale-105 active:scale-95 transition-all">
          <Plus size={24} />
          <input type="file" accept="image/*,.pdf,.doc,.docx" className="hidden" onChange={(e) => console.log('File selected:', e.target.files)} />
        </label>
      </div>

      <BottomNav />
    </div>
  );
}