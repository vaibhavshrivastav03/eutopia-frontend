import { motion } from "motion/react";
import { Search, ChevronLeft, ChevronRight, Calendar, Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { useState, useEffect } from "react";
import { Skeleton } from "../components/Skeleton";

export function ImagingRecords() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const records = [
    {
      title: "Chest X-Ray (Posterior-Anterior)",
      desc: "Lungs are clear. No pleural effusions or pneumothorax identified. Cardiac...",
      date: "Oct 12, 2023 • 10:45 AM",
      dr: "Dr. Sarah Jenkins",
      img: "https://images.unsplash.com/photo-1631653355789-3e32dcce22db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzdCUyMHgtcmF5fGVufDF8fHx8MTc3MzUyNzEzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Lumbar Spine MRI",
      desc: "Mild disc bulging at L4-L5 level. No significant spinal stenosis noted. Nerv...",
      date: "Sep 28, 2023 • 02:15 PM",
      dr: "Dr. James Wilson",
      img: "https://images.unsplash.com/photo-1758691463165-ca9b5bc2b28a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG1yaSUyMHNjYW58ZW58MXx8fHwxNzczNTI3MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Right Knee X-Ray",
      desc: "No acute fracture or dislocation. Joint spaces are well maintained. No...",
      date: "Aug 15, 2023 • 09:30 AM",
      dr: "Dr. Emily Blunt",
      img: "https://images.unsplash.com/photo-1763234972759-4ae90c2de3a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVlJTIweC1yYXl8ZW58MXx8fHwxNzczNTI3MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Pelvic CT Scan",
      desc: "Contrast enhanced scan shows normal morphology of pelvic organs. No...",
      date: "Jul 02, 2023 • 11:00 AM",
      dr: "Dr. Robert Vance",
      img: "https://images.unsplash.com/photo-1666214280352-db292c05fd80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdCUyMHNjYW58ZW58MXx8fHwxNzczNTI3MTUw&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="flex flex-col h-full bg-white text-slate-900 relative">
      {/* Header */}
      <div className="bg-white flex items-center justify-center px-4 py-4 sticky top-0 z-20">
        <motion.button 
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate(-1)} 
          className="absolute left-2 p-3 active:bg-slate-200 md:hover:bg-slate-200 rounded-full transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Go back"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <h1 className="font-bold text-[18px]">Imaging (X-Rays)</h1>
      </div>

      <div className="flex px-4 border-b border-slate-100 bg-white sticky top-[60px] z-20 gap-6">
        <button className="py-3 text-[14px] font-bold border-b-[3px] border-[#1577d3] text-[#1577d3]">
          All
        </button>
        <button className="py-3 text-[14px] font-semibold text-slate-500 hover:text-slate-700 transition-colors">
          X-Ray
        </button>
        <button className="py-3 text-[14px] font-semibold text-slate-500 hover:text-slate-700 transition-colors">
          MRI
        </button>
        <button className="py-3 text-[14px] font-semibold text-slate-500 hover:text-slate-700 transition-colors">
          CT Scan
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        <div className="flex flex-col">
          {loading ? (
             Array(4).fill(0).map((_, i) => (
               <div key={i} className="p-4 border-b border-slate-100 flex gap-4">
                 <Skeleton className="w-[84px] h-[84px] rounded-xl shrink-0" />
                 <div className="flex-1 flex flex-col pt-1">
                   <Skeleton className="h-5 w-48 mb-2" />
                   <Skeleton className="h-4 w-full mb-1" />
                   <Skeleton className="h-4 w-4/5 mb-3" />
                   <Skeleton className="h-3 w-32" />
                 </div>
               </div>
             ))
          ) : (
            records.map((rec, i) => (
              <motion.button
                key={i}
                whileTap={{ backgroundColor: "rgba(241,245,249,1)" }}
                className="p-4 border-b border-slate-100 flex gap-4 text-left transition-colors relative"
              >
                <div className="w-[84px] h-[84px] rounded-xl overflow-hidden shrink-0 border border-slate-200 bg-black flex items-center justify-center">
                  <img src={rec.img} alt={rec.title} className="w-full h-full object-cover mix-blend-screen opacity-90" />
                </div>
                <div className="flex-1 flex flex-col pr-6">
                  <h3 className="font-bold text-[16px] text-slate-900 leading-tight mb-1">{rec.title}</h3>
                  <p className="text-slate-600 text-[13px] leading-snug line-clamp-2 mb-2">
                    {rec.desc}
                  </p>
                  <div className="flex items-center gap-1.5 mt-auto">
                    <Calendar size={12} className="text-[#1577d3]" />
                    <span className="text-slate-500 text-[12px] font-medium">{rec.date}</span>
                    <span className="text-slate-300 text-[12px] mx-1">•</span>
                    <span className="text-slate-500 text-[12px] font-medium">{rec.dr}</span>
                  </div>
                </div>
                <ChevronRight size={16} className="text-slate-400 absolute right-4 top-5" />
              </motion.button>
            ))
          )}
        </div>
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