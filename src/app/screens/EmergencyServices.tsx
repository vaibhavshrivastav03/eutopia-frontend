import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Shield, AlertTriangle, Ambulance, Flame, MapPin, Truck } from "lucide-react";
import { SoundEngine } from "../utils/sound";
import { useState } from "react";
import imgBgPattern from "figma:asset/c21f25bdfa9378944b010dd50361a71faac4e7ed.png";
import imgEutopiaLogo from "../../imports/Gemini_Generated_Image_o0fhc4o0fhc4o0fh-removebg-preview.png";
import ambulanceGif from "../../imports/ezgif.com-video-to-gif-converter__1_.gif";
import fireGif from "../../imports/0521-ezgif.com-video-to-gif-converter.gif";

export function EmergencyServices() {
  const navigate = useNavigate();
  const [callingAmbulance, setCallingAmbulance] = useState(false);
  const [callingFire, setCallingFire] = useState(false);

  const handleCallAmbulance = () => {
    if (callingAmbulance || callingFire) return;
    SoundEngine.playSwoosh();
    setCallingAmbulance(true);
    setTimeout(() => navigate("/ambulance-tracking"), 400);
  };

  const handleCallFire = () => {
    if (callingAmbulance || callingFire) return;
    SoundEngine.playSwoosh();
    setCallingFire(true);
    setTimeout(() => navigate("/fire-tracking"), 400);
  };

  return (
    <div 
      className="flex flex-col h-full bg-[#111d2d] text-slate-50 overflow-hidden relative font-['Outfit',sans-serif]"
      style={{ backgroundImage: `url(${imgBgPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Background Gradient & Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-30" 
        style={{
          background: 'radial-gradient(circle at center, rgba(44,74,112,1) 0%, rgba(33,55,84,1) 50%, rgba(21,36,56,1) 100%)'
        }}
      />
      <div className="absolute inset-0 bg-[#246a9a]/10 mix-blend-overlay z-0 pointer-events-none" />

      {/* Main Header */}
      <div className="bg-[#1c3445] z-10 relative px-4 pt-8 pb-4 shadow-md border-b border-[#365a84]/30 flex flex-col items-center gap-1">
        <img
          src={imgEutopiaLogo}
          alt="Eutopia ID"
          className="h-8 w-auto object-contain opacity-90"
        />
        <span className="text-[12px] text-white/80 font-bold tracking-[2.4px] uppercase relative z-10">
          Emergency Contacting
        </span>
      </div>

      {/* Location Bar */}
      <div className="bg-[#256b9a] z-10 relative h-[46px] flex items-center justify-center border-y border-[#314a6a]/50 shadow-inner">
        <MapPin size={14} className="text-[#58F210] mr-2" />
        <span className="text-[#d1d5db] text-[14px]">Current Location: <strong className="text-white">ABUJA, FCT</strong></span>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar z-10 relative p-5 flex flex-col gap-5 pb-[260px]">
        {/* Alert Banner */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-[#1c3445] rounded-xl border border-[#236a9a] p-4 flex gap-4 shadow-lg relative overflow-hidden"
        >
          <div className="w-10 h-10 shrink-0 bg-yellow-400/20 rounded-full flex items-center justify-center">
            <AlertTriangle className="text-yellow-400" size={24} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[18px] font-bold text-white leading-tight">
              Emergency Assistance<br />Needed
            </h2>
            <p className="text-[#d1d5db] text-[14px] mt-1">Select a service to call.</p>
          </div>
        </motion.div>

        {/* Action Grid */}
        <div className="flex gap-4">
          {/* Ambulance Card */}
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            onClick={handleCallAmbulance}
            className={`flex-1 flex flex-col relative overflow-hidden rounded-xl h-[290px] border transition-all duration-300 ${
              callingAmbulance ? 'border-red-400 shadow-[0_0_25px_rgba(239,68,68,0.6)]' : 'border-red-500/50 shadow-[0_0_15px_rgba(227,74,62,0.4)]'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#e34a3e] to-[#921e1e] pointer-events-none" />
            <div className="h-[128px] relative w-full overflow-hidden bg-gradient-to-b from-[#1a0608] via-[#3a0a0e] to-[#5a0f15]">
              <div className="absolute inset-0" style={{ backgroundImage: `url(${ambulanceGif})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
              {false && (<>
              {/* Distant city silhouette */}
              <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="absolute inset-x-0 top-2 w-full h-12 opacity-40">
                <path d="M0 60 L0 28 L8 28 L8 18 L18 18 L18 32 L28 32 L28 22 L34 22 L34 14 L40 14 L40 30 L52 30 L52 24 L60 24 L60 16 L68 16 L68 28 L78 28 L78 20 L86 20 L86 30 L96 30 L96 22 L106 22 L106 14 L116 14 L116 26 L124 26 L124 18 L134 18 L134 30 L144 30 L144 22 L156 22 L156 14 L168 14 L168 28 L178 28 L178 22 L190 22 L190 30 L200 30 L200 60 Z" fill="#1a0a0c"/>
              </svg>

              {/* Heat haze glow on horizon */}
              <motion.div
                className="absolute inset-x-0 top-9 h-3"
                style={{ background: "radial-gradient(ellipse at center, rgba(255,140,140,0.35), transparent 70%)" }}
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Road with moving dashed lines */}
              <div className="absolute inset-x-0 bottom-0 h-12 overflow-hidden" style={{ background: "linear-gradient(to top,#0a0204 0%,#1a0608 70%,transparent 100%)" }}>
                <motion.div
                  className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 flex gap-3"
                  animate={{ x: callingAmbulance ? [0, -28] : [0, -28] }}
                  transition={{ duration: callingAmbulance ? 0.25 : 0.6, repeat: Infinity, ease: "linear" }}
                >
                  {Array.from({ length: 18 }).map((_, i) => (
                    <span key={i} className="w-7 h-1 bg-yellow-200/70 rounded-sm shrink-0" />
                  ))}
                </motion.div>
              </div>

              {/* Sonar pulse rings (when calling) */}
              {callingAmbulance && [0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-red-400"
                  initial={{ width: 24, height: 24, opacity: 0.7 }}
                  animate={{ width: 140, height: 140, opacity: 0 }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
                />
              ))}

              {/* Ambulance with bobble + sirens */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                animate={{
                  x: callingAmbulance ? [0, -1.5, 1.5, -1.5, 1.5, 0] : [-6, 6, -6],
                  y: callingAmbulance ? [0, -1, 0, -1, 0] : [0, -1.5, 0],
                }}
                transition={{
                  x: { duration: callingAmbulance ? 0.18 : 3.5, repeat: Infinity, ease: callingAmbulance ? "easeInOut" : "linear" },
                  y: { duration: callingAmbulance ? 0.22 : 1.4, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                {/* Headlight beams */}
                <motion.div
                  className="absolute top-[42px] left-[-46px] w-[46px] h-2 origin-right"
                  style={{ background: "linear-gradient(to left, rgba(255,240,200,0.7), transparent)", filter: "blur(2px)" }}
                  animate={{ opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />

                {/* Light bar */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                  <motion.span
                    className="w-3 h-1.5 rounded-sm bg-red-500"
                    style={{ boxShadow: "0 0 10px #ff3b47" }}
                    animate={{ opacity: [1, 0.15, 1], boxShadow: ["0 0 14px #ff3b47","0 0 4px #ff3b47","0 0 14px #ff3b47"] }}
                    transition={{ duration: 0.4, repeat: Infinity }}
                  />
                  <motion.span
                    className="w-3 h-1.5 rounded-sm bg-blue-500"
                    style={{ boxShadow: "0 0 10px #2ad6ff" }}
                    animate={{ opacity: [0.15, 1, 0.15], boxShadow: ["0 0 4px #2ad6ff","0 0 14px #2ad6ff","0 0 4px #2ad6ff"] }}
                    transition={{ duration: 0.4, repeat: Infinity }}
                  />
                </div>

                {/* Ambulance body */}
                <div className="relative">
                  <Ambulance size={72} className="text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]" strokeWidth={1.6} />
                  {/* Sweep flash overlay across the body */}
                  <motion.div
                    className="absolute inset-0 rounded-md pointer-events-none"
                    style={{ background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)", mixBlendMode: "overlay" }}
                    animate={{ x: ["-100%", "120%"] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* Exhaust puffs */}
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="absolute right-[64px] top-[38px] w-2 h-2 rounded-full bg-white/40"
                    animate={{ x: [-2, -22], y: [0, -4], opacity: [0.55, 0], scale: [1, 1.8] }}
                    transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.3, ease: "easeOut" }}
                    style={{ filter: "blur(2px)" }}
                  />
                ))}
              </motion.div>

              {/* Speed lines */}
              {[14, 38, 70, 96].map((top, i) => (
                <motion.span
                  key={i}
                  className="absolute h-px bg-white/40"
                  style={{ top, right: 0, width: 24 }}
                  animate={{ x: [40, -240], opacity: [0, 0.7, 0] }}
                  transition={{ duration: callingAmbulance ? 0.5 : 0.9, repeat: Infinity, delay: i * 0.12, ease: "linear" }}
                />
              ))}
              </>)}
            </div>
            <div className="relative z-10 flex-1 border-t border-red-400/30 flex flex-col items-center justify-center text-center px-2 py-4">
              <span className="text-[12px] text-white/90 font-bold tracking-[0.6px]">CALL</span>
              <span className="text-[18px] font-bold text-white mb-3">AMBULANCE</span>
              <div className="w-12 h-px bg-white/30 shadow-[0_0_5px_rgba(255,255,255,0.8)] mb-auto" />
              <div className="bg-black/20 px-3 py-1.5 rounded-md w-full mt-2">
                <span className="text-[10px] text-white/90">{callingAmbulance ? "Contacting EMS..." : "Tap to Call"}</span>
              </div>
            </div>
          </motion.button>

          {/* Fire Service Card */}
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={handleCallFire}
            className={`flex-1 flex flex-col relative overflow-hidden rounded-xl h-[290px] border transition-all duration-300 ${
              callingFire ? 'border-orange-400 shadow-[0_0_25px_rgba(249,115,22,0.6)]' : 'border-orange-500/50 shadow-[0_0_15px_rgba(239,154,31,0.4)]'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#ef9a1f] to-[#a44605] pointer-events-none" />
            <div className="h-[128px] relative w-full overflow-hidden bg-gradient-to-b from-[#1f0a02] via-[#3a1404] to-[#5a2008]">
              <div className="absolute inset-0" style={{ backgroundImage: `url(${fireGif})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
              {false && (<>
              {/* Distant city silhouette */}
              <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="absolute inset-x-0 top-2 w-full h-12 opacity-40">
                <path d="M0 60 L0 28 L8 28 L8 18 L18 18 L18 32 L28 32 L28 22 L34 22 L34 14 L40 14 L40 30 L52 30 L52 24 L60 24 L60 16 L68 16 L68 28 L78 28 L78 20 L86 20 L86 30 L96 30 L96 22 L106 22 L106 14 L116 14 L116 26 L124 26 L124 18 L134 18 L134 30 L144 30 L144 22 L156 22 L156 14 L168 14 L168 28 L178 28 L178 22 L190 22 L190 30 L200 30 L200 60 Z" fill="#1f0c04"/>
              </svg>

              {/* Ember glow on horizon */}
              <motion.div
                className="absolute inset-x-0 top-9 h-3"
                style={{ background: "radial-gradient(ellipse at center, rgba(255,170,80,0.45), transparent 70%)" }}
                animate={{ opacity: [0.45, 0.8, 0.45] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              />

              {/* Floating embers */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    left: 20 + i * 32,
                    top: 80,
                    background: i % 2 ? "#ffb74d" : "#ff6f3c",
                    boxShadow: "0 0 6px currentColor",
                    color: i % 2 ? "#ffb74d" : "#ff6f3c",
                  }}
                  animate={{ y: [-6, -70], opacity: [0, 0.9, 0], x: [0, i % 2 ? 6 : -6] }}
                  transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.45, ease: "easeOut" }}
                />
              ))}

              {/* Road with moving dashed lines */}
              <div className="absolute inset-x-0 bottom-0 h-12 overflow-hidden" style={{ background: "linear-gradient(to top,#0a0402 0%,#1f0a02 70%,transparent 100%)" }}>
                <motion.div
                  className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 flex gap-3"
                  animate={{ x: callingFire ? [0, -28] : [0, -28] }}
                  transition={{ duration: callingFire ? 0.25 : 0.6, repeat: Infinity, ease: "linear" }}
                >
                  {Array.from({ length: 18 }).map((_, i) => (
                    <span key={i} className="w-7 h-1 bg-yellow-200/70 rounded-sm shrink-0" />
                  ))}
                </motion.div>
              </div>

              {/* Sonar pulse rings (when calling) */}
              {callingFire && [0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-orange-400"
                  initial={{ width: 24, height: 24, opacity: 0.7 }}
                  animate={{ width: 140, height: 140, opacity: 0 }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
                />
              ))}

              {/* Fire truck with bobble + sirens */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                animate={{
                  x: callingFire ? [0, -1.5, 1.5, -1.5, 1.5, 0] : [-6, 6, -6],
                  y: callingFire ? [0, -1, 0, -1, 0] : [0, -1.5, 0],
                }}
                transition={{
                  x: { duration: callingFire ? 0.18 : 3.5, repeat: Infinity, ease: callingFire ? "easeInOut" : "linear" },
                  y: { duration: callingFire ? 0.22 : 1.4, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                {/* Headlight beams */}
                <motion.div
                  className="absolute top-[42px] left-[-46px] w-[46px] h-2 origin-right"
                  style={{ background: "linear-gradient(to left, rgba(255,230,170,0.7), transparent)", filter: "blur(2px)" }}
                  animate={{ opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />

                {/* Light bar — red + amber */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                  <motion.span
                    className="w-3 h-1.5 rounded-sm bg-red-500"
                    style={{ boxShadow: "0 0 10px #ff3b47" }}
                    animate={{ opacity: [1, 0.15, 1], boxShadow: ["0 0 14px #ff3b47","0 0 4px #ff3b47","0 0 14px #ff3b47"] }}
                    transition={{ duration: 0.4, repeat: Infinity }}
                  />
                  <motion.span
                    className="w-3 h-1.5 rounded-sm bg-amber-400"
                    style={{ boxShadow: "0 0 10px #ffb000" }}
                    animate={{ opacity: [0.15, 1, 0.15], boxShadow: ["0 0 4px #ffb000","0 0 14px #ffb000","0 0 4px #ffb000"] }}
                    transition={{ duration: 0.4, repeat: Infinity }}
                  />
                </div>

                {/* Truck body with flame badge */}
                <div className="relative">
                  <Truck size={72} className="text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]" strokeWidth={1.6} />
                  <motion.div
                    className="absolute top-[18px] left-[14px]"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.85, 1, 0.85] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                  >
                    <Flame size={20} className="text-orange-300 drop-shadow-[0_0_6px_#ff7a1a]" strokeWidth={2.2} />
                  </motion.div>
                  {/* Sweep flash overlay across the body */}
                  <motion.div
                    className="absolute inset-0 rounded-md pointer-events-none"
                    style={{ background: "linear-gradient(120deg, transparent 30%, rgba(255,210,140,0.55) 50%, transparent 70%)", mixBlendMode: "overlay" }}
                    animate={{ x: ["-100%", "120%"] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* Exhaust / smoke puffs */}
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="absolute right-[64px] top-[38px] w-2 h-2 rounded-full bg-white/40"
                    animate={{ x: [-2, -22], y: [0, -4], opacity: [0.55, 0], scale: [1, 1.8] }}
                    transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.3, ease: "easeOut" }}
                    style={{ filter: "blur(2px)" }}
                  />
                ))}
              </motion.div>

              {/* Speed lines */}
              {[14, 38, 70, 96].map((top, i) => (
                <motion.span
                  key={i}
                  className="absolute h-px bg-white/40"
                  style={{ top, right: 0, width: 24 }}
                  animate={{ x: [40, -240], opacity: [0, 0.7, 0] }}
                  transition={{ duration: callingFire ? 0.5 : 0.9, repeat: Infinity, delay: i * 0.12, ease: "linear" }}
                />
              ))}
              </>)}
            </div>
            <div className="relative z-10 flex-1 border-t border-orange-300/30 flex flex-col items-center justify-center text-center px-2 py-4">
              <span className="text-[12px] text-white/90 font-bold tracking-[0.6px]">CALL</span>
              <span className="text-[18px] font-bold text-white mb-3">FIRE SERVICE</span>
              <div className="w-12 h-px bg-white/30 shadow-[0_0_5px_rgba(255,255,255,0.8)] mb-auto" />
              <div className="bg-black/20 px-3 py-1.5 rounded-md w-full mt-2">
                <span className="text-[10px] text-white/90">{callingFire ? "Contacting Fire Dept..." : "Tap to Call"}</span>
              </div>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="absolute bottom-0 left-0 right-0 h-[184px] bg-gradient-to-t from-[#101925] to-transparent z-20 flex flex-col justify-end p-5">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-[#1c2c42]/80 backdrop-blur-sm border border-[#314a6a] rounded-lg p-3 flex items-center gap-3 mb-6 shadow-md"
        >
          <MapPin size={20} className="text-[#58F210]" />
          <span className="text-[12px] text-[#d1d5db]">
            Sending Your Location: <span className="text-white">https://maps.link/AB1234F</span>
          </span>
        </motion.div>

        <div className="flex flex-col gap-4">
          <motion.button 
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/family-alert")}
            className="w-[200px] mx-auto border border-[#487ab3] text-[#f6fbff] text-[12px] font-bold tracking-[1.2px] py-2 rounded-lg"
          >VIEW&nbsp;&nbsp;RECORDS</motion.button>
          
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/verified")}
            className="w-full bg-gradient-to-b from-[#2b4562] to-[#111d2d] border border-[#3b5b84] text-white text-[14px] font-bold tracking-[0.7px] py-4 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          >
            CANCEL
          </motion.button>
        </div>
      </div>
    </div>
  );
}
