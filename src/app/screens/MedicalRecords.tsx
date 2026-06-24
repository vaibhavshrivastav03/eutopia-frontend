import { motion } from "motion/react";
import { Search, ChevronLeft, ChevronRight, Activity, Pill, LayoutPanelLeft, Syringe, FileText } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { useState, useEffect } from "react";
import { Skeleton } from "../components/Skeleton";

export function MedicalRecords() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { icon: Activity, title: "Lab Reports", date: "Oct 12, 2023", path: "/lab-tests" },
    { icon: Pill, title: "Prescriptions", date: "Sep 28, 2023", path: "/prescriptions" },
    { icon: LayoutPanelLeft, title: "Imaging (X-Rays)", date: "Aug 15, 2023", path: "/imaging" },
    { icon: Syringe, title: "Vaccination Records", date: "Jan 05, 2024", path: "/vaccinations" },
    { icon: FileText, title: "Doctor Notes", date: "Dec 20, 2023", path: "/doctor-notes" },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50 text-slate-900 relative">
      {/* Header */}
      <div className="bg-slate-50 flex items-center justify-between px-4 py-4 sticky top-0 z-20 border-b border-slate-200">
        <motion.button 
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate(-1)} 
          className="p-3 -ml-3 active:bg-slate-200 md:hover:bg-slate-200 rounded-full transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Go back"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <h1 className="font-bold text-[18px]">Medical Records</h1>
        <button className="p-2 -mr-2">
          <Search size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-6 px-4 pt-4">
        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 flex items-center px-4 py-3 mb-6">
          <Search className="text-slate-400 mr-3" size={20} />
          <input 
            type="text" 
            placeholder="Search records..." 
            className="flex-1 bg-transparent outline-none text-[14px] text-slate-800 placeholder:text-slate-400"
          />
        </div>

        <div className="flex justify-between items-end mb-4">
          <h2 className="font-bold text-[18px]">Categories</h2>
          <button className="text-[#1577d3] font-semibold text-[14px]">View All</button>
        </div>

        <div className="flex flex-col gap-3">
          {loading ? (
            Array(5).fill(0).map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                <Skeleton className="w-12 h-12 rounded-lg shrink-0" />
                <div className="flex-1">
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-3 w-24" />
                </div>
                <Skeleton className="w-4 h-4 rounded-full" />
              </div>
            ))
          ) : (
            categories.map((cat, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.96, boxShadow: "0px 2px 4px rgba(0,0,0,0.1)" }}
                onClick={() => cat.path !== "#" && navigate(cat.path)}
                className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#1577d3]/10 text-[#1577d3] w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <cat.icon size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-[16px] text-slate-900">{cat.title}</span>
                    <span className="text-slate-500 text-[12px] mt-0.5">Last updated: {cat.date}</span>
                  </div>
                </div>
                <ChevronRight size={20} className="text-slate-400" />
              </motion.button>
            ))
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
