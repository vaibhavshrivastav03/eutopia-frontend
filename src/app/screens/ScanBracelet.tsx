import { useEffect, useState } from "react";
import { scanBracelet } from "../../services/braceletService";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "../components/Header";
import { SoundEngine } from "../utils/sound";
import braceletVideo from "../../imports/animate_this.mp4";
import { VideoLumaKey } from "../components/VideoLumaKey";
import imgBgPattern from "figma:asset/c21f25bdfa9378944b010dd50361a71faac4e7ed.png";

const loadingMessages = [
  "Scanning bracelet ID...",
  "Verifying bracelet identity...",
  "Establishing secure connection..."
];

export function ScanBracelet() {
  const navigate = useNavigate();
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Play scanning init sound and start the continuous scanning loop
    SoundEngine.playSwoosh();
    const stopScanningSound = SoundEngine.playScanning();

    const interval = setInterval(() => {
      setMessageIndex((i) => {
        if (i + 1 < loadingMessages.length) {
          SoundEngine.playPop(); // Pop on each text change
          return i + 1;
        }
        return i;
      });
    }, 1200);

    const timeout = setTimeout(async () => {
      try {
        stopScanningSound();

        const uid =
          localStorage.getItem(
            "bracelet_uid"
          );

        if (!uid) {
          console.error(
            "No bracelet assigned"
          );

          navigate("/activation");

          return;
        }

        const response =
          await scanBracelet(uid);

        if (response.success) {
          localStorage.setItem(
            "scannedUser",
            JSON.stringify(
              response.data
            )
          );

          navigate(
            "/authenticating"
          );
        }
      } catch (error) {
        console.error(error);
      }
    }, 4500);

    

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      stopScanningSound();
    };
  }, [navigate]);

  return (
    <div 
      className="flex flex-col h-full items-center text-center relative"
      style={{ backgroundImage: `url(${imgBgPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-full text-left relative z-10">
        <Header />
      </div>

      <div className="flex-1 flex flex-col justify-center items-center relative w-full mt-8 z-10">
        <div
          className="relative w-[300px] h-[300px] flex items-center justify-center"
          style={{ perspective: "900px", transformStyle: "preserve-3d" }}
        >
          {/* Soft cyan glow puddle below — squashes as bracelet rises */}
          <motion.div
            aria-hidden
            className="absolute rounded-full"
            style={{
              width: 200,
              height: 36,
              bottom: 26,
              background: "radial-gradient(ellipse at center, rgba(0,242,255,0.55) 0%, rgba(0,242,255,0) 70%)",
              filter: "blur(10px)",
            }}
            animate={{ scale: [1, 0.78, 1], opacity: [0.9, 0.45, 0.9] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Pulsing radar ring — sits behind the bracelet in 3D space */}
          <motion.div
            aria-hidden
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 260,
              height: 260,
              border: "1.5px solid rgba(0,242,255,0.55)",
              transform: "translateZ(-60px) rotateX(70deg)",
            }}
            animate={{ scale: [0.7, 1.25, 0.7], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
          />

          {/* Second offset ring for depth */}
          <motion.div
            aria-hidden
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 260,
              height: 260,
              border: "1px solid rgba(0,242,255,0.4)",
              transform: "translateZ(-60px) rotateX(70deg)",
            }}
            animate={{ scale: [0.7, 1.25, 0.7], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: 1.3 }}
          />

          {/* Bracelet video — black background keyed out to true transparency */}
          <VideoLumaKey
            src={braceletVideo}
            tolerance={70}
            softness={45}
            className="w-full h-full object-contain relative"
          />
        </div>

        <motion.div 
          className="mt-12 flex flex-col items-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-[22px] font-bold text-white tracking-wide uppercase mb-2">
            Tap Eutopia Bracelet
          </h2>
          <p className="text-[14px] text-slate-300">
            Hold device near wearable to begin scan
          </p>
        </motion.div>
      </div>

      <div className="w-full px-8 pb-10 flex flex-col gap-4">
        <div className="flex justify-between items-end mb-2">
          <div className="flex flex-col items-start gap-1">
            <span className="text-[10px] font-bold text-[#00f2ff] tracking-widest uppercase">
              System Status
            </span>
            <span className="text-[16px] font-bold text-white">
              SCANNING INITIATED
            </span>
          </div>
          <span className="text-[12px] text-[#00f2ff] opacity-80 font-mono">
            0.04s latency
          </span>
        </div>

        <div className="h-2 bg-slate-800 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4.5, ease: "easeInOut" }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-[#00f2ff] shadow-[0_0_10px_rgba(0,242,255,0.5)]"
          />
        </div>

        <div className="h-[20px] relative mt-2 text-left">
          <AnimatePresence mode="wait">
            <motion.p
              key={messageIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[13px] text-slate-300 font-medium absolute inset-0"
            >
              {loadingMessages[messageIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
