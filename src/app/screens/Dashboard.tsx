import { motion } from "motion/react";
import { Shield, AlertTriangle, ChevronRight, Activity, Droplet, ActivitySquare, Pill, ClipboardList, Stethoscope, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { EutopiaLogo } from "../components/EutopiaLogo";

import imgPatientAvatar from "../../imports/Our_model_child_-2.PNG";

const PATIENT_IMG = imgPatientAvatar;

export function Dashboard() {
  const navigate = useNavigate();

  const userData = JSON.parse(
      localStorage.getItem(
        "scannedUser"
      ) || "{}"
    );

    const patient =
      userData.users || {};

  return (
    <div className="flex flex-col h-full bg-slate-50 text-slate-900 overflow-hidden relative">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Header */}
        <div className="bg-[#1c3445] flex justify-between items-center p-4 sticky top-0 z-20 shadow-md">
          <div className="flex items-center gap-2">
            <EutopiaLogo className="ml-[-12px]" />
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate("/")}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors flex items-center gap-1"
            >
              <RefreshCw size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Restart</span>
            </button>
            <button className="bg-red-600 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider shadow-sm">
              Emergency
            </button>
          </div>
        </div>

        <div className="p-4">
          {/* Patient Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-[#236b9c] rounded-3xl p-6 text-white flex flex-col items-center text-center shadow-lg relative overflow-hidden mb-4"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            
            <div className="w-[88px] h-[88px] rounded-full border-[3px] border-[#00f2ff] p-1 mb-3">
              <img
              src={
                patient.profile_photo ||
                patient.photo ||
                PATIENT_IMG
              }
              alt={patient.full_name} className="w-full h-full aspect-square rounded-full object-cover" />
            </div>
            
            <h2 className="text-[22px] font-bold">{patient.full_name || "Unknown Patient"}</h2>
            <p className="text-[12px] text-slate-200 mt-1 opacity-90">
              Age: {patient.age || "N/A"}
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
            <button onClick={() => navigate("/records")} className="bg-[#236b9c] text-white px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap shadow-sm">
              Medical Records
            </button>
            <button onClick={() => navigate("/lab-tests")} className="bg-white border border-slate-200 text-slate-500 px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap shadow-sm">
              Lab Tests
            </button>
            <button onClick={() => navigate("/prescriptions")} className="bg-white border border-slate-200 text-slate-500 px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap shadow-sm">
              Prescriptions
            </button>
          </div>

          {/* Alert */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-3 mb-6 shadow-sm"
          >
            <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={20} />
            <div className="flex flex-col">
              <span className="text-red-700 font-bold text-[14px]">Medical Alert</span>
              <span className="text-red-600/80 text-[12px] mt-1 leading-snug">
                 {patient.medical_notes ||
    patient.allergies ||
    "No critical alerts available"}
              </span>
            </div>
          </motion.div>

          {/* Recent Lab Results */}
          <div className="mb-6">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 pl-1">
              Recent Lab Results
            </h3>
            <div className="bg-[#236b9c] rounded-2xl p-4 flex flex-col gap-3 shadow-md">
              {[
                { name: "Blood Glucose Level", range: "70-130 mg/dL", value: "150", unit: "mg/dL", high: true },
                { name: "HbA1c", range: "below 7%", value: "8.6", unit: "%", high: true },
                { name: "Hemoglobin", range: "11.5-15.5 g/dL", value: "7.2", unit: "g/dL", high: true },
                { name: "White Blood Cells", range: "5-10 K/uL", value: "14.5", unit: "K/uL", high: false },
              ].map((lab, i) => (
                <div key={i} className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800 text-[14px]">{lab.name}</span>
                    <span className="text-slate-500 text-[11px]">Normal: {lab.range}</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className={`font-bold text-[18px] ${lab.high ? 'text-red-600' : 'text-blue-600'}`}>
                      {lab.value}
                    </span>
                    <span className="text-slate-400 text-[10px] font-medium">{lab.unit}</span>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => navigate("/lab-tests")} className="w-full text-center py-4 text-blue-600 font-bold text-[12px] uppercase tracking-wider flex justify-center items-center gap-1 mt-2">
              See More Lab Results <ChevronRight size={14} />
            </button>
          </div>

          {/* Medical History */}
          <div className="mb-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">
                Medical History
              </h3>
              
              <div className="relative pl-6 flex flex-col gap-8">
                {/* Vertical line */}
                <div className="absolute left-[11px] top-2 bottom-4 w-px bg-slate-200" />
                
                {[
                  {
                    icon: Pill,
                    hospital: "Medicrest Hospital", date: "MAR 4, 2024",
                    notes: ["Penicillin Allergy detected", "Dematraxone dosage (50mg)", "Reported severe pain in joints"]
                  },
                  {
                    icon: ClipboardList,
                    hospital: "Springhope Clinic", date: "JAN 29, 2024",
                    notes: ["Hyperglycemia management initiated. Fluids and electrolyte balance monitoring."]
                  },
                  {
                    icon: Stethoscope,
                    hospital: "Lifecare Pediatrics", date: "DEC 11, 2023",
                    notes: ["Asthma attack: Emergency Nebulization administered."]
                  }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute left-[-32px] top-0 w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-500 z-10">
                      <item.icon size={12} />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-slate-800 text-[14px]">{item.hospital}</span>
                      <span className="text-slate-400 text-[10px] font-bold uppercase">{item.date}</span>
                    </div>
                    <ul className="text-slate-600 text-[12px] leading-relaxed flex flex-col gap-1">
                      {item.notes.map((note, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-blue-500">•</span> {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <motion.button 
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate("/emergency-request")}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-[0_4px_20px_rgba(220,38,38,0.4)] transition-all"
            >
              <Droplet size={24} />
              <span className="font-bold text-[14px] leading-tight">Request<br/>Blood</span>
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate("/record-treatment")}
              className="flex-1 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-[0_4px_20px_rgba(245,158,11,0.4)] transition-all"
            >
              <ActivitySquare size={24} />
              <span className="font-bold text-[14px] leading-tight">Record<br/>Treatment</span>
            </motion.button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
