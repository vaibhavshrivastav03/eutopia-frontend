import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import braceletImage from '../../../imports/Gemini_Generated_Image_hcveyghcveyghcve-removebg-preview.png';
import { DreamyBackground } from '../../components/DreamyBackground';
import { useAppContext } from "../../../context/AppContext";
import { assignBraceletToUser } from "../../../services/braceletService";

export function Activation() {
  const navigate = useNavigate();
  const { child } =
  useAppContext();



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
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
        className="relative w-full max-w-sm rounded-[32px] px-8 py-10 flex flex-col items-center"
        style={{
          background: 'rgba(255,255,255,0.45)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.65)',
          boxShadow: '0 20px 50px rgba(120,150,190,0.25)',
        }}
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center mb-8"
          style={{
            fontFamily: 'Space Grotesk, serif',
            fontSize: '28px',
            fontWeight: 600,
            lineHeight: 1.2,
            color: '#2C3A56',
          }}
        >
          PROTECTION ACTIVE
        </motion.h1>

        {/* Glowing success ring with checkmark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-32 h-32 flex items-center justify-center mb-8"
        >
          {/* Outer glow rings */}
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full"
              style={{
                border: '2px solid rgba(194,232,255,0.6)',
              }}
              animate={{
                scale: [1, 1.3, 1.6],
                opacity: [0.6, 0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 1,
                ease: 'easeOut',
              }}
            />
          ))}

          {/* Main checkmark ring with SVG stroke animation */}
          <motion.div
            className="relative w-24 h-24 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(194,232,255,0.3), rgba(194,232,255,0.15))',
              border: '3px solid #C2E8FF',
              boxShadow: '0 0 20px rgba(194,232,255,0.6), inset 0 0 12px rgba(194,232,255,0.3)',
            }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Check size={40} strokeWidth={3.5} style={{ color: '#5B9BD5' }} />
            </motion.div>
          </motion.div>

          {/* Soft burst of light particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(194,232,255,0.8), transparent)',
                top: '50%',
                left: '50%',
              }}
              initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 0],
                x: Math.cos((i * Math.PI * 2) / 8) * 60,
                y: Math.sin((i * Math.PI * 2) / 8) * 60,
                opacity: [0, 0.8, 0],
              }}
              transition={{
                delay: 0.6,
                duration: 1.2,
                ease: 'easeOut',
              }}
            />
          ))}
        </motion.div>

        {/* Silver chain bracelet with signal glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="relative w-64 h-40 mb-6 flex items-center justify-center"
        >
          {/* Signal ripples - contained */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full"
              style={{
                border: '2px solid rgba(135, 206, 235, 0.6)',
                boxShadow: '0 0 10px rgba(135, 206, 235, 0.3)',
              }}
              animate={{
                scale: [1, 1.3, 1.6],
                opacity: [0.7, 0.4, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.6,
                ease: 'easeOut',
              }}
            />
          ))}

          {/* Inner glow pulses */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`glow-${i}`}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(135, 206, 235, 0.25), transparent 60%)',
              }}
              animate={{
                scale: [0.8, 1.2, 1.5],
                opacity: [0.5, 0.25, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.7,
                ease: 'easeOut',
              }}
            />
          ))}

          {/* Soft platter shadow */}
          <div
            className="absolute inset-x-8 bottom-0 h-6 rounded-full blur-2xl opacity-40"
            style={{ background: 'radial-gradient(closest-side, rgba(15,23,42,0.2), transparent)' }}
          />

          <img
            src={braceletImage}
            alt="Eutopia ID Bracelet"
            className="relative w-full h-full object-contain"
          />

          {/* Metallic glint sweep across chain */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
              mixBlendMode: 'overlay',
            }}
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              delay: 1,
              duration: 1.5,
              ease: 'easeInOut',
            }}
          />

          {/* Heart locket gentle heartbeat pulse */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              delay: 1.5,
              duration: 0.8,
              ease: 'easeInOut',
            }}
          >
          </motion.div>
        </motion.div>

        {/* "ZARA IS NOW PROTECTED" */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center text-[14px] tracking-[0.15em] mb-8"
          style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, color: '#2C3A56' }}
        >
          {(child?.full_name || "CHILD").toUpperCase()} IS NOW PROTECTED
        </motion.p>

        {/* Baby blue FINISH button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={async () => {
            try {

              const braceletUid =
                "EUTOPIA" +
                Math.floor(
                  1000 +
                  Math.random() * 9000
                );

              await assignBraceletToUser(
                braceletUid
              );

              localStorage.setItem(
                "bracelet_uid",
                braceletUid
              );

              navigate("/scan");

            } catch (error) {

              console.error(
                "Bracelet Assignment Error",
                error
              );

            }
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative w-full h-14 rounded-full text-white overflow-hidden mb-6"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            background: 'linear-gradient(135deg, #87CEEB 0%, #5BA3D0 100%)',
            boxShadow: '0 12px 30px rgba(135,206,235,0.4)',
          }}
        >
          {/* Slow shimmer */}
          <motion.div
            className="absolute inset-0 opacity-40"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
            }}
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut',
            }}
          />
          <span className="relative z-10">FINISH</span>
        </motion.button>

        {/* Carousel dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex items-center gap-2"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-full transition-all"
              style={{
                width: i === 4 ? '8px' : '6px',
                height: i === 4 ? '8px' : '6px',
                background: i === 4 ? '#87CEEB' : 'rgba(154,167,185,0.4)',
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
