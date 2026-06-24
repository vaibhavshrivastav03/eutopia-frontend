import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { MapPin, Check, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import { SoundEngine } from "../utils/sound";
import { useSMS } from "../utils/useSMS";
import { useState } from "react";
import { getEmergencyContacts } from "../../services/emergencyContactService";


export function FamilyAlert() {
  const navigate = useNavigate();
  const { sendSMS } = useSMS();
  const hasSentSMS = useRef(false);
const [emergencyContact, setEmergencyContact] =
  useState<any>(null);

const userData = JSON.parse(
  localStorage.getItem("scannedUser") || "{}"
);
const loadContacts = async () => {
  try {
    if (!patient?.id) return;

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
    console.error(error);
  }
};

const patient =
  userData.users || {};
  useEffect(() => {
    loadContacts();
    const timer = setTimeout(() => {
      SoundEngine.playSuccess();
    }, 100);

    if (!hasSentSMS.current) {
      hasSentSMS.current = true;
      const message = `🏥 EUTOPIA FAMILY ALERT 🏥

      ${patient.full_name || "Patient"}
      has been located and identified at a medical facility.

      Blood Group:
      ${patient.blood_group || "N/A"}

      Allergies:
      ${patient.allergies || "None"}

      Medical Notes:
      ${patient.medical_notes || "None"}

      Family and emergency contacts have been notified.

      - Eutopia Medical Network`;
      sendSMS({ to: emergencyContact?.contact_phone || emergencyContact?.phone, });
    }

    return () => clearTimeout(timer);
  }, [sendSMS]);

  return (
    <div
      className="flex flex-col h-full relative overflow-hidden cursor-pointer"
      onClick={() => {
        SoundEngine.playSwoosh();
        navigate("/essentials");
      }}
      style={{ background: '#15294a' }}
    >
      {/* Soft accent halo */}
      <motion.div
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(70% 45% at 50% 28%, rgba(111,142,194,0.22), transparent 70%)',
        }}
      />
      {/* Drifting orb */}
      <motion.div
        animate={{ x: [-30, 30, -30], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -right-20 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, rgba(111,142,194,0.18), transparent 70%)', filter: 'blur(40px)' }}
      />
      <motion.div
        animate={{ x: [20, -20, 20], y: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, rgba(111,142,194,0.14), transparent 70%)', filter: 'blur(50px)' }}
      />

      {/* Top bar */}
      <div className="relative flex items-center justify-between px-7 pt-6 z-10">
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.06)',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.10)',
            fontFamily: 'Space Grotesk, monospace',
          }}
        >
          <ShieldCheck size={12} className="text-[#4a90e2]" strokeWidth={2.5} />
          <span className="text-[10px] tracking-[0.3em] text-[#7aa8df] uppercase">
            Secure Link
          </span>
        </div>
        <span
          className="text-[11px] tracking-[0.3em] text-white/40 uppercase"
          style={{ fontFamily: 'Space Grotesk, monospace' }}
        >
          Live · 04:12
        </span>
      </div>

      {/* Hairline divider */}
      <div className="relative mx-7 mt-5 h-[1px] bg-white/8 z-10" />

      {/* Center content */}
      <div className="relative flex-1 flex flex-col justify-center px-7 z-10">
        {/* Pin with halo disk */}
        <div className="relative mx-auto mb-12 w-[180px] h-[140px] flex items-center justify-center">
          {/* Translucent halo disk */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="absolute w-[140px] h-[140px] rounded-full"
            style={{ background: 'rgba(74,144,226,0.18)' }}
          />
          {/* Soft pulse ring */}
          <motion.div
            animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
            className="absolute w-[140px] h-[140px] rounded-full"
            style={{ background: 'rgba(74,144,226,0.25)' }}
          />

          {/* Pin circle (flat blue) */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.2 }}
            className="relative w-[80px] h-[80px] rounded-full flex items-center justify-center"
            style={{
              background: '#4a90e2',
              boxShadow: '0 18px 42px -10px rgba(74,144,226,0.55)',
            }}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <MapPin size={32} className="text-white" strokeWidth={2.25} />
            </motion.div>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 240, damping: 14, delay: 0.7 }}
              className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
              style={{
                background: '#4a90e2',
                boxShadow: '0 4px 12px rgba(74,144,226,0.55), inset 0 0 0 2px #15294a',
              }}
            >
              <Check size={11} strokeWidth={3.5} className="text-white" />
            </motion.span>
          </motion.div>
        </div>

        {/* Eyebrow */}
        <p
          className="text-center text-[11px] tracking-[0.4em] text-[#4a90e2] uppercase mb-4"
          style={{ fontFamily: 'Space Grotesk, monospace' }}
        >
          Network · Notified
        </p>

        {/* Headline */}
        <h1
          className="text-center leading-[0.95] tracking-tight text-white"
          style={{ fontFamily: 'Outfit, sans-serif', fontSize: '54px', fontWeight: 600 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="inline-block"
          >
            {patient.full_name?.split(" ")[0] || "Family"}
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.65 }}
            className="inline-block italic font-light text-[#4a90e2]"
          >
            located.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-center text-[14px] leading-relaxed text-white/55 max-w-sm mx-auto"
          style={{ fontFamily: 'Space Grotesk, monospace' }}
        >
          Primary guardian and emergency contacts have been alerted for

