import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, ShieldAlert, Thermometer, Heart, ActivitySquare, Pill, Syringe, Clock, FileEdit, Zap } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { EutopiaLogo } from "../components/EutopiaLogo";


import imgPatientAvatar from "figma:asset/a0e21d228d947d13296dc2faed224ae1c1cc85a9.png";

export function RecordTreatment() {
  const navigate = useNavigate();
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const userData = JSON.parse(
  localStorage.getItem("scannedUser") || "{}"
);

const patient =
  userData.users || {};

  const quickActions = [
    { id: "insulin", title: "Administer Insulin", icon: Syringe, color: "bg-blue-500", desc: "Short-acting 5u" },
    { id: "fluids", title: "IV Fluids (NS)", icon: Zap, color: "bg-amber-500", desc: "500ml/hr" },
    { id: "pain", title: "Pain Mgmt", icon: Pill, color: "bg-purple-500", desc: "Ibuprofen 400mg" },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50 text-slate-900 overflow-hidden relative">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        {/* Header */}
        <div className="bg-[#1c3445] flex items-center p-4 sticky top-0 z-20 shadow-md h-[68px]">
          <button 
            onClick={() => navigate(-1)}
            className="text-white p-3 -ml-2 mr-1 rounded-lg active:bg-white/20 md:hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeft size={24} />
          </button>
          <EutopiaLogo className="ml-[-8px] scale-90 origin-left" />
          <div className="ml-auto text-white text-[12px] font-bold tracking-widest uppercase">
            Record Tx
          </div>
        </div>

        <div className="p-4 flex flex-col gap-5">
          {/* Patient Context & Alert */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 flex items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border-[2px] border-[#00f2ff] p-0.5 shrink-0">
              <img src={
                patient.profile_photo ||
                patient.photo ||
                imgPatientAvatar
              }
              alt={patient.full_name} className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[18px] font-bold text-slate-800 leading-tight">{patient.full_name || "Unknown Patient"}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">{patient.medical_notes || "No Conditions"}</span>
                <span className="text-slate-500 text-[12px]">{patient.age
    ? `${patient.age} yrs`
    : "Age N/A"}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-red-50 border border-red-200 rounded-2xl p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert size={16} className="text-red-500" />
              <span className="text-red-700 font-bold text-[13px] uppercase tracking-wider">Current Alert</span>
            </div>
            <p className="text-red-600/90 text-[13px] font-medium">
              {patient.medical_notes
  ? `${patient.medical_notes}. Monitor closely before administering treatments.`
  : "Review patient history before administering treatments."}
            </p>
          </motion.div>

          {/* New Vitals */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200"
          >
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
              Log New Vitals
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center gap-3">
                <div className="bg-red-100 p-2 rounded-lg text-red-500"><Heart size={16} /></div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Heart Rate</span>
                  <input type="text" placeholder="-- bpm" className="bg-transparent text-[16px] font-bold text-slate-800 w-full outline-none placeholder:text-slate-300" />
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-500"><ActivitySquare size={16} /></div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Blood Pressure</span>
                  <input type="text" placeholder="--/--" className="bg-transparent text-[16px] font-bold text-slate-800 w-full outline-none placeholder:text-slate-300" />
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-lg text-amber-500"><Thermometer size={16} /></div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Temperature</span>
                  <input type="text" placeholder="-- °C" className="bg-transparent text-[16px] font-bold text-slate-800 w-full outline-none placeholder:text-slate-300" />
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg text-green-500"><Zap size={16} /></div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Glucose</span>
                  <input type="text" placeholder="-- mg/dL" className="bg-transparent text-[16px] font-bold text-slate-800 w-full outline-none placeholder:text-slate-300" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 pl-1">
              Contextual Quick Actions
            </h3>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => setSelectedAction(action.id === selectedAction ? null : action.id)}
                  className={`min-w-[140px] p-4 rounded-2xl flex flex-col gap-3 transition-all ${
                    selectedAction === action.id 
                      ? `${action.color} text-white shadow-md scale-105` 
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <action.icon size={20} className={selectedAction === action.id ? 'text-white' : action.color.replace('bg-', 'text-')} />
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-[13px] leading-tight">{action.title}</span>
                    <span className={`text-[10px] mt-1 ${selectedAction === action.id ? 'text-white/80' : 'text-slate-400'}`}>
                      {action.desc}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Clinical Notes */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Clinical Notes
              </h3>
              <FileEdit size={14} className="text-slate-400" />
            </div>
            <textarea 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter detailed treatment notes, observations, or procedural details here..."
              className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-[13px] text-slate-700 min-h-[120px] outline-none focus:border-blue-300 focus:bg-white transition-all resize-none"
            />
          </motion.div>
        </div>
      </div>

      {/* Floating Action Area */}
      <div className="absolute bottom-0 w-full bg-white border-t border-slate-200 p-4 pb-8 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] z-30">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2 text-slate-500 text-[11px] font-medium">
            <Clock size={12} />
            <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
          <div className="flex items-center gap-1.5 text-blue-600 text-[11px] font-bold">
            <CheckCircle2 size={12} />
            <span>Dr. Sarah Jenkins</span>
          </div>
        </div>
        <button 
          onClick={() => navigate("/dashboard")}
          className="w-full bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold text-[14px] uppercase tracking-wider py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 transition-all"
        >
          <ActivitySquare size={18} />
          Sign & Submit Treatment
        </button>
      </div>
    </div>
  );
}