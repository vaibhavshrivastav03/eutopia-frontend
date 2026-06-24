import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronLeft, Activity, Droplet, FlaskConical, TrendingUp, Clock, Calendar, MapPin, Info, Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { useState, useEffect } from "react";
import { Skeleton } from "../components/Skeleton";

export function LabTests() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Recent');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const tabs = ['All Tests', 'Recent', 'Pending', 'Scheduled'];

  const allTestsData = [
    { icon: Activity, name: "HbA1c (Hemoglobin A1c)", date: "Oct 12, 2023 • LabCorp", value: "5.7%", status: "Stable", color: "text-green-600" },
    { icon: Droplet, name: "Hemoglobin", date: "Sep 28, 2023 • Quest Diag.", value: "14.2 g/dL", status: "Normal", color: "text-green-600" },
    { icon: FlaskConical, name: "Lipid Profile", date: "Sep 28, 2023 • Quest Diag.", value: "210 mg/dL", status: "High", color: "text-red-600", valColor: "text-red-600" },
    { icon: Activity, name: "Comprehensive Metabolic", date: "Jun 15, 2023 • Eutopia Lab", value: "Normal", status: "Normal", color: "text-green-600" },
    { icon: Droplet, name: "Complete Blood Count", date: "Jan 10, 2023 • Eutopia Lab", value: "Normal", status: "Normal", color: "text-green-600" },
    { icon: Activity, name: "HbA1c (Hemoglobin A1c)", date: "Dec 05, 2022 • Eutopia Lab", value: "6.1%", status: "Elevated", color: "text-amber-600", valColor: "text-amber-600" },
  ];

  const pendingData = [
    { name: "Thyroid Panel (TSH, T3, T4)", date: "Today, 09:00 AM", expected: "Expected in 24h", status: "Processing" },
    { name: "Vitamin D, 25-Hydroxy", date: "Yesterday, 11:30 AM", expected: "Expected in 48h", status: "In Transit" },
  ];

  const scheduledData = [
    { name: "Fasting Blood Glucose", date: "Nov 15, 2023", time: "08:00 AM", location: "Eutopia Central Lab", note: "Fast for 12 hours prior to test. Water is permitted." },
    { name: "Annual Wellness Panel", date: "Dec 01, 2023", time: "09:30 AM", location: "Eutopia Gen. Hospital", note: "Please bring your ID and insurance card." },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50 text-slate-900 relative">
      <div className="bg-white flex items-center justify-between px-4 py-4 sticky top-0 z-20">
        <motion.button 
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate(-1)} 
          className="p-3 -ml-3 active:bg-slate-100 md:hover:bg-slate-100 rounded-full transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Go back"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <h1 className="font-bold text-[18px]">Lab Tests</h1>
        <button className="p-2 -mr-2">
          <Search size={24} />
        </button>
      </div>

      <div className="flex px-4 border-b border-slate-200 bg-white sticky top-[60px] z-20">
        {tabs.map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-[13px] font-semibold text-center border-b-2 transition-colors duration-200 ${activeTab === tab ? 'border-[#1577d3] text-[#1577d3]' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar relative">
        <div className="px-4 pt-6 pb-6 min-h-full">
          <AnimatePresence mode="wait">
            {activeTab === 'Recent' && (
              <motion.div
                key="recent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="font-bold text-[18px] mb-4">Latest Result</h2>

                {loading ? (
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
                     <Skeleton className="h-4 w-32 mb-2" />
                     <Skeleton className="h-6 w-48 mb-6" />
                     <Skeleton className="h-12 w-32 mb-6" />
                     <Skeleton className="h-4 w-full mb-6" />
                     <Skeleton className="h-10 w-full rounded-xl" />
                  </div>
                ) : (
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-slate-500 text-[12px] font-medium uppercase tracking-wider">OCT 24, 2023 • 08:30 AM • FASTING</span>
                      <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-md text-[11px] font-bold">Normal</span>
                    </div>
                    <h3 className="font-bold text-[20px] text-slate-900 mb-4">Blood Glucose</h3>
                    
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="font-bold text-[42px] text-slate-800 leading-none">105</span>
                      <span className="text-slate-500 font-medium">mg/dL</span>
                    </div>

                    <div className="w-full h-2 flex rounded-full overflow-hidden mb-2">
                      <div className="bg-amber-400 w-1/3" />
                      <div className="bg-green-500 w-1/3" />
                      <div className="bg-red-500 w-1/3" />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 font-medium mb-6">
                      <span>Low</span>
                      <span>Normal Range (70-130)</span>
                      <span>High</span>
                    </div>

                    <motion.button 
                      whileTap={{ scale: 0.96 }}
                      className="w-full bg-[#1577d3]/10 text-[#1577d3] font-bold py-3.5 rounded-xl text-[14px]"
                    >
                      View Detailed Analysis
                    </motion.button>
                  </motion.div>
                )}

                <div className="flex justify-between items-end mb-4">
                  <h2 className="font-bold text-[18px]">Past Reports</h2>
                  <button className="text-[#1577d3] font-semibold text-[14px]">View All</button>
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  {loading ? (
                     Array(3).fill(0).map((_, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                        <Skeleton className="w-12 h-12 rounded-lg shrink-0" />
                        <div className="flex-1">
                          <Skeleton className="h-4 w-40 mb-2" />
                          <Skeleton className="h-3 w-24" />
                        </div>
                        <div className="flex flex-col items-end">
                           <Skeleton className="h-4 w-12 mb-1" />
                           <Skeleton className="h-3 w-10" />
                        </div>
                      </div>
                    ))
                  ) : (
                    <>
                      {[
                        { icon: Activity, name: "HbA1c (Hemoglobin A1c)", date: "Oct 12, 2023 • 09:15 AM • LabCorp", value: "5.7%", status: "Stable", color: "text-green-600" },
                        { icon: Droplet, name: "Hemoglobin", date: "Sep 28, 2023 • 11:30 AM • Quest Diag.", value: "14.2 g/dL", status: "Normal", color: "text-green-600" },
                        { icon: FlaskConical, name: "Lipid Profile", date: "Sep 28, 2023 • 11:45 AM • Quest Diag.", value: "210 mg/dL", status: "High", color: "text-red-600", valColor: "text-red-600" },
                      ].map((test, i) => (
                        <motion.button
                          key={i}
                          whileTap={{ scale: 0.96 }}
                          className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between text-left"
                        >
                          <div className="flex items-center gap-4">
                            <div className="bg-[#1577d3]/10 text-[#1577d3] w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                              <test.icon size={20} />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-bold text-[14px] text-slate-900">{test.name}</span>
                              <span className="text-slate-500 text-[12px] mt-0.5">{test.date}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className={`font-bold text-[14px] ${test.valColor || 'text-slate-900'}`}>{test.value}</span>
                            <span className={`text-[11px] font-medium ${test.color}`}>{test.status}</span>
                          </div>
                        </motion.button>
                      ))}
                    </>
                  )}
                </div>

                {/* Trends Card */}
                {!loading && (
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="bg-[#2383d4] rounded-2xl p-5 text-white shadow-lg shadow-[#2383d4]/20"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-[16px]">Result Trends</span>
                      <TrendingUp size={18} />
                    </div>
                    <div className="bg-[#1a6fb5] h-[120px] rounded-xl mb-4 relative overflow-hidden flex items-end px-2 pt-4 pb-2 gap-2">
                      {[40, 60, 30, 80, 50, 90, 70, 40].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="flex-1 bg-white/20 rounded-t-sm"
                        />
                      ))}
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <motion.path 
                          d="M0,80 L40,60 L80,90 L120,40 L160,70 L200,30 L240,60 L280,80" 
                          fill="none" 
                          stroke="rgba(255,255,255,0.8)" 
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.path 
                          d="M0,80 L40,60 L80,90 L120,40 L160,70 L200,30 L240,60 L280,80 L280,120 L0,120 Z" 
                          fill="url(#trend-gradient)" 
                          stroke="none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1, duration: 0.5 }}
                        />
                        <defs>
                          <linearGradient id="trend-gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p className="text-[12px] text-blue-100 leading-snug">
                      Your average glucose has decreased by 4% compared to last month. Keep up the consistent diet.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}

            {activeTab === 'All Tests' && (
              <motion.div
                key="all"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-[18px]">Test History</h2>
                </div>
                <div className="flex flex-col gap-3">
                  {allTestsData.map((test, i) => (
                    <motion.button
                      key={i}
                      whileTap={{ scale: 0.96 }}
                      className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-[#1577d3]/10 text-[#1577d3] w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                          <test.icon size={20} />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-[14px] text-slate-900">{test.name}</span>
                          <span className="text-slate-500 text-[12px] mt-0.5">{test.date}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className={`font-bold text-[14px] ${test.valColor || 'text-slate-900'}`}>{test.value}</span>
                        <span className={`text-[11px] font-medium ${test.color}`}>{test.status}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'Pending' && (
              <motion.div
                key="pending"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="font-bold text-[18px] mb-2">Pending Results</h2>
                <p className="text-slate-500 text-[13px] mb-6">These tests have been administered and are currently being processed by the laboratory.</p>
                
                <div className="flex flex-col gap-4">
                   {pendingData.map((test, i) => (
                      <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-3">
                         <div className="flex justify-between items-start">
                            <div className="bg-amber-100 text-amber-700 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                              <Clock size={20} />
                            </div>
                            <span className="bg-amber-50 text-amber-600 px-2.5 py-1 rounded-md text-[11px] font-bold border border-amber-100">
                              {test.status}
                            </span>
                         </div>
                         <div>
                            <h3 className="font-bold text-[16px] text-slate-900">{test.name}</h3>
                            <p className="text-slate-500 text-[12px] mt-1">Sample collected: {test.date}</p>
                         </div>
                         <div className="bg-slate-50 p-3 rounded-lg flex items-center gap-2 mt-1">
                            <Info size={16} className="text-slate-400 shrink-0" />
                            <span className="text-[12px] text-slate-600 font-medium">{test.expected}</span>
                         </div>
                      </div>
                   ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'Scheduled' && (
              <motion.div
                key="scheduled"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="font-bold text-[18px] mb-4">Upcoming Appointments</h2>
                <div className="flex flex-col gap-4">
                   {scheduledData.map((test, i) => (
                      <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-3">
                         <div className="flex justify-between items-start mb-1">
                            <div className="bg-blue-100 text-[#1577d3] w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                              <Calendar size={20} />
                            </div>
                            <div className="text-right">
                               <div className="font-bold text-[14px] text-slate-900">{test.date}</div>
                               <div className="text-[12px] text-slate-500">{test.time}</div>
                            </div>
                         </div>
                         <h3 className="font-bold text-[16px] text-slate-900">{test.name}</h3>
                         
                         <div className="flex items-center gap-2 text-slate-600 text-[13px] mt-1">
                            <MapPin size={16} className="text-slate-400 shrink-0" />
                            <span>{test.location}</span>
                         </div>
                         {test.note && (
                            <div className="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-2 mt-2">
                               <Info size={16} className="text-[#1577d3] shrink-0 mt-0.5" />
                               <span className="text-[12px] text-blue-800 leading-snug">{test.note}</span>
                            </div>
                         )}
                         <button className="w-full mt-3 py-3 border border-slate-200 text-slate-700 font-semibold rounded-xl text-[13px] active:bg-slate-50 transition-colors">
                           Reschedule
                         </button>
                      </div>
                   ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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