import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Phone, AlertTriangle, MessageSquare } from "lucide-react";
import { Header } from "../components/Header";
import { SoundEngine } from "../utils/sound";
import { useSMS } from "../utils/useSMS";
import imgPatientAvatar from "../../imports/Our_model_child_-2.PNG";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { getEmergencyContacts } from "../../services/emergencyContactService";



export function MedicalEssentials() {
  const navigate = useNavigate();
  const { sendSMS, isSending } = useSMS();
  const [smsSent, setSmsSent] = useState(false);

  const { patientData } = useAppContext();

const [emergencyContact, setEmergencyContact] =
  useState<any>(null);

useEffect(() => {
  loadEmergencyContact();
}, []);

const loadEmergencyContact = async () => {
  try {
    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    const response =
      await getEmergencyContacts(user.id);

    if (
      response.success &&
      response.data?.length
    ) {
      setEmergencyContact(
        response.data[0]
      );
    }
  } catch (error) {
    console.error(error);
  }
};

  const handleSendEmergencySMS = async () => {
    SoundEngine.playPop();
    
    const message = `🚨 EUTOPIA MEDICAL ALERT 🚨

      ${patientData?.full_name || "Patient"} has triggered an emergency medical alert.

      Medical Info:
      • Blood Group: ${patientData?.blood_group || "N/A"}
      • Allergies: ${patientData?.allergies || "None"}
      • Notes: ${patientData?.medical_notes || "N/A"}

      Please contact immediately.

      - Eutopia Medical Network`;

    const result = await sendSMS({
      to: emergencyContact?.contact_phone || "",
      message,
      alertType: 'emergency',
    });

    if (result.success) {
      setSmsSent(true);
      setTimeout(() => setSmsSent(false), 3000);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#1c3445] text-slate-200">
      <div className="px-6 pt-6 flex justify-end">
        <div className="bg-white text-[#ef4444] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
          Emergency Access
        </div>
      </div>

      <div className="px-6 flex items-center gap-4 mt-2 mb-6">
        <div className="w-[80px] h-[80px] rounded-full p-1 border-2 border-slate-400 shrink-0 overflow-hidden">
          <img
            src={
              patientData?.profile_photo ||
              patientData?.photo ||
              imgPatientAvatar
            }
            alt="Patient"
            className="w-full h-full aspect-square rounded-full object-cover block"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-[24px] font-bold text-white leading-tight">
            {patientData?.full_name || "Unknown User"}
          </h2>
          <p className="text-[14px] text-slate-400 mt-1">
            Female<br/>Age: {patientData?.age || "N/A"}
          </p>
        </div>
      </div>

      <div className="bg-[#152836] py-2 px-6 text-[11px] font-bold text-slate-400 tracking-widest uppercase">
        Medical Essentials
      </div>

      <div className="px-6 py-2 flex flex-col">
        <div className="flex justify-between py-4 border-b border-slate-700/50">
          <span className="text-slate-400 text-[14px]">Blood Group</span>
          <span className="font-bold text-white text-[15px]">{patientData?.blood_group || "N/A"}</span>
        </div>
        <div className="flex justify-between py-4 border-b border-slate-700/50">
          <span className="text-slate-400 text-[14px]">Allergies</span>
          <span className="font-bold text-white text-[15px]">{patientData?.allergies || "None"}</span>
        </div>
        <div className="flex justify-between py-4 border-b border-slate-700/50">
          <span className="text-slate-400 text-[14px]">Medical Conditions</span>
          <span className="font-bold text-white text-[15px]">{patientData?.medical_notes || "None"}</span>
        </div>
        <div className="flex justify-between py-4 border-b border-slate-700/50">
          <span className="text-slate-400 text-[14px]">Current Medications</span>
          <span className="font-bold text-white text-[15px]">Dematraxone</span>
        </div>
        <div className="flex justify-between py-4 border-b border-slate-700/50">
          <span className="text-slate-400 text-[14px]">Implant Notes</span>
          <span className="font-bold text-white text-[15px]">Iron in the ulna</span>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 bg-[#dc2626] rounded-xl p-4 text-white shadow-lg"
        >
          <div className="flex items-center gap-2 font-bold mb-2 text-[15px]">
            <AlertTriangle size={18} />
            Emergency Instructions:
          </div>
          <p className="text-[13px] leading-relaxed mb-3">
            If unconscious, contact emergency numbers immediately
          </p>
          <ul className="list-disc pl-5 text-[13px] font-semibold underline underline-offset-2">
            <li>Do not administer: Diclofenac</li>
          </ul>
        </motion.div>
      </div>

      <div className="bg-[#152836] py-2 px-6 text-[11px] font-bold text-slate-400 tracking-widest uppercase mt-4">
        Emergency Contact
      </div>

      <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[24px] font-bold text-white">{emergencyContact?.contact_phone || "No Contact"}</span>
          <span className="text-[14px] text-slate-400">Relationship: {emergencyContact?.relationship || "N/A"}</span>
        </div>
        <button onClick={() => {
          if (
            emergencyContact?.contact_phone
          ) {
            window.location.href =
              `tel:${emergencyContact.contact_phone}`;
          }
        }} className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-slate-600 transition-colors">
          <Phone size={20} />
        </button>
      </div>

      <div className="px-6 py-6 mt-auto">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            SoundEngine.playPop();
            navigate("/authorize");
          }}
          className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-semibold py-4 rounded-xl text-[15px] shadow-lg transition-colors"
        >
          Click For More Medical Records
        </motion.button>
      </div>

      <div className="px-6 pb-6 mt-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSendEmergencySMS}
          disabled={isSending}
          className={`w-full ${smsSent ? 'bg-[#059669]' : 'bg-[#dc2626] hover:bg-[#b91c1c]'} text-white font-semibold py-4 rounded-xl text-[15px] shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <MessageSquare size={18} />
          {isSending ? 'Sending SMS...' : smsSent ? '✓ Alert Sent!' : 'Send Emergency SMS Alert'}
        </motion.button>
        {smsSent && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#10b981] text-[12px] text-center mt-2 font-semibold"
          >
            Emergency SMS sent to  { emergencyContact?.contact_phone}
          </motion.p>
        )}
      </div>
    </div>
  );
}