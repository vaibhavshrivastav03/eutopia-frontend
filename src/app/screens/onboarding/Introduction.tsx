import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { DreamyBackground } from '../../components/DreamyBackground';
import mapCardImage from '../../../imports/image-7.png';

export function Introduction() {
  const navigate = useNavigate();

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

      {/* Centered glass card with premium entrance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="relative w-full max-w-sm rounded-[32px] px-8 py-10 flex flex-col items-center overflow-hidden"
        style={{
          border: '1px solid rgba(255,255,255,0.3)',
          boxShadow: '0 20px 50px rgba(10,20,40,0.45)',
        }}
      >
        {/* Map image background, cropped to the card border */}
        <img
          src={mapCardImage}
          alt="City navigation map"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Legibility overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(6,14,28,0.72) 0%, rgba(6,14,28,0.25) 40%, rgba(6,14,28,0.35) 70%, rgba(6,14,28,0.78) 100%)',
          }}
        />

        {/* Fading fog rising from the button down to the base */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none z-[5]"
          style={{
            background:
              'linear-gradient(180deg, rgba(190,215,240,0) 0%, rgba(200,222,242,0.15) 55%, rgba(210,228,245,0.32) 100%)',
          }}
        />

        {/* Eyebrow label with reveal */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-[10px] tracking-[0.35em] uppercase mb-3"
          style={{ fontFamily: 'Space Grotesk, monospace', color: 'rgba(255,255,255,0.7)' }}
        >
          INTRODUCTION
        </motion.p>

        {/* Hero heading with split text reveal */}
        <div className="relative z-10 text-center mb-4 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Space Grotesk, serif',
              fontSize: '34px',
              fontWeight: 600,
              lineHeight: 1.1,
              color: '#ffffff',
              textShadow: '0 2px 16px rgba(0,0,0,0.5)',
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              WELCOME TO
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              EUTOPIA
            </motion.span>
          </motion.h1>
        </div>


        {/* Spacer revealing the map's golden pin behind the content */}
        <div className="relative z-10 w-full h-44 mb-8" />

        {/* Baby blue pill BEGIN button */}
        <motion.button
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 1.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => navigate('/onboarding/child-profile')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative z-10 w-full h-14 rounded-full text-white overflow-hidden"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            background: 'linear-gradient(135deg, #87CEEB 0%, #5BA3D0 100%)',
            boxShadow: '0 12px 30px rgba(135,206,235,0.4)',
          }}
        >
          {/* Slow shimmer sweep */}
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
          <span className="relative z-10">BEGIN</span>
        </motion.button>

        {/* Carousel dots with stagger animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex items-center gap-2 mt-6"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 1.6 + (i * 0.08),
                duration: 0.5,
                type: 'spring',
                stiffness: 300,
                damping: 20
              }}
              className="rounded-full transition-all"
              style={{
                width: i === 0 ? '8px' : '6px',
                height: i === 0 ? '8px' : '6px',
                background: i === 0 ? '#87CEEB' : 'rgba(154,167,185,0.4)',
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
