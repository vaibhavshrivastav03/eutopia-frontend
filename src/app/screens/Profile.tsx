import image_Our_model_child__4 from '@/imports/Our_model_child_-4.PNG';
import { motion } from "motion/react";
import { Settings, ChevronLeft, User, CreditCard, Bell, Mail, Lock, Fingerprint, Shield, LogOut, Cake, Droplet, Contact } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { EutopiaLogo } from "../components/EutopiaLogo";
import { useAppContext } from "../../context/AppContext";


import { useEffect, useState } from "react";
import { getEmergencyContacts } from "../../services/emergencyContactService";

import imgPatientAvatar from "figma:asset/a0e21d228d947d13296dc2faed224ae1c1cc85a9.png";

const PATIENT_IMG = imgPatientAvatar;

export function Profile() {
  const navigate = useNavigate();
    const { patientData } = useAppContext();


  const [emergencyContact, setEmergencyContact] =
  useState<any>(null);

const user = JSON.parse(
  localStorage.getItem("user") || "{}"
);

useEffect(() => {
  loadContacts();
}, []);

const loadContacts = async () => {
  try {
    const user = JSON.parse(
  localStorage.getItem("user") || "{}"
);

const response =
  await getEmergencyContacts(
    user.id
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
    console.error(error);
  }
};

const {
  setPatientData,
  setPatient,
  setUser,
  setChild
} = useAppContext();

const handleLogout = () => {

  localStorage.clear();

  setPatientData(null);
  setPatient(null);
  setUser(null);

  setChild({
    id: null,
    full_name: "",
    age: "",
    photo: "",
    blood_group: "",
    allergies: [],
    medical_notes: "",
    address: "",
    preferred_language: "English",
    emergency_contacts: []
  });

  navigate("/login");
};

  return (
    <div className="flex flex-col h-full bg-slate-50 text-slate-900 relative">
      <div className="bg-[#1c3445] text-white flex items-center justify-between px-4 py-4 sticky top-0 z-20 shadow-md">
        <div className="flex items-center gap-2">
          <motion.button 
            whileTap={{ scale: 0.96 }} 
            onClick={() => navigate(-1)} 
            className="p-3 -ml-3 active:bg-white/20 md:hover:bg-white/10 rounded-full transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Go back"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <EutopiaLogo className="ml-[-12px]" />
        </div>
        <button className="p-2 -mr-2 hover:bg-white/10 rounded-full transition-colors"><Settings size={20} /></button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-6 px-4 pt-4">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-[4px] border-white shadow-lg mb-4">
            <img src={
                patientData?.profile_photo ||
                    patientData?.photo ||
                image_Our_model_child__4
              } alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h2 className="font-bold text-[22px] text-slate-900 leading-tight">{patientData.full_name || "N/A"}</h2>
          <span className="text-[#1577d3] font-medium text-[14px]">Health ID: #{patientData.id?.slice(0, 8) || "N/A"}</span>
        </div>

        <h3 className="font-bold text-[14px] text-slate-900 mb-3 ml-1">Personal Details</h3>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex flex-col mb-8">
          <div className="flex justify-between items-center py-3 border-b border-slate-100">
            <div className="flex items-center gap-3 text-slate-500">
              <Cake size={18} />
              <span className="text-[14px]">Age</span>
            </div>
            <span className="font-bold text-[14px] text-slate-900">{patientData.age
    ? `${patientData.age} Years`
    : "N/A"}</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-slate-100">
            <div className="flex items-center gap-3 text-slate-500">
              <Droplet size={18} />
              <span className="text-[14px]">Blood Type</span>
            </div>
            <span className="font-bold text-[14px] text-slate-900">{patientData.blood_group || "N/A"}</span>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-3 text-slate-500">
              <Contact size={18} />
              <span className="text-[14px]">Emergency Contact</span>
            </div>
            <span className="font-bold text-[14px] text-slate-900">{emergencyContact
  ? `${emergencyContact.contact_name} (${emergencyContact.contact_phone})`
  : "No Contact Added"}</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-slate-100">
            <div className="flex items-center gap-3 text-slate-500">
              <Shield size={18} />
              <span className="text-[14px]">
                Allergies
              </span>
            </div>

            <span className="font-bold text-[14px] text-right text-slate-900">
              {patientData.allergies || "None"}
            </span>
          </div>
        </div>

        <h3 className="font-bold text-[12px] text-slate-900 tracking-wide uppercase mb-3 ml-1">Account Settings</h3>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2 flex flex-col mb-6">
          <SettingsItem icon={User} label="Edit Profile" />
          <div className="h-px bg-slate-100 mx-2" />
          <SettingsItem icon={CreditCard} label="Subscription & Billing" />
        </div>

        <h3 className="font-bold text-[12px] text-slate-900 tracking-wide uppercase mb-3 ml-1">Notification Preferences</h3>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2 flex flex-col mb-6">
          <ToggleItem icon={Bell} label="Push Notifications" checked={true} />
          <div className="h-px bg-slate-100 mx-2" />
          <SettingsItem icon={Mail} label="Email Newsletter" />
        </div>

        <h3 className="font-bold text-[12px] text-slate-900 tracking-wide uppercase mb-3 ml-1">Security & Privacy</h3>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2 flex flex-col mb-8">
          <SettingsItem icon={Lock} label="Change Password" />
          <div className="h-px bg-slate-100 mx-2" />
          <ToggleItem icon={Fingerprint} label="Biometric Authentication" checked={true} />
          <div className="h-px bg-slate-100 mx-2" />
          <SettingsItem icon={Shield} label="Privacy Policy" />
        </div>

        <motion.button 
          whileTap={{ scale: 0.96 }}
          onClick={handleLogout}
          className="w-full bg-red-50 text-red-600 font-bold py-4 rounded-xl flex items-center justify-center gap-2 mb-8"
        >
          <LogOut size={20} />
          Logout
        </motion.button>
      </div>

      <BottomNav />
    </div>
  );
}

function SettingsItem({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <motion.button whileTap={{ backgroundColor: "rgba(241,245,249,1)" }} className="flex items-center justify-between p-3 rounded-xl transition-colors">
      <div className="flex items-center gap-3 text-slate-700">
        <Icon className="text-[#1577d3]" size={20} />
        <span className="font-semibold text-[14px]">{label}</span>
      </div>
      <ChevronLeft className="text-slate-300 rotate-180" size={20} />
    </motion.button>
  );
}

function ToggleItem({ icon: Icon, label, checked }: { icon: any, label: string, checked: boolean }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl">
      <div className="flex items-center gap-3 text-slate-700">
        <Icon className="text-[#1577d3]" size={20} />
        <span className="font-semibold text-[14px]">{label}</span>
      </div>
      <div className={`w-12 h-6 rounded-full p-1 transition-colors ${checked ? 'bg-[#1577d3]' : 'bg-slate-200'}`}>
        <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${checked ? 'translate-x-6' : 'translate-x-0'}`} />
      </div>
    </div>
  );
}