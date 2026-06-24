import { motion } from 'motion/react';

export function DreamyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient — bright airy foundation */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #dbeafe 50%, #e0e7ff 75%, #ffffff 100%)',
        }}
      />

      {/* Flowing mesh gradient ribbons — Stripe-style */}

      {/* Ribbon 1 — Sky blue flowing diagonal */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 140% 100% at 20% 30%, rgba(135, 206, 235, 0.4) 0%, transparent 50%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: ['-10%', '10%', '-10%'],
          y: ['-5%', '5%', '-5%'],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Ribbon 2 — Powder blue undulating wave */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 120% 80% at 70% 20%, rgba(176, 224, 230, 0.35) 0%, transparent 50%)',
          filter: 'blur(70px)',
        }}
        animate={{
          x: ['8%', '-8%', '8%'],
          y: ['3%', '-3%', '3%'],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Ribbon 3 — Pale cyan liquid light */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 120% at 50% 60%, rgba(224, 255, 255, 0.3) 0%, transparent 55%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: ['-5%', '5%', '-5%'],
          y: ['8%', '-8%', '8%'],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Ribbon 4 — Periwinkle gentle wave */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 110% at 80% 70%, rgba(204, 204, 255, 0.25) 0%, transparent 50%)',
          filter: 'blur(65px)',
        }}
        animate={{
          x: ['6%', '-6%', '6%'],
          y: ['-6%', '6%', '-6%'],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Ribbon 5 — White luminous glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 110% 90% at 30% 80%, rgba(255, 255, 255, 0.4) 0%, transparent 50%)',
          filter: 'blur(75px)',
        }}
        animate={{
          x: ['-7%', '7%', '-7%'],
          y: ['-4%', '4%', '-4%'],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle iridescent sheen layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 40% 30%, rgba(173, 216, 230, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 60% 70%, rgba(230, 230, 250, 0.12) 0%, transparent 40%)
          `,
          filter: 'blur(50px)',
          mixBlendMode: 'screen',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Gentle inner glow — adds depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
        }}
      />

      {/* Soft vignette for depth — very subtle */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 90% at center, transparent 40%, rgba(240, 249, 255, 0.3) 100%)',
        }}
      />

      {/* Large soft bloom top-right */}
      <motion.div
        className="absolute w-96 h-96 rounded-full -top-20 -right-20"
        style={{
          background: 'radial-gradient(circle, rgba(135, 206, 235, 0.2), transparent 60%)',
          filter: 'blur(100px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Large soft bloom bottom-left */}
      <motion.div
        className="absolute w-80 h-80 rounded-full -bottom-20 -left-20"
        style={{
          background: 'radial-gradient(circle, rgba(176, 224, 230, 0.18), transparent 60%)',
          filter: 'blur(90px)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle flowing particles for liquid light effect */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${6 + (i % 4) * 2}px`,
            height: `${6 + (i % 4) * 2}px`,
            background: 'radial-gradient(circle, rgba(224, 242, 254, 0.7), rgba(186, 230, 253, 0.3))',
            filter: 'blur(3px)',
            top: `${15 + (i * 11)}%`,
            left: `${10 + (i * 9)}%`,
          }}
          animate={{
            y: [0, -50 - (i * 8), 0],
            x: [(i % 2 === 0 ? 30 : -30), (i % 2 === 0 ? -30 : 30), (i % 2 === 0 ? 30 : -30)],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 18 + (i * 2),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
        />
      ))}

      {/* 2D Clouds floating horizontally - Set 1 */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`cloud-${i}`}
          className="absolute flex items-center"
          style={{
            top: `${10 + (i * 12)}%`,
          }}
          animate={{
            x: ['-200px', 'calc(100vw + 200px)'],
          }}
          transition={{
            duration: 20 + (i * 4),
            repeat: Infinity,
            ease: 'linear',
            delay: i * 3,
          }}
        >
          {/* Main cloud body */}
          <div
            className="relative"
            style={{
              width: `${90 + (i % 3) * 35}px`,
              height: `${45 + (i % 3) * 18}px`,
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.85), rgba(240, 248, 255, 0.7))',
              borderRadius: '50%',
              filter: 'blur(1px)',
              opacity: 0.8,
            }}
          />
          {/* Cloud puffs - left */}
          <div
            className="absolute"
            style={{
              width: `${55 + (i % 3) * 20}px`,
              height: `${35 + (i % 3) * 15}px`,
              background: 'rgba(255, 255, 255, 0.75)',
              borderRadius: '50%',
              filter: 'blur(1px)',
              left: '-20%',
              top: '10%',
            }}
          />
          {/* Cloud puffs - right */}
          <div
            className="absolute"
            style={{
              width: `${50 + (i % 3) * 18}px`,
              height: `${30 + (i % 3) * 12}px`,
              background: 'rgba(245, 250, 255, 0.7)',
              borderRadius: '50%',
              filter: 'blur(1px)',
              right: '-15%',
              top: '15%',
            }}
          />
          {/* Top puff */}
          <div
            className="absolute"
            style={{
              width: `${40 + (i % 3) * 15}px`,
              height: `${30 + (i % 3) * 10}px`,
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '50%',
              filter: 'blur(1px)',
              left: '35%',
              top: '-30%',
            }}
          />
        </motion.div>
      ))}

      {/* 2D Clouds floating horizontally - Set 2 (opposite direction) */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`cloud-alt-${i}`}
          className="absolute flex items-center"
          style={{
            top: `${18 + (i * 14)}%`,
          }}
          animate={{
            x: ['calc(100vw + 200px)', '-200px'],
          }}
          transition={{
            duration: 25 + (i * 4),
            repeat: Infinity,
            ease: 'linear',
            delay: i * 3.5,
          }}
        >
          {/* Main cloud body */}
          <div
            className="relative"
            style={{
              width: `${85 + (i % 4) * 30}px`,
              height: `${42 + (i % 4) * 16}px`,
              background: 'linear-gradient(180deg, rgba(240, 248, 255, 0.8), rgba(224, 242, 254, 0.7))',
              borderRadius: '50%',
              filter: 'blur(1px)',
              opacity: 0.75,
            }}
          />
          {/* Cloud puffs - left */}
          <div
            className="absolute"
            style={{
              width: `${50 + (i % 4) * 18}px`,
              height: `${32 + (i % 4) * 12}px`,
              background: 'rgba(240, 248, 255, 0.7)',
              borderRadius: '50%',
              filter: 'blur(1px)',
              left: '-18%',
              top: '12%',
            }}
          />
          {/* Cloud puffs - right */}
          <div
            className="absolute"
            style={{
              width: `${48 + (i % 4) * 16}px`,
              height: `${28 + (i % 4) * 10}px`,
              background: 'rgba(255, 255, 255, 0.65)',
              borderRadius: '50%',
              filter: 'blur(1px)',
              right: '-12%',
              top: '18%',
            }}
          />
          {/* Top puff */}
          <div
            className="absolute"
            style={{
              width: `${38 + (i % 4) * 14}px`,
              height: `${28 + (i % 4) * 9}px`,
              background: 'rgba(245, 250, 255, 0.75)',
              borderRadius: '50%',
              filter: 'blur(1px)',
              left: '40%',
              top: '-28%',
            }}
          />
        </motion.div>
      ))}

      {/* Additional upper clouds - Set 3 (higher layer, left to right) */}
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={`cloud-upper-${i}`}
          className="absolute flex items-center"
          style={{
            top: `${5 + (i * 10)}%`,
          }}
          animate={{
            x: ['-180px', 'calc(100vw + 180px)'],
          }}
          transition={{
            duration: 22 + (i * 3.5),
            repeat: Infinity,
            ease: 'linear',
            delay: i * 2.8,
          }}
        >
          {/* Main cloud body */}
          <div
            className="relative"
            style={{
              width: `${75 + (i % 3) * 28}px`,
              height: `${38 + (i % 3) * 14}px`,
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(248, 252, 255, 0.75))',
              borderRadius: '50%',
              filter: 'blur(0.8px)',
              opacity: 0.85,
            }}
          />
          {/* Cloud puffs - left */}
          <div
            className="absolute"
            style={{
              width: `${48 + (i % 3) * 16}px`,
              height: `${30 + (i % 3) * 12}px`,
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '50%',
              filter: 'blur(0.8px)',
              left: '-20%',
              top: '8%',
            }}
          />
          {/* Cloud puffs - right */}
          <div
            className="absolute"
            style={{
              width: `${45 + (i % 3) * 14}px`,
              height: `${28 + (i % 3) * 10}px`,
              background: 'rgba(252, 254, 255, 0.75)',
              borderRadius: '50%',
              filter: 'blur(0.8px)',
              right: '-16%',
              top: '12%',
            }}
          />
          {/* Top puff */}
          <div
            className="absolute"
            style={{
              width: `${36 + (i % 3) * 12}px`,
              height: `${26 + (i % 3) * 8}px`,
              background: 'rgba(255, 255, 255, 0.82)',
              borderRadius: '50%',
              filter: 'blur(0.8px)',
              left: '38%',
              top: '-32%',
            }}
          />
        </motion.div>
      ))}

      {/* Additional upper clouds - Set 4 (higher layer, right to left) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`cloud-upper-alt-${i}`}
          className="absolute flex items-center"
          style={{
            top: `${8 + (i * 11)}%`,
          }}
          animate={{
            x: ['calc(100vw + 180px)', '-180px'],
          }}
          transition={{
            duration: 28 + (i * 3.8),
            repeat: Infinity,
            ease: 'linear',
            delay: i * 3.2,
          }}
        >
          {/* Main cloud body */}
          <div
            className="relative"
            style={{
              width: `${70 + (i % 4) * 26}px`,
              height: `${36 + (i % 4) * 13}px`,
              background: 'linear-gradient(180deg, rgba(250, 253, 255, 0.88), rgba(235, 245, 255, 0.72))',
              borderRadius: '50%',
              filter: 'blur(0.8px)',
              opacity: 0.8,
            }}
          />
          {/* Cloud puffs - left */}
          <div
            className="absolute"
            style={{
              width: `${46 + (i % 4) * 15}px`,
              height: `${28 + (i % 4) * 11}px`,
              background: 'rgba(248, 252, 255, 0.78)',
              borderRadius: '50%',
              filter: 'blur(0.8px)',
              left: '-17%',
              top: '10%',
            }}
          />
          {/* Cloud puffs - right */}
          <div
            className="absolute"
            style={{
              width: `${44 + (i % 4) * 13}px`,
              height: `${26 + (i % 4) * 9}px`,
              background: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '50%',
              filter: 'blur(0.8px)',
              right: '-14%',
              top: '14%',
            }}
          />
          {/* Top puff */}
          <div
            className="absolute"
            style={{
              width: `${34 + (i % 4) * 11}px`,
              height: `${24 + (i % 4) * 7}px`,
              background: 'rgba(250, 253, 255, 0.76)',
              borderRadius: '50%',
              filter: 'blur(0.8px)',
              left: '42%',
              top: '-30%',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
