import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronLeft, User, Clock, CheckCircle, RefreshCw, ChevronRight, X, AlertTriangle, FileText, Pill, Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { useState, useEffect } from "react";
import { Skeleton } from "../components/Skeleton";
import { Toaster, toast } from "sonner";

export function Prescriptions() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'Active' | 'History'>('Active');
  const [selectedMed, setSelectedMed] = useState<any | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleRefill = (e: React.MouseEvent, med: any) => {
    e.stopPropagation();
    if (med.action === 'Refill Now') {
      toast.success(`Refill requested for ${med.name}. We will notify you when it's ready for pickup.`);
    } else if (med.action === 'Set Reminder') {
      toast.info(`Reminder set for ${med.name}.`);
    }
  };

  const handleDetails = (e: React.MouseEvent, med: any) => {
    e.stopPropagation();
    setSelectedMed(med);
  };

  const meds = [
    {
      name: "Dematraxone 50mg", tag: "DAILY",
      dose: "1 tablet daily with food",
      dr: "Dr. Sarah Jenkins", refills: "2 refills remaining",
      action: "Refill Now", disabled: false,
      timestamp: "Today, 08:00 AM",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
      sideEffects: "Mild nausea, dizziness, occasional headache.",
      instructions: "Take exactly as prescribed. Do not skip doses. If you miss a dose, take it as soon as you remember."
    },
    {
      name: "Ventolin Inhaler", tag: "AS NEEDED",
      dose: "1-2 puffs every 4-6 hours",
      dr: "Dr. Michael Chen", refills: "0 refills remaining",
      action: "No Refills", disabled: true,
      timestamp: "Yesterday, 02:30 PM",
      img: "https://images.unsplash.com/photo-1583947581924-860bda6a45df?w=200&h=200&fit=crop",
      sideEffects: "Shakiness, fast heart rate, nervous feeling.",
      instructions: "Shake well before each use. Rinse mouth after use to prevent oral thrush."
    },
    {
      name: "Amoxicillin 500mg", tag: "ANTIBIOTIC",
      dose: "Take twice daily for 7 days",
      dr: "Dr. Sarah Jenkins", refills: "Ends in 4 days",
      action: "Set Reminder", disabled: false,
      timestamp: "Mon, 09:15 AM",
      img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=200&fit=crop",
      sideEffects: "Upset stomach, diarrhea, rash.",
      instructions: "Finish the entire course even if you feel better. Take with food if it causes stomach upset."
    }
  ];

  const historyMeds = [
    {
      name: "Ibuprofen 400mg", tag: "COMPLETED",
      dose: "Take as needed for pain",
      dr: "Dr. Sarah Jenkins", refills: "Ended Oct 15, 2023",
      action: "View Records", disabled: true,
      timestamp: "Oct 2023",
      img: "https://images.unsplash.com/photo-1550572017-edb73fb46e01?w=200&h=200&fit=crop",
      sideEffects: "Stomach upset, mild heartburn.",
      instructions: "Take with food or milk to prevent stomach upset. Do not take on an empty stomach."
    },
    {
      name: "Azithromycin 250mg", tag: "COMPLETED",
      dose: "Take 2 tablets first day, then 1 daily",
      dr: "Dr. Michael Chen", refills: "Ended Sep 02, 2023",
      action: "View Records", disabled: true,
      timestamp: "Sep 2023",
      img: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=200&h=200&fit=crop",
      sideEffects: "Nausea, diarrhea, abdominal pain.",
      instructions: "Take on an empty stomach, at least 1 hour before or 2 hours after a meal."
    }
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50 text-slate-900 relative">
      <Toaster position="top-center" richColors />
      <div className="bg-white flex items-center justify-between px-4 py-4 sticky top-0 z-20 border-b border-slate-100">
        <motion.button 
          whileTap={{ scale: 0.96 }} 
          onClick={() => navigate(-1)} 
          className="p-3 -ml-3 active:bg-slate-100 md:hover:bg-slate-100 rounded-full transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Go back"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <h1 className="font-bold text-[18px]">Prescriptions</h1>
        <button className="p-2 -mr-2"><Search size={24} /></button>
      </div>

      <div className="flex px-4 border-b border-slate-200 bg-white sticky top-[60px] z-20">
        <button 
          onClick={() => setActiveTab('Active')}
          className={`flex-1 py-3 text-[13px] font-semibold text-center border-b-2 transition-colors duration-300 ${activeTab === 'Active' ? 'border-[#1577d3] text-[#1577d3]' : 'border-transparent text-slate-500'}`}
        >
          Active (3)
        </button>
        <button 
          onClick={() => setActiveTab('History')}
          className={`flex-1 py-3 text-[13px] font-semibold text-center border-b-2 transition-colors duration-300 ${activeTab === 'History' ? 'border-[#1577d3] text-[#1577d3]' : 'border-transparent text-slate-500'}`}
        >
          History
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pt-6 pb-6">
        <AnimatePresence mode="wait">
          {activeTab === 'Active' ? (
            <motion.div
              key="active"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-[18px]">Current Medications</h2>
                <button className="text-[#1577d3] font-semibold text-[13px]">Update list</button>
              </div>

              <div className="flex flex-col gap-4 mb-6">
                {loading ? (
                  Array(3).fill(0).map((_, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex gap-4">
                      <div className="flex-1">
                        <Skeleton className="h-5 w-40 mb-2" />
                        <Skeleton className="h-4 w-48 mb-4" />
                        <Skeleton className="h-3 w-32 mb-2" />
                        <Skeleton className="h-3 w-24 mb-4" />
                        <div className="flex gap-2">
                          <Skeleton className="h-8 w-24 rounded-lg" />
                          <Skeleton className="h-8 w-24 rounded-lg" />
                        </div>
                      </div>
                      <Skeleton className="w-[80px] h-[80px] rounded-xl shrink-0" />
                    </div>
                  ))
                ) : (
                  meds.map((med, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -2 }}
                      onClick={(e) => handleDetails(e, med)}
                      className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4 cursor-pointer"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex flex-col flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className="font-bold text-[16px] text-slate-900">{med.name}</span>
                            <span className="bg-blue-50 text-blue-600 text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wide">
                              {med.tag}
                            </span>
                          </div>
                          <span className="text-slate-600 text-[13px] mb-3">{med.dose}</span>
                          
                          <div className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-2 text-slate-500 text-[12px]">
                              <User size={14} />
                              <span>{med.dr}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 text-[12px]">
                              <Clock size={14} />
                              <span>{med.timestamp} • {med.refills}</span>
                            </div>
                          </div>
                        </div>
                        
                        <img src={med.img} alt={med.name} className="w-[72px] h-[72px] rounded-xl object-cover shrink-0" />
                      </div>
                      
                      <div className="flex gap-2 mt-1">
                        <motion.button 
                          whileTap={!med.disabled ? { scale: 0.96 } : {}}
                          onClick={(e) => handleRefill(e, med)}
                          className={`px-4 py-2 rounded-lg text-[13px] font-bold flex items-center justify-center gap-1.5 flex-1
                            ${med.disabled ? 'bg-slate-100 text-slate-400' : 'bg-[#1577d3] text-white hover:bg-[#0f60aa] shadow-[0_4px_10px_rgba(21,119,211,0.2)]'}`}
                        >
                          {!med.disabled && med.action !== 'Set Reminder' ? <RefreshCw size={14} /> : null}
                          {med.action}
                        </motion.button>
                        <motion.button 
                          whileTap={{ scale: 0.96 }}
                          onClick={(e) => handleDetails(e, med)}
                          className={`px-4 py-2 rounded-lg text-[13px] font-bold flex-1
                            ${med.disabled ? 'bg-[#1577d3]/10 text-[#1577d3]' : 'bg-slate-100 text-slate-700'}`}
                        >
                          {med.disabled ? 'Request' : 'Details'}
                        </motion.button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {!loading && (
                <div className="bg-[#f8fafc] border border-blue-100 rounded-xl p-4 flex gap-3 mt-4">
                  <div className="text-[#1577d3] shrink-0 mt-0.5">
                    <CheckCircle size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[14px] text-slate-800 mb-1">Need a new prescription?</span>
                    <span className="text-slate-600 text-[12px] leading-snug mb-3">
                      Book a quick telehealth consultation to discuss new symptoms or medication changes.
                    </span>
                    <button className="text-[#1577d3] font-bold text-[13px] self-start flex items-center gap-1">
                      Book Consultation <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="history"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-[18px]">Past Medications</h2>
              </div>
              <div className="flex flex-col gap-4 mb-6">
                {historyMeds.map((med, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -2 }}
                    onClick={(e) => handleDetails(e, med)}
                    className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4 cursor-pointer opacity-75 grayscale-[20%]"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex flex-col flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="font-bold text-[16px] text-slate-900">{med.name}</span>
                          <span className="bg-slate-100 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wide">
                            {med.tag}
                          </span>
                        </div>
                        <span className="text-slate-600 text-[13px] mb-3">{med.dose}</span>
                        
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-2 text-slate-500 text-[12px]">
                            <User size={14} />
                            <span>{med.dr}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-500 text-[12px]">
                            <Clock size={14} />
                            <span>{med.refills}</span>
                          </div>
                        </div>
                      </div>
                      
                      <img src={med.img} alt={med.name} className="w-[72px] h-[72px] rounded-xl object-cover shrink-0" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Details Modal (Bottom Sheet style) */}
      <AnimatePresence>
        {selectedMed && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMed(null)}
              className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 flex flex-col max-h-[90vh] shadow-xl md:w-[500px] md:mx-auto md:h-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:rounded-3xl"
            >
              <div className="flex justify-between items-center px-6 py-5 border-b border-slate-100">
                <h2 className="font-bold text-[18px]">Medication Details</h2>
                <button 
                  onClick={() => setSelectedMed(null)}
                  className="p-2 bg-slate-50 text-slate-500 rounded-full hover:bg-slate-100 active:scale-95 transition-all"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto">
                <div className="flex items-center gap-5 mb-6">
                  <img src={selectedMed.img} alt={selectedMed.name} className="w-20 h-20 rounded-2xl object-cover shadow-sm border border-slate-100" />
                  <div>
                    <h3 className="font-bold text-[22px] leading-tight mb-1">{selectedMed.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide ${selectedMed.tag === 'COMPLETED' ? 'bg-slate-100 text-slate-600' : 'bg-blue-50 text-blue-600'}`}>
                        {selectedMed.tag}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-700 font-bold text-[14px] mb-2">
                      <Pill size={16} className="text-[#1577d3]" />
                      Dosage
                    </div>
                    <p className="text-[13px] text-slate-600">{selectedMed.dose}</p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-700 font-bold text-[14px] mb-2">
                      <FileText size={16} className="text-[#1577d3]" />
                      Instructions
                    </div>
                    <p className="text-[13px] text-slate-600">{selectedMed.instructions}</p>
                  </div>

                  <div className="bg-orange-50/50 rounded-2xl p-4 border border-orange-100">
                    <div className="flex items-center gap-2 text-orange-800 font-bold text-[14px] mb-2">
                      <AlertTriangle size={16} className="text-orange-600" />
                      Possible Side Effects
                    </div>
                    <p className="text-[13px] text-orange-900/80">{selectedMed.sideEffects}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 mt-2">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-500 text-[13px]">Prescribed by</span>
                      <span className="font-semibold text-[13px] text-slate-900">{selectedMed.dr}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-500 text-[13px]">Refill Status</span>
                      <span className="font-semibold text-[13px] text-slate-900">{selectedMed.refills}</span>
                    </div>
                  </div>
                </div>
              </div>

              {!selectedMed.disabled && (
                <div className="p-4 border-t border-slate-100 bg-white rounded-b-3xl">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      handleRefill(e, selectedMed);
                      setSelectedMed(null);
                    }}
                    className="w-full bg-[#1577d3] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#1577d3]/20"
                  >
                    Request Refill Now
                  </motion.button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

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