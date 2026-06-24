import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { ShieldCheck, CheckCircle2, CircleDashed } from "lucide-react";
import { EutopiaLogo } from "../components/EutopiaLogo";

import imgDoctorAvatar from "figma:asset/65e74d3abf5a52ea6591524842515c5e1d2f3fd4.png";
import imgBgPattern from "figma:asset/c21f25bdfa9378944b010dd50361a71faac4e7ed.png";

const DOCTOR_IMG = imgDoctorAvatar;

export function DoctorVerification() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    { title: "Verifying doctor credentials" },
    { title: "License verified", badge: "VERIFIED BADGE" },
    { title: "Decrypting patient medical archive" },
    { title: "Loading hospital record system..." },
  ];

  useEffect(() => {
    const totalDuration = 6000;
    const intervalTime = 50;
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment, 100);
        if (next >= 25 && activeStep < 1) setActiveStep(1);
        if (next >= 50 && activeStep < 2) setActiveStep(2);
        if (next >= 75 && activeStep < 3) setActiveStep(3);
        if (next >= 95 && activeStep < 4) setActiveStep(4);
        
        if (next === 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => navigate("/dashboard"), 1000);
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activeStep, navigate]);

  return (
    <div 
      className="flex flex-col min-h-full px-5 pt-5 pb-4 text-white overflow-y-auto no-scrollbar relative"
      style={{ backgroundImage: `url(${imgBgPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex flex-col gap-2 mb-4 relative z-10">
        <EutopiaLogo className="self-start ml-[-12px]" />
        <div className="flex flex-col">
          <span className="text-[18px] font-bold leading-tight">
            SECURE MEDICAL RECORD<br/>ACCESS
          </span>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#236b9c]/80 rounded-2xl p-4 mb-5 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full pointer-events-none" />
        
        <span className="text-[#00f2ff] text-[10px] font-bold tracking-wider uppercase">
          Authorized Personnel
        </span>
        
        <div className="flex justify-between items-start mt-2">
          <div className="flex flex-col">
            <h2 className="text-[22px] font-bold">Dr. Musa Ibrahim</h2>
            <p className="text-slate-300 text-[13px] mt-1">Emergency Unit</p>
            <p className="text-slate-400 text-[13px]">Dutse General Hospital</p>
            
            <div className="flex items-center gap-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-mono text-green-400 uppercase tracking-widest">
                Active Session: 0xFD44...A92
              </span>
            </div>
          </div>
          
          <div className="w-[80px] h-[80px] rounded-full overflow-hidden shadow-lg shrink-0">
            <img src={DOCTOR_IMG} alt="Dr. Musa" className="w-full h-full aspect-square rounded-full object-cover" />
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col gap-3 mb-5">
        {steps.map((step, idx) => {
          const isDone = activeStep > idx || isComplete;
          const isCurrent = activeStep === idx && !isComplete;
          
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isDone || isCurrent ? 1 : 0.3, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4"
            >
              {isDone ? (
                <CheckCircle2 size={24} className="text-green-500" />
              ) : isCurrent ? (
                <CircleDashed size={24} className="text-[#00f2ff] animate-spin" />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-slate-600" />
              )}
              
              <div className="flex items-center gap-2">
                <span className={`text-[14px] ${isDone ? 'text-slate-200' : isCurrent ? 'text-[#00f2ff]' : 'text-slate-500'}`}>
                  {step.title}
                </span>
                {step.badge && isDone && (
                  <span className="bg-green-500/20 text-green-400 text-[9px] px-2 py-0.5 rounded font-bold tracking-wider">
                    {step.badge}
                  </span>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="w-full mt-2">
        <div className="flex justify-between items-end mb-2">
          <span className="text-[#00f2ff] text-[10px] font-bold tracking-widest uppercase">
            System Synchronization
          </span>
          <span className="text-[24px] font-bold text-[#00f2ff]">
            {Math.floor(progress)}%
          </span>
        </div>
        
        <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-[#00f2ff] shadow-[0_0_10px_rgba(0,242,255,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between text-[8px] font-mono text-slate-500">
          <span>ENC: AES-256-GCM</span>
          <span>BUFFER: OPTIMIZED</span>
          <span>NODE: EMN-772-DUTSE</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isComplete && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center justify-center mt-4"
          >
            <div className="w-16 h-16 rounded-full bg-[#00f2ff]/20 flex items-center justify-center text-[#00f2ff] border-2 border-[#00f2ff] shadow-[0_0_20px_rgba(0,242,255,0.3)] mb-2">
              <ShieldCheck size={32} />
            </div>
            <span className="text-[10px] text-[#00f2ff] font-bold tracking-[3px] uppercase">
              Encryption Active
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="mt-auto pt-4 text-center">
        <p className="text-[10px] text-slate-400">
          Patient privacy protected by <span className="text-[#00f2ff] font-bold">EUTOPIA Secure Medical Network</span>
        </p>
        <p className="text-[8px] text-slate-600 font-mono mt-2 uppercase">
          © 2024 EMN-SECURE &nbsp; VER: 4.0.1-STABLE
        </p>
      </div>
    </div>
  );
}
