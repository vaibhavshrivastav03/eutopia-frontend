import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Lock } from "lucide-react";
import { SoundEngine } from "../utils/sound";
import { EutopiaLogo } from "../components/EutopiaLogo";
import imgBgPattern from "figma:asset/c21f25bdfa9378944b010dd50361a71faac4e7ed.png";

export function AuthorizeAccess() {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Attempt to auto-focus the invisible input right away
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // If the user is typing directly into the hidden input, let onChange handle it
      if (e.target === inputRef.current) return;
      
      if (isVerifying) return;
      
      if (e.key === "Backspace") {
        setPin(prev => {
          if (prev.length > 0) SoundEngine.playPop();
          return prev.slice(0, -1);
        });
      } else if (/^[0-9]$/.test(e.key)) {
        setPin(prev => {
          if (prev.length >= 6) return prev;
          SoundEngine.playPop();
          const newPin = prev + e.key;
          if (newPin.length === 6) {
            setIsVerifying(true);
            setTimeout(() => {
              SoundEngine.playSwoosh();
              navigate("/verifying-doctor");
            }, 1000);
          }
          return newPin;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVerifying, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isVerifying) return;
    
    const val = e.target.value.replace(/[^0-9]/g, '');
    
    if (val.length <= 6) {
      if (val.length > pin.length) {
        SoundEngine.playPop();
      } else if (val.length < pin.length) {
        SoundEngine.playPop();
      }
      
      setPin(val);
      
      if (val.length === 6) {
        setIsVerifying(true);
        setTimeout(() => {
          SoundEngine.playSwoosh();
          navigate("/verifying-doctor");
        }, 1000);
      }
    }
  };

  const handleContainerClick = () => {
    // Guarantee that tapping ANYWHERE on the screen brings up the mobile keyboard
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div 
      className="flex flex-col h-full items-center p-6 relative overflow-y-auto no-scrollbar"
      onClick={handleContainerClick}
      style={{ backgroundImage: `url(${imgBgPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute top-4 left-4 z-50">
        <EutopiaLogo className="scale-75 origin-top-left" />
      </div>

      <div className="flex flex-col items-center mt-12 text-center px-4 shrink-0">
        <h2 className="text-[14px] font-bold text-[#00f2ff] tracking-[3px] uppercase leading-snug">
          EUTOPIA MEDICAL RECORD<br/>SYSTEM
        </h2>
        <p className="text-[10px] text-slate-400 mt-2 tracking-[1px] uppercase">
          Restricted Medical Data
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-white rounded-[24px] p-6 flex flex-col items-center mt-8 shadow-2xl relative overflow-hidden shrink-0 cursor-text"
      >
        {/* Invisible Input Layer covering the card to trigger native mobile keyboard */}
        <input
          ref={inputRef}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          value={pin}
          onChange={handleInputChange}
          className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-text text-transparent bg-transparent outline-none border-none"
          autoComplete="off"
          autoFocus
        />

        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#e0f2fe] to-white/0 pointer-events-none" />

        <motion.div 
          animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0px rgba(0,188,212,0)", "0 0 20px rgba(0,188,212,0.4)", "0 0 0px rgba(0,188,212,0)"] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[72px] h-[72px] bg-[#0088cc] rounded-full flex items-center justify-center text-white relative z-10 mb-5 mt-2 shrink-0"
        >
          <Lock size={32} />
        </motion.div>

        <h3 className="text-slate-800 font-medium text-[16px] text-center leading-tight mb-3 relative z-10 px-2 pointer-events-none">
          Additional medical records require authorized doctor access
        </h3>
        
        <p className="text-[10px] text-slate-500 uppercase tracking-wide mb-5 pointer-events-none">
          Please enter your security pin
        </p>

        <div className="flex gap-2 mb-6 relative w-full justify-center pointer-events-none">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className={`w-[40px] h-[54px] rounded-lg border-2 flex items-center justify-center text-3xl font-bold text-slate-800 ${
                pin.length > index ? 'border-[#0088cc] bg-[#e0f2fe]' : 'border-slate-300 bg-slate-100'
              } transition-colors`}
            >
              {pin.length > index ? "•" : ""}
            </motion.div>
          ))}
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            navigate("/verifying-doctor");
          }}
          disabled={pin.length < 6}
          className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all text-[14px] relative z-30 ${
            pin.length === 6 ? 'bg-[#0077b6] text-white hover:bg-[#006699]' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          {isVerifying ? 'VERIFYING...' : 'AUTHORIZE ACCESS'}
        </button>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            SoundEngine.playSwoosh();
            navigate(-1);
          }}
          className="w-full py-4 rounded-xl font-bold tracking-wide border border-slate-300 text-slate-500 mt-3 hover:bg-slate-50 transition-colors text-[14px] relative z-30"
        >
          CANCEL
        </button>
      </motion.div>

      <div className="mt-auto pt-6 pb-2 text-center px-4">
        <p className="text-[8px] text-slate-500/80 leading-relaxed uppercase tracking-wider">
          All access attempts are logged and encrypted.<br/>
          Unauthorized access will be reported.
        </p>
      </div>
    </div>
  );
}