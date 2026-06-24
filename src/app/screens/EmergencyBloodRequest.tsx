import image_a45260a87d708bfc853307bac38a4fd0e088eb3b from 'figma:asset/a45260a87d708bfc853307bac38a4fd0e088eb3b.png'
import { motion } from "motion/react";
import { Bell, Phone, AlertTriangle, MapPin, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import { useSMS } from "../utils/useSMS";
import { getEmergencyContacts } from "../../services/emergencyContactService";

const PATIENT_IMG = "https://images.unsplash.com/photo-1769636930016-5d9f0ca653aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGJsYWNrJTIwd29tYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM1MTk3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080";
const EMERGENCY_CONTACT = "08164372815";

export function EmergencyBloodRequest() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(134); // 02:14
  const [isHospitalSelectOpen, setIsHospitalSelectOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState("Dutse General Hospital");
  const { sendSMS } = useSMS();
  const hasSentSMS = useRef(false);

  const userData = JSON.parse(
  localStorage.getItem("scannedUser") || "{}"
);

const patient =
  userData.users || {};
const [emergencyContact, setEmergencyContact] =
  useState<any>(null);

  const loadEmergencyContact =
  async () => {

    try {

      const response =
        await getEmergencyContacts(
          patient.id
        );

      if (
        response.success &&
        response.data?.length
      ) {

        setEmergencyContact(
          response.data[0]
        );

      }

    } catch (error) {

      console.error(
        "Emergency Contact Error:",
        error
      );

    }

  };

  const hospitals = [
    "Dutse General Hospital",
    "Nisa Premier Hospital, Abuja",
    "National Hospital, Abuja",
    "Garki Hospital, Abuja",
    "Asokoro District Hospital",
    "Kelina Hospital, Gwarinpa"
  ];
  
  useEffect(() => {

  loadEmergencyContact();

  const interval =
    setInterval(() => {
      setTimer(
        t => (t > 0 ? t - 1 : 0)
      );
    }, 1000);

  return () =>
    clearInterval(interval);

}, []);

useEffect(() => {

  if (
    !emergencyContact ||
    hasSentSMS.current
  ) {
    return;
  }

  hasSentSMS.current = true;

  const sendBloodRequest =
    async () => {

      const message = `
🩸 URGENT BLOOD REQUEST 🩸

Patient:
${patient.full_name}

Age:
${patient.age || "N/A"}

Blood Type:
${patient.blood_group || "N/A"}

Location:
${selectedHospital}

Allergies:
${patient.allergies || "None"}

Medical Notes:
${patient.medical_notes || "None"}

Hospital coordination is underway.

- EUTOPIA Medical Network
`;

      await sendSMS({
        to:
          emergencyContact.contact_phone,
        message,
        alertType:
          "blood_request"
      });

    };

  sendBloodRequest();

}, [
  emergencyContact,
  patient,
  selectedHospital,
  sendSMS
]);

  const mins = Math.floor(timer / 60).toString().padStart(2, '0');
  const secs = (timer % 60).toString().padStart(2, '0');

  return (
    <div className="flex flex-col h-full bg-[#1e293b] text-slate-200 relative overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="bg-[#d91e18] px-4 py-4 pb-6 relative z-10 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] shrink-0">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-3">
            <Bell size={24} className="text-white" />
            <h1 className="font-bold text-[18px] text-white uppercase leading-tight">
              Emergency Blood<br/>Request
            </h1>
          </div>
          <div className="bg-white/20 border border-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full font-mono font-bold text-white text-[16px]">
            {mins}:{secs}
          </div>
        </div>
        <p className="text-[#fef2f2] text-[12px] opacity-90 leading-tight">
          Immediate blood matching and hospital coordination
        </p>
      </div>

      <div className="p-4 flex flex-col gap-4 relative z-0 -mt-2">
        {/* Patient Card */}
        <div className="bg-white rounded-2xl p-4 shadow-lg flex gap-4 text-slate-900 relative">
          <div className="w-[80px] h-[80px] rounded-full border-2 border-slate-100 overflow-hidden shrink-0">
            <img src={
            patient.profile_photo ||
            patient.photo ||
            image_a45260a87d708bfc853307bac38a4fd0e088eb3b
          }
          alt={patient.full_name} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-between items-start mb-2">
              <h2 className="font-bold text-[20px]">{patient.full_name || "Unknown Patient"}</h2>
              <div className="bg-[#fee2e2] text-[#d91e18] border border-[#fecaca] px-2 py-0.5 rounded font-bold text-[14px]">
                {patient.blood_group || "N/A"}
              </div>
            </div>
            <div className="flex flex-col gap-1.5 text-[12px]">
              <div className="flex items-center gap-1.5 text-slate-600">
                <span className="font-medium">Genotype: <span className="font-bold">{patient.genotype || "N/A"}</span></span>
              </div>
              <div className="flex items-center gap-1.5 text-[#dc2626] font-bold">
                <AlertTriangle size={14} />
                <span>Allergies: { patient.allergies || "None"}</span>
              </div>
              <button
                  onClick={() => {

                    if (
                      emergencyContact?.contact_phone
                    ) {

                      window.location.href =
                        `tel:${emergencyContact.contact_phone}`;

                    }

                  }}
                  className="bg-blue-50 text-blue-700 font-bold px-2 py-1 rounded flex items-center gap-1.5 self-start mt-1"
                >
                <Phone size={12} /> {
                  emergencyContact?.contact_phone ||
                  "No Contact"
                }
              </button>
            </div>
          </div>
        </div>

        {/* Safety Check */}
        <div className="bg-[#fffbeb] border-l-4 border-[#fbbf24] rounded-xl p-4 shadow-sm text-slate-800">
          <div className="flex items-start gap-2 mb-3">
            <AlertTriangle className="text-[#f59e0b] shrink-0 mt-0.5" size={20} />
            <p className="text-[#d91e18] font-bold text-[14px] leading-snug">
              This request should only be triggered in confirmed emergency situations.
            </p>
          </div>
          <div className="flex flex-col gap-3 ml-1 mt-4">
            <label className="flex items-center gap-3 text-[14px] text-slate-700 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 rounded border-[#fcd34d] text-amber-500 focus:ring-amber-500" defaultChecked />
              Patient is unconscious or unable to respond
            </label>
            <label className="flex items-center gap-3 text-[14px] text-slate-700 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 rounded border-[#fcd34d] text-amber-500 focus:ring-amber-500" defaultChecked />
              Blood transfusion is medically required
            </label>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
              <MapPin size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">Current Location</span>
              <span className="font-bold text-[14px] text-white">{ patient.address || "Location Not Available"}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 relative">
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Target Hospital</span>
            <div className="flex gap-2">
              <div 
                className="flex-1 bg-[#1e293b] border border-slate-700 rounded-lg p-3 flex justify-between items-center text-[14px] cursor-pointer hover:border-slate-500 transition-colors"
                onClick={() => setIsHospitalSelectOpen(!isHospitalSelectOpen)}
              >
                <span className="truncate">{selectedHospital}</span>
                <ChevronDown size={16} className={`text-slate-500 transition-transform ${isHospitalSelectOpen ? 'rotate-180' : ''}`} />
              </div>
              <button 
                onClick={() => setIsHospitalSelectOpen(!isHospitalSelectOpen)}
                className="bg-blue-600 hover:bg-blue-500 transition-colors text-white font-bold px-4 rounded-lg text-[12px]"
              >
                Change
              </button>
            </div>

            {/* Dropdown Menu */}
            {isHospitalSelectOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 right-0 mt-2 bg-[#0f172a] border border-[#3b82f6]/50 rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.5)] z-50 overflow-hidden"
              >
                {hospitals.map((hospital, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedHospital(hospital);
                      setIsHospitalSelectOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-[14px] hover:bg-slate-800 transition-colors ${
                      selectedHospital === hospital 
                        ? 'text-[#00d2ff] font-bold bg-slate-800 border-l-2 border-[#00d2ff]' 
                        : 'text-slate-200 border-l-2 border-transparent'
                    } ${index !== hospitals.length - 1 ? 'border-b border-slate-700/50' : ''}`}
                  >
                    {hospital}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Action Area */}
      <div className="p-4 mt-auto">
        <motion.button 
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/request-sent")}
          className="w-full bg-[#d91e18] hover:bg-[#b91c1c] text-white rounded-2xl py-6 flex flex-col items-center justify-center shadow-[0_25px_50px_-12px_rgba(239,68,68,0.4)] mb-4"
        >
          <div className="flex items-center gap-3">
            
            <span className="font-bold text-[18px] tracking-[1.8px] leading-tight text-center">
              SEND EMERGENCY<br/>REQUEST
            </span>
          </div>
        </motion.button>
        <p className="text-slate-400 text-[11px] text-center px-4 leading-relaxed pb-4">
          By tapping, you will notify hospital and blood logistics partners immediately. This action will initiate a high-priority dispatch protocol.
        </p>
      </div>
    </div>
  );
}