import { motion } from "motion/react";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-slate-200 rounded-md ${className}`}>
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
        }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />
    </div>
  );
}
