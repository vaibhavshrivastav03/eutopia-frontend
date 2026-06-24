import { motion } from "motion/react";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router";
import { AlertTriangle, ShieldPlus } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SoundEngine } from "../utils/sound";

import imgPatientAvatar from "../../imports/Our_model_child_-2.PNG";

// Wide design canvas — scaled to fit the mobile frame
const W = 1080;
const H = 680;
const CHAMFER = "polygon(34px 0, calc(100% - 34px) 0, 100% 34px, 100% calc(100% - 34px), calc(100% - 34px) 100%, 34px 100%, 0 calc(100% - 34px), 0 34px)";
const SMALL_CHAMFER = "polygon(14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px), 0 14px)";

export function PatientVerified() {
  const navigate = useNavigate();
  const { patientData } = useAppContext();

  const [time, setTime] = useState("10:24:53 AM");
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.35);
  

  useLayoutEffect(() => {
    const measure = () => {
      if (!wrapRef.current) return;
      const { width, height } = wrapRef.current.getBoundingClientRect();
      setScale(Math.min(width / W, height / H));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => SoundEngine.playSuccess(), 100);
    const tick = setInterval(
      () =>
        setTime(
          new Date().toLocaleTimeString("en-US", {
            hour12: true,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        ),
      1000,
    );
    return () => {
      clearTimeout(t);
      clearInterval(tick);
    };
  }, []);

  return (
    <div
      className="flex flex-col h-full w-full cursor-pointer overflow-hidden relative px-4 pb-4 bg-[#111d2d]"
      onClick={() => {
        SoundEngine.playSwoosh();
        navigate("/emergency-services");
      }}
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(44,74,112,1) 0%, rgba(33,55,84,1) 50%, rgba(21,36,56,1) 100%)",
        }}
      />

      <div ref={wrapRef} className="flex-1 flex items-center justify-center w-full min-h-0 z-10">
      <motion.div
        initial={{ opacity: 0, scale: scale * 0.94 }}
        animate={{ opacity: 1, scale }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: W, height: H, transformOrigin: "center" }}
        className="relative shrink-0"
      >
        {/* Outer chamfered frame */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: CHAMFER,
            background:
              "linear-gradient(155deg, rgba(10,24,40,0.95) 0%, rgba(6,14,24,0.97) 100%)",
            border: "2px solid rgba(0,242,255,0.45)",
            boxShadow:
              "0 0 60px rgba(0,242,255,0.18), inset 0 0 60px rgba(0,242,255,0.05)",
          }}
        />
        {/* Inner hairline frame */}
        <div
          className="absolute inset-3 pointer-events-none"
          style={{ clipPath: CHAMFER, border: "1px solid rgba(0,242,255,0.2)" }}
        />

        {/* Corner energy nodes */}
        {[
          "top-5 left-5 border-t-2 border-l-2",
          "top-5 right-5 border-t-2 border-r-2",
          "bottom-5 left-5 border-b-2 border-l-2",
          "bottom-5 right-5 border-b-2 border-r-2",
        ].map((pos, i) => (
          <div key={i} className={`absolute ${pos} w-7 h-7 border-[#00f2ff]/80 pointer-events-none`}>
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-[#00f2ff]"
              style={{
                top: pos.includes("top") ? -4 : "auto",
                bottom: pos.includes("bottom") ? -4 : "auto",
                left: pos.includes("left") ? -4 : "auto",
                right: pos.includes("right") ? -4 : "auto",
                boxShadow: "0 0 12px rgba(0,242,255,0.9)",
              }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }}
            />
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 px-12 py-9 flex flex-col">
          {/* Header */}
          <div className="flex items-baseline gap-4 mb-5">
            <div className="flex items-baseline gap-2">
              <span className="text-white" style={{ fontSize: 38, fontWeight: 700, letterSpacing: "0.06em" }}>EUTOPIA</span>
              <span className="text-[#ff3a4c]" style={{ fontSize: 38, fontWeight: 700, letterSpacing: "0.06em" }}>ID</span>
            </div>
            <span className="text-slate-400" style={{ fontSize: 15, letterSpacing: "0.3em" }}>SECURE MEDICAL PROFILE</span>
          </div>

          {/* Body */}
          <div className="flex-1 flex gap-9 min-h-0">
            {/* Portrait */}
            <div className="relative shrink-0" style={{ width: 320 }}>
              <div
                className="relative w-full h-[400px] overflow-hidden"
                style={{
                  clipPath: SMALL_CHAMFER,
                  border: "2px solid rgba(0,242,255,0.5)",
                  boxShadow: "inset 0 0 30px rgba(0,242,255,0.3)",
                }}
              >
                <img
                  src={
                    patientData?.profile_photo ||
                    patientData?.photo ||
                    imgPatientAvatar
                  }
                  alt="Patient"
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(1.05) contrast(1.05)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(180deg, transparent 65%, rgba(0,242,255,0.12) 100%)" }}
                />
                <motion.div
                  aria-hidden
                  className="absolute inset-x-0 h-24 pointer-events-none"
                  style={{ background: "linear-gradient(180deg, transparent, rgba(0,242,255,0.15), transparent)" }}
                  animate={{ y: ["-30%", "130%"] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Holographic hovering projection under the photo */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[280px] h-[48px] pointer-events-none">
                {[0, 1].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 top-1/2 rounded-[50%] border border-[#00f2ff]/40"
                    style={{ x: "-50%", y: "-50%" }}
                    animate={{ width: [50, 240], height: [12, 46], opacity: [0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 1.5, ease: "easeOut" }}
                  />
                ))}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] h-[16px] rounded-full"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(0,242,255,0.32) 0%, rgba(0,242,255,0) 72%)",
                    filter: "blur(7px)",
                  }}
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Right side */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Name + ID */}
              <h1 className="text-white" style={{ fontSize: 50, fontWeight: 700, lineHeight: 1, letterSpacing: "0.02em" }}>
                {patientData?.full_name}
              </h1>
              <div className="flex items-baseline gap-2 mt-2 mb-6">
                <span className="text-slate-300" style={{ fontSize: 20, letterSpacing: "0.1em" }}>EUTOPIA ID:</span>
                <span className="text-[#ff3a4c] font-mono" style={{ fontSize: 20, letterSpacing: "0.1em" }}>{patientData?.bracelet_uid || patientData?.id}</span>
              </div>

              {/* Two columns: data + alerts */}
              <div className="flex-1 flex gap-5 min-h-0">
                {/* Data table */}
                <div
                  className="flex-1 self-start"
                  style={{ clipPath: SMALL_CHAMFER, border: "1px solid rgba(0,242,255,0.22)" }}
                >
                  {[
                    {
                      k: "AGE",
                      v: `${patientData?.age || "-" } YEARS`,
                      red: false
                    },
                    {
                      k: "BLOOD TYPE",
                      v: patientData?.blood_group || "-",
                      red: false
                    },
                    { k: "GENDER", v: "MALE", red: false },
                    { k: "HEIGHT", v: "156 CM", red: false },
                    { k: "WEIGHT", v: "42 KG", red: false },
                  ].map((r, i) => (
                    <div
                      key={r.k}
                      className="grid grid-cols-2 items-center px-5 py-3"
                      style={{ background: i % 2 === 0 ? "rgba(0,242,255,0.06)" : "transparent" }}
                    >
                      <span className="text-slate-400" style={{ fontSize: 16, letterSpacing: "0.12em" }}>{r.k}</span>
                      <span className="text-white" style={{ fontSize: 20, fontWeight: 600, letterSpacing: "0.05em" }}>{r.v}</span>
                    </div>
                  ))}
                </div>

                {/* Alert module */}
                <div
                  className="self-start px-5 py-5 flex flex-col gap-4"
                  style={{
                    width: 290,
                    clipPath: SMALL_CHAMFER,
                    background: "linear-gradient(135deg, rgba(255,58,76,0.10) 0%, rgba(255,58,76,0.02) 100%)",
                    border: "1px solid rgba(255,58,76,0.45)",
                    boxShadow: "0 0 24px rgba(255,58,76,0.15)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full border border-[#ff3a4c]/60 flex items-center justify-center shrink-0">
                      <AlertTriangle className="text-[#ff3a4c]" size={18} />
                    </div>
                    <div>
                      <div className="text-slate-300" style={{ fontSize: 16, letterSpacing: "0.08em" }}>ALLERGIES</div>
                      <div className="text-[#ff3a4c]" style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.05em" }}>{patientData?.allergies || "None"}</div>
                    </div>
                  </div>

                  <div className="h-px bg-[#ff3a4c]/25" />

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full border border-[#ff3a4c]/60 flex items-center justify-center shrink-0">
                      <ShieldPlus className="text-[#ff3a4c]" size={18} />
                    </div>
                    <div>
                      <div className="text-slate-300" style={{ fontSize: 16, letterSpacing: "0.08em" }}>MEDICAL CONDITIONS</div>
                      <div className="text-[#ff3a4c]" style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.05em" }}>{patientData?.medical_notes || "No Notes"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between pt-5 mt-2 border-t border-[#00f2ff]/20">
            <div className="flex items-center gap-3">
              <span className="text-[#00f2ff]" style={{ fontSize: 16, letterSpacing: "0.18em", fontWeight: 600 }}>
                ID STATUS: <span className="text-white">ACTIVE</span>
              </span>
              <motion.div
                className="w-2.5 h-2.5 rounded-full bg-[#00f2ff]"
                style={{ boxShadow: "0 0 12px rgba(0,242,255,0.9)" }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
            </div>
            <span className="text-[#00f2ff]/80 font-mono" style={{ fontSize: 16, letterSpacing: "0.12em" }}>
              LAST SYNC: {time}
            </span>
          </div>
        </div>
      </motion.div>
      </div>

      {/* Emergency CTA */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={(e) => {
          e.stopPropagation();
          SoundEngine.playSwoosh();
          navigate("/emergency-services");
        }}
        className="z-10 w-full mt-2 bg-red-950/40 border border-red-500/50 rounded-xl p-3 flex items-center justify-center gap-3 relative overflow-hidden shadow-[0_0_20px_rgba(220,38,38,0.18)] backdrop-blur-md"
      >
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-red-500" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-red-500" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-red-500" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-500" />
        <AlertTriangle className="text-red-500 w-4 h-4 animate-pulse" />
        <span className="text-red-500 font-bold tracking-[0.18em] text-[12px] uppercase">
          Access Emergency Services
        </span>
      </motion.button>
    </div>
  );
}
