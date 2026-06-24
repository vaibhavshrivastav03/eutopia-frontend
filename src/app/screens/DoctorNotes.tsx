import { motion } from "motion/react";
import { Search, ChevronLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { useState, useEffect } from "react";
import { Skeleton } from "../components/Skeleton";

export function DoctorNotes() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const notes = [
    {
      dr: "Dr. Sarah Jenkins", type: "Cardiology Consultation", date: "Oct 24",
      desc: "Patient shows excellent cardiovascular health. Recommended continuing current...",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop"
    },
    {
      dr: "Dr. Marcus Thorne", type: "Annual Wellness Visit", date: "Oct 18",
      desc: "All vital signs within normal range. Blood work results pending. Patient reported...",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop"
    },
    {
      dr: "Dr. Elena Rodriguez", type: "Dermatology Check-up", date: "Sep 30",
      desc: "Skin examination complete. Recommended SPF 50 for daily use. No suspicious lesion...",
      img: "https://images.unsplash.com/photo-1594824432244-67fb6f62b1a5?w=100&h=100&fit=crop"
    },
    {
      dr: "Dr. James Wilson", type: "Orthopedic Review", date: "Sep 12",
      desc: "Knee recovery is progressing well after physical therapy. Suggested continuing...",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop"
    },
    {
      dr: "Dr. Linda Gray", type: "Nutrition Consultation", date: "Aug 25",
      desc: "Reviewed meal logs. Discussed increasing fiber intake and Vitamin D supplementatio...",
      img: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=100&h=100&fit=crop"
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
        <h1 className="font-bold text-[18px]">Doctor Notes</h1>
        <div className="w-8" />
      </div>

      <div className="px-4 pb-4 bg-slate-50 sticky top-[60px] z-20">
        <div className="bg-slate-100 rounded-xl shadow-inner border border-slate-200/60 flex items-center px-4 py-3">
          <Search className="text-slate-400 mr-3" size={20} />
          <input 
            type="text" 
            placeholder="Search notes or doctors" 
            className="flex-1 bg-transparent outline-none text-[14px] text-slate-800 placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex px-4 border-b border-slate-200 bg-slate-50 sticky top-[132px] z-20">
        <button className="py-3 mr-6 text-[13px] font-semibold border-b-2 border-[#1577d3] text-[#1577d3]">
          Recent
        </button>
        <button className="py-3 text-[13px] font-semibold border-b-2 border-transparent text-slate-500">
          Archived
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24 bg-white">
        <div className="flex flex-col">
          {loading ? (
             Array(4).fill(0).map((_, i) => (
               <div key={i} className="p-4 border-b border-slate-100 flex gap-4">
                 <Skeleton className="w-[52px] h-[52px] rounded-full shrink-0" />
                 <div className="flex-1">
                   <div className="flex justify-between items-start mb-1">
                     <Skeleton className="h-4 w-32" />
                     <Skeleton className="h-3 w-12" />
                   </div>
                   <Skeleton className="h-3 w-40 mb-2" />
                   <Skeleton className="h-3 w-full mb-1" />
                   <Skeleton className="h-3 w-4/5" />
                 </div>
               </div>
             ))
          ) : (
            notes.map((note, i) => (
              <motion.button 
                key={i}
                whileTap={{ backgroundColor: "rgba(241,245,249,1)" }}
                className="p-5 border-b border-slate-100 flex gap-4 text-left transition-colors"
              >
                <div className="w-[56px] h-[56px] rounded-full overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                  <img src={note.img} alt={note.dr} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col pt-0.5">
                  <div className="flex justify-between items-start mb-0.5">
                    <span className="font-bold text-[16px] text-slate-900 leading-tight">{note.dr}</span>
                    <span className="text-slate-500 text-[12px] whitespace-nowrap ml-2">{note.date}</span>
                  </div>
                  <span className="text-[#1577d3] text-[13px] font-medium mb-1.5">{note.type}</span>
                  <span className="text-slate-500 text-[13px] leading-snug line-clamp-2">
                    {note.desc}
                  </span>
                </div>
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