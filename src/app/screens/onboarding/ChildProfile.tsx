import { useState } from 'react';
import { useAppContext } from "../../../context/AppContext";
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Camera, ArrowLeft } from 'lucide-react';
import { DreamyBackground } from '../../components/DreamyBackground';

export function ChildProfile() {
  const navigate = useNavigate();
  const { child, setChild } = useAppContext();

  const [name, setName] = useState(
    child?.full_name || ''
  );

  const [selectedImage, setSelectedImage] =
    useState<string | null>(
      child?.photo || null
    );


  const handleNext = () => {
    setChild({
      ...child,
      full_name: name,
      photo: selectedImage,
    });

    navigate("/onboarding/medical-info");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

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
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 0.9, 0.3, 1] }}
        className="relative w-full max-w-sm rounded-[32px] px-8 py-10 flex flex-col items-center"
        style={{
          background: 'rgba(255,255,255,0.45)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.65)',
          boxShadow: '0 20px 50px rgba(120,150,190,0.25)',
        }}
      >
        {/* Back chevron */}
        <button
          onClick={() => navigate('/onboarding/introduction')}
          className="absolute top-5 left-5 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(154,167,185,0.2)' }}
          aria-label="Back"
        >
          <ArrowLeft size={16} style={{ color: '#2C3A56' }} strokeWidth={2.5} />
        </button>

        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[10px] tracking-[0.35em] uppercase mb-3"
          style={{ fontFamily: 'Space Grotesk, monospace', color: '#9AA7B9' }}
        >
          PROTECTION
        </motion.p>

        {/* Heading — navy serif */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center mb-2"
          style={{
            fontFamily: 'Space Grotesk, serif',
            fontSize: '30px',
            fontWeight: 600,
            lineHeight: 1.15,
            color: '#2C3A56',
          }}
        >
          Who are we
          <br />
          protecting?
        </motion.h1>

        {/* Helper text */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-[12px] leading-relaxed mb-8"
          style={{ fontFamily: 'Space Grotesk, monospace', color: '#42506A' }}
        >
          Please upload a recent photo of your child.
        </motion.p>

        {/* Photo upload — rounded frame */}
        <motion.label
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          htmlFor="photo-upload"
          className="cursor-pointer block mb-6"
        >
          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.985 }}
            className="relative w-44 h-44 rounded-[28px] overflow-hidden"
            style={{
              background: selectedImage
                ? `url(${selectedImage}) center/cover`
                : 'linear-gradient(180deg, #f0f4f9 0%, #e6eef8 100%)',
              boxShadow: '0 12px 28px rgba(120,150,190,0.3), inset 0 0 0 1px rgba(255,255,255,0.5)',
            }}
          >
            {!selectedImage && (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #7FB2E8, #5384CC)',
                    boxShadow: '0 8px 18px rgba(83,132,204,0.35)',
                  }}
                >
                  <Camera size={18} className="text-white" strokeWidth={2} />
                </div>
                <span
                  className="text-[11px] tracking-wide"
                  style={{ fontFamily: 'Outfit, sans-serif', color: '#42506A' }}
                >
                  Add Photo
                </span>
              </div>
            )}

            {/* Light scan-line animation on upload */}
            {selectedImage && (
              <motion.div
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: '100%', opacity: [0, 0.6, 0] }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-x-0 h-16 pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.6), transparent)',
                }}
              />
            )}
          </motion.div>
        </motion.label>
        <input
          id="photo-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />

        {/* Name input pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full mb-10"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ZARA"
            className="w-full h-12 rounded-full px-5 text-center border-0 focus:outline-none transition-all"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '15px',
              fontWeight: 500,
              color: '#2C3A56',
              background: 'rgba(255,255,255,0.7)',
              boxShadow: 'inset 0 0 0 1.5px rgba(120,150,190,0.2), 0 4px 12px rgba(120,150,190,0.15)',
            }}
          />
        </motion.div>

        {/* Baby blue pill NEXT button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          onClick={handleNext}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full h-14 rounded-full text-white"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            background: 'linear-gradient(135deg, #87CEEB 0%, #5BA3D0 100%)',
            boxShadow: '0 12px 30px rgba(135,206,235,0.4)',
          }}
        >
          NEXT
        </motion.button>

        {/* Carousel dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex items-center gap-2 mt-6"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-full transition-all"
              style={{
                width: i === 1 ? '8px' : '6px',
                height: i === 1 ? '8px' : '6px',
                background: i === 1 ? '#87CEEB' : 'rgba(154,167,185,0.4)',
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