{patient.full_name || "this patient"}.
        </motion.p>

        {/* Status card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="relative mt-10 mx-auto w-full max-w-[360px] rounded-2xl px-5 py-4 overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.10)',
          }}
        >
          {/* Corner brackets */}
          <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t-[1.5px] border-l-[1.5px] rounded-tl-md border-[#4a90e2]/50" />
          <span className="pointer-events-none absolute top-2 right-2 w-3 h-3 border-t-[1.5px] border-r-[1.5px] rounded-tr-md border-[#4a90e2]/50" />
          <span className="pointer-events-none absolute bottom-2 left-2 w-3 h-3 border-b-[1.5px] border-l-[1.5px] rounded-bl-md border-[#4a90e2]/50" />
          <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b-[1.5px] border-r-[1.5px] rounded-br-md border-[#4a90e2]/50" />

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 1 } } }}
            className="grid grid-cols-3 divide-x divide-white/10"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              className="px-2 text-center"
            >
              <p
                className="text-[9px] tracking-[0.3em] text-white/40 uppercase"
                style={{ fontFamily: 'Space Grotesk, monospace' }}
              >
                {emergencyContact?.relationship || "Guardian"} {emergencyContact?.contact_name || "Emergency Contact"}
              </p>
              <p className="mt-1 text-[12px] font-semibold text-[#7aa8df]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Notified
              </p>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              className="px-2 text-center"
            >
              <p
                className="text-[9px] tracking-[0.3em] text-white/40 uppercase"
                style={{ fontFamily: 'Space Grotesk, monospace' }}
              >
                {emergencyContact?.relationship || "Guardian"} {emergencyContact?.contact_name || "Emergency Contact"}
              </p>
              <p className="mt-1 text-[12px] font-semibold text-[#7aa8df]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Notified
              </p>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              className="px-2 text-center"
            >
              <p
                className="text-[9px] tracking-[0.3em] text-white/40 uppercase"
                style={{ fontFamily: 'Space Grotesk, monospace' }}
              >
                Network
              </p>
              <p className="mt-1 text-[12px] font-semibold text-[#7aa8df]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Live
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative px-7 pb-10 z-10 flex flex-col items-center gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[10px] tracking-[0.4em] text-white/50 uppercase"
          style={{ fontFamily: 'Space Grotesk, monospace' }}
        >
          Tap to continue
        </motion.p>
      </div>
    </div>
  );
}
