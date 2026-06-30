import { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';

import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { AlertCircle, Droplet, Wind, Activity, ArrowLeft, Check } from 'lucide-react';
import { DreamyBackground } from '../../components/DreamyBackground';

interface MedicalCondition {
  id: string;
  label: string;
  icon: React.ReactNode;
  iconColor: string;
  iconBg: string;
}

const conditions: MedicalCondition[] = [
  {
    id: 'allergies',
    label: 'Allergies',
    icon: <AlertCircle size={24} strokeWidth={1.75} />,
    iconColor: '#8FB8E0',
    iconBg: '#e6f1fa',
  },
  {
    id: 'bloodType',
    label: 'Blood Type\nO-',
    icon: <Droplet size={24} strokeWidth={1.75} />,
    iconColor: '#CE3F4B',
    iconBg: '#fde8ea',
  },
  {
    id: 'asthma',
    label: 'Asthma',
    icon: <Wind size={24} strokeWidth={1.75} />,
    iconColor: '#8FB8E0',
    iconBg: '#e6f1fa',
  },
  {
    id: 'diabetes',
    label: 'Diabetes',
    icon: <Activity size={24} strokeWidth={1.75} />,
    iconColor: '#5B9BD5',
    iconBg: '#e3f0fa',
  },
];


export function MedicalInfo() {
  const navigate = useNavigate();
  const { child, setChild } = useAppContext();

  const [selected, setSelected] =
    useState<string[]>(
      Array.isArray(child?.allergies)
        ? child.allergies
        : []
    );

  const toggleCondition = (id: string) => {
    setSelected(selected.includes(id) ? selected.filter(i => i !== id) : [...selected, id]);
  };

 const handleNext = () => {

  setChild({
    ...child,
    allergies: selected,
    medical_notes: selected.join(", ")
  });

  navigate("/onboarding/emergency-contacts");
};

  return (
    <div
      className="min-h-screen flex items-center justify-center px-5 py-10 relative overflow-hidden"
      style={{
        maxWidth: '430px',
        margin: '0 auto',
      }}
    >
      {/* Dreamy celestial background */}
      <DreamyBackground />

      {/* Centered glass card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 0.9, 0.3, 1] }}
        className="relative w-full max-w-sm rounded-[32px] px-8 py-10 flex flex-col items-center"
        style={{
          background: 'rgba(255,255,255,0.45)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.65)',
          boxShadow: '0 20px 50px rgba(120,150,190,0.25)',
        }}
      >
        {/* Back chevron */}
        <button
          onClick={() => navigate('/onboarding/child-profile')}
          className="absolute top-5 left-5 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(154,167,185,0.2)' }}
          aria-label="Back"
        >
          <ArrowLeft size={16} style={{ color: '#2C3A56' }} strokeWidth={2.5} />
        </button>

        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[10px] tracking-[0.35em] uppercase mb-3"
          style={{ fontFamily: 'Space Grotesk, monospace', color: '#9AA7B9' }}
        >
          MEDICAL
        </motion.p>

        {/* Heading — navy serif */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center mb-2"
          style={{
            fontFamily: 'Space Grotesk, serif',
            fontSize: '30px',
            fontWeight: 600,
            lineHeight: 1.15,
            color: '#2C3A56',
          }}
        >
          Medical Info
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-[12px] leading-relaxed mb-6"
          style={{ fontFamily: 'Space Grotesk, monospace', color: '#42506A' }}
        >
          Does{" "}
  <span className="font-semibold">
    {child?.full_name || "your child"}
  </span>{" "}
  have any medical history?
        </motion.p>

        {/* 2×2 grid of glass tiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 gap-3 w-full mb-6"
        >
          {conditions.map((c, i) => {
            const isOn = selected.includes(c.id);
            return (
              <motion.button
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.5 }}
                onClick={() => toggleCondition(c.id)}
                whileTap={{ scale: 0.97 }}
                whileHover={{ y: -2 }}
                className="relative rounded-[22px] p-4 flex flex-col items-center justify-center transition-all"
                style={{
                  background: 'rgba(255,255,255,0.5)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.7)',
                  boxShadow: isOn
                    ? '0 8px 24px rgba(91,155,213,0.35), inset 0 0 0 2px rgba(91,155,213,0.5)'
                    : '0 6px 18px rgba(120,150,190,0.2)',
                }}
              >
                {/* Icon with micro-motion */}
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2"
                  style={{
                    background: c.iconBg,
                    color: c.iconColor,
                  }}
                  animate={
                    c.id === 'bloodType' && isOn
                      ? { y: [0, -3, 0] }
                      : c.id === 'asthma' && isOn
                      ? { scale: [1, 1.05, 1] }
                      : {}
                  }
                  transition={{
                    duration: c.id === 'bloodType' ? 2 : 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {c.icon}
                </motion.div>

                {/* Label */}
                <p
                  className="text-[13px] leading-tight text-center whitespace-pre-line"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500, color: '#2C3A56' }}
                >
                  {c.label}
                </p>

                {/* Checkmark — draws in with SVG stroke animation */}
                {isOn && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: '#5B9BD5' }}
                  >
                    <Check size={12} strokeWidth={3} className="text-white" />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* "Tap to select." helper */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-[11px] tracking-wide mb-6"
          style={{ fontFamily: 'Space Grotesk, monospace', color: '#9AA7B9' }}
        >
          Tap to select.
        </motion.p>

        {/* Baby blue NEXT button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          onClick={handleNext}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full h-14 rounded-full text-white mb-6"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            background: 'linear-gradient(135deg, #87CEEB 0%, #5BA3D0 100%)',
            boxShadow: '0 12px 30px rgba(135,206,235,0.4)',
          }}
        >
          NEXT
        </motion.button>

        {/* Carousel dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex items-center gap-2"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-full transition-all"
              style={{
                width: i === 2 ? '8px' : '6px',
                height: i === 2 ? '8px' : '6px',
                background: i === 2 ? '#87CEEB' : 'rgba(154,167,185,0.4)',
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
