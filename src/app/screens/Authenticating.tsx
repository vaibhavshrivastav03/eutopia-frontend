import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Lock, Database, User, FileText, Phone } from "lucide-react";
import { SoundEngine } from "../utils/sound";
import imgBgPattern from "figma:asset/c21f25bdfa9378944b010dd50361a71faac4e7ed.png";
import { scanBracelet } from "../../services/braceletService";
import { useAppContext } from "../../context/AppContext";

export function Authenticating() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const lastStepRef = useRef(0);
  const { setPatientData } =
  useAppContext();

  const steps = [
    { icon: Database, title: "HOSPITAL DATA BASE", status: "CONNECTING..." },
    { icon: User, title: "PATIENT PROFILE", status: "ACCESSING..." },
    { icon: FileText, title: "MEDICAL HISTORY", status: "DECRYPTING..." },
    { icon: Phone, title: "Emergency Contacts", status: "LOADING..." },
  ];

  useEffect(() => {
    const stopScanningSound = SoundEngine.playScanning();
    return () => stopScanningSound();
  }, []);

  const fetchPatient = async () => {
  try {
    

      const braceletUid = localStorage.getItem("bracelet_uid");
    

    const response =
      await scanBracelet(
        braceletUid || "EUTOPIA003"
      );

      console.log("API Response", response);

    if (response.success) {
      setPatientData(
        response.data.users
      );

      setTimeout(() => {
        navigate("/verified");
      }, 500);
    }
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    const totalDuration = 7000;
    const intervalTime = 50;
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment, 100);
        let newStep = activeStep;
        if (next >= 25 && activeStep < 1) newStep = 1;
        if (next >= 50 && activeStep < 2) newStep = 2;
        if (next >= 75 && activeStep < 3) newStep = 3;
        if (next >= 95 && activeStep < 4) newStep = 4;
        
        if (newStep !== lastStepRef.current) {
          SoundEngine.playPop();
          setActiveStep(newStep);
          lastStepRef.current = newStep;
        }
        
        if (next >= 100) {
          clearInterval(timer);

          fetchPatient();          
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activeStep, navigate]);

  return (
    <div 
      className="flex flex-col h-full items-center px-6 pb-10 overflow-y-auto no-scrollbar relative"
      style={{ backgroundImage: `url(${imgBgPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-full text-left -mx-6 relative z-10">
        <Header showEmergencyAccess={false} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mt-6 text-center"
      >
        <h2 className="text-[20px] font-bold text-white tracking-widest leading-tight">
          EUTOPIA MEDICAL<br/>NETWORK
        </h2>
        <p className="text-[10px] text-slate-400 mt-2 tracking-[2px] uppercase">
          Quantum Encryption Level 7 Enabled
        </p>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center items-center w-full mt-8">
        <div className="relative w-[180px] h-[180px] flex items-center justify-center mb-8">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#00f2ff] rounded-full blur-2xl"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-t-[#00f2ff] border-r-transparent border-b-[#00f2ff]/30 border-l-transparent rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-20px] border border-b-[#00f2ff]/50 border-l-transparent border-t-[#00f2ff]/10 border-r-transparent rounded-full"
          />
          
          <Lock size={64} className="text-[#00f2ff] z-10" />
          
          {/* Scanning line */}
          <motion.div 
            animate={{ y: [-40, 40, -40] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-[#00f2ff] z-20 shadow-[0_0_10px_#00f2ff]"
          />
        </div>

        <motion.div 
          className="flex flex-col items-center mb-6"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <h3 className="text-[24px] font-bold text-white tracking-wide">
            AUTHENTICATING
          </h3>
          <div className="flex gap-2 mt-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                className="w-2 h-2 rounded-full bg-[#00f2ff]"
              />
            ))}
          </div>
        </motion.div>

        <div className="w-full bg-[#00bcd4]/20 border border-[#00bcd4]/30 rounded-2xl p-5 flex flex-col gap-5">
          {steps.map((step, idx) => {
            const isActive = activeStep >= idx;
            const isCompleted = activeStep > idx;
            const Icon = step.icon;
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isActive ? 1 : 0.3, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className={`p-2 rounded-lg ${isActive ? 'bg-[#00f2ff]/20 text-[#00f2ff]' : 'bg-slate-800 text-slate-500'}`}>
                  <Icon size={20} />
                </div>
                <div className="flex flex-col">
                  <span className={`text-[12px] uppercase tracking-wider font-semibold ${isActive ? 'text-white' : 'text-slate-500'}`}>
                    {step.title}
                  </span>
                  <span className={`text-[11px] font-mono ${isCompleted ? 'text-[#00f2ff]' : isActive ? 'text-[#00f2ff]/70' : 'text-slate-600'}`}>
                    {isCompleted ? 'COMPLETED' : isActive ? step.status : 'WAITING...'}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="w-full mt-10 mb-6">
        <div className="flex justify-end mb-2">
          <span className="text-[24px] font-bold text-[#00f2ff]">
            {Math.floor(progress)}%
          </span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-[#00f2ff] shadow-[0_0_10px_rgba(0,242,255,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
