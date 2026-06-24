import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Mail, Check, KeyRound } from 'lucide-react';
import logoImage from '../../imports/Gemini_Generated_Image_vqp36vvqp36vvqp3__1_-removebg-preview.png';

export function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div
      className="min-h-screen flex flex-col px-7 pt-6 pb-8"
      style={{ background: 'radial-gradient(120% 80% at 50% 0%, #eef4ff 0%, #ffffff 55%)' }}
    >
      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <button
          onClick={() => navigate('/login')}
          className="w-10 h-10 -ml-1 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Back"
        >
          <ArrowLeft size={20} />
        </button>
        <img src={logoImage} alt="Eutopia ID" className="h-8 w-auto" />
        <span
          className="text-[11px] tracking-[0.25em] text-slate-400 uppercase"
          style={{ fontFamily: 'Space Grotesk, monospace' }}
        >
          Recovery
        </span>
      </motion.div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
        className="mt-12"
      >
        <div className="flex items-center gap-2 mb-3">
          <span
            className="w-5 h-5 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg,#0a1f5c,#1d4ed8)',
              boxShadow: '0 4px 12px rgba(13,35,110,0.35)',
            }}
          >
            <KeyRound size={11} strokeWidth={2.5} className="text-white" />
          </span>
          <p
            className="text-[12px] tracking-[0.35em] text-blue-700 uppercase"
            style={{ fontFamily: 'Space Grotesk, monospace' }}
          >
            Forgot password
          </p>
        </div>
        <h1
          className="leading-[0.95] tracking-tight text-slate-900"
          style={{ fontFamily: 'Outfit, sans-serif', fontSize: '44px', fontWeight: 600 }}
        >
          Let's get you
          <br />
          <span className="italic font-light text-[#0a338d]">back in.</span>
        </h1>
        <p
          className="mt-5 text-[14px] leading-relaxed text-slate-500 max-w-sm"
          style={{ fontFamily: 'Space Grotesk, monospace' }}
        >
          Enter the email tied to your Eutopia ID. We'll send a secure link to reset your password.
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!sent ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
            className="mt-10 flex-1 flex flex-col"
          >
            <div className="mb-3">
              <label
                htmlFor="reset-email"
                className="block text-[11px] tracking-[0.3em] text-slate-400 uppercase mb-3"
                style={{ fontFamily: 'Space Grotesk, monospace' }}
              >
                Email
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <Mail size={16} strokeWidth={2} />
                </span>
                <input
                  id="reset-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-white border-[1.5px] border-slate-200 focus:border-[#0a338d] focus:ring-4 focus:ring-blue-100 focus:outline-none rounded-xl pl-11 pr-4 py-3.5 text-[17px] text-slate-900 placeholder:text-slate-300 transition-all shadow-sm"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                />
              </div>
            </div>

            {/* Reassurance row */}
            <div
              className="mt-4 flex items-start gap-3 rounded-2xl px-4 py-3.5 bg-white/60 backdrop-blur-sm"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(13,35,110,0.08)' }}
            >
              <span
                className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                style={{ background: '#eef4ff' }}
              >
                <Check size={12} strokeWidth={3} className="text-[#0a338d]" />
              </span>
              <p
                className="text-[12px] leading-relaxed text-slate-500"
                style={{ fontFamily: 'Space Grotesk, monospace' }}
              >
                Reset links expire in 15 minutes and can only be used once. Your medical records remain encrypted throughout.
              </p>
            </div>

            <div className="flex-1" />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={!email}
              className="group w-full h-16 rounded-2xl text-white flex items-center justify-between px-7 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-8"
              style={{
                fontFamily: 'Outfit, sans-serif',
                background: 'linear-gradient(135deg,#0a1f5c 0%,#1d4ed8 100%)',
                boxShadow: '0 18px 40px -18px rgba(13, 35, 110, 0.55)',
              }}
            >
              <span className="text-[16px] tracking-[0.18em] font-semibold">SEND RESET LINK</span>
              <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight size={18} strokeWidth={2.5} />
              </span>
            </motion.button>

            <div
              className="text-center mt-6"
              style={{ fontFamily: 'Space Grotesk, monospace' }}
            >
              <span className="text-[13px] text-slate-400">Remembered it? </span>
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-[13px] text-[#0a338d] font-semibold tracking-wide hover:underline"
              >
                Sign in →
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-10 flex-1 flex flex-col"
          >
            <div
              className="relative rounded-3xl p-7 bg-white overflow-hidden"
              style={{
                boxShadow: '0 24px 48px -28px rgba(13,35,110,0.45), inset 0 0 0 1px rgba(13,35,110,0.08)',
              }}
            >
              {/* Corner brackets */}
              <span className="pointer-events-none absolute top-3 left-3 w-3.5 h-3.5 border-t-[1.5px] border-l-[1.5px] rounded-tl-md border-[#0a338d]/40" />
              <span className="pointer-events-none absolute top-3 right-3 w-3.5 h-3.5 border-t-[1.5px] border-r-[1.5px] rounded-tr-md border-[#0a338d]/40" />
              <span className="pointer-events-none absolute bottom-3 left-3 w-3.5 h-3.5 border-b-[1.5px] border-l-[1.5px] rounded-bl-md border-[#0a338d]/40" />
              <span className="pointer-events-none absolute bottom-3 right-3 w-3.5 h-3.5 border-b-[1.5px] border-r-[1.5px] rounded-br-md border-[#0a338d]/40" />

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.1 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: 'linear-gradient(135deg,#0a1f5c,#1d4ed8)',
                  boxShadow: '0 12px 28px -10px rgba(13,35,110,0.55), inset 0 0 0 1px rgba(255,255,255,0.18)',
                }}
              >
                <Mail size={22} className="text-white" strokeWidth={2} />
              </motion.div>

              <p
                className="text-[12px] tracking-[0.35em] text-blue-700 uppercase mb-2"
                style={{ fontFamily: 'Space Grotesk, monospace' }}
              >
                Check your inbox
              </p>
              <h2
                className="leading-tight text-slate-900"
                style={{ fontFamily: 'Outfit, sans-serif', fontSize: '26px', fontWeight: 600 }}
              >
                Link sent to
                <br />
                <span className="italic font-light text-[#0a338d]">{email}</span>
              </h2>
              <p
                className="mt-4 text-[13px] leading-relaxed text-slate-500"
                style={{ fontFamily: 'Space Grotesk, monospace' }}
              >
                Didn't receive it within a minute? Check your spam folder or request a new link.
              </p>

              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-5 text-[12px] tracking-[0.2em] text-[#0a338d] uppercase font-semibold hover:underline"
                style={{ fontFamily: 'Space Grotesk, monospace' }}
              >
                Resend link →
              </button>
            </div>

            <div className="flex-1" />

            <motion.button
              onClick={() => navigate('/login')}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group w-full h-16 rounded-2xl text-white flex items-center justify-between px-7 transition-shadow mt-8"
              style={{
                fontFamily: 'Outfit, sans-serif',
                background: 'linear-gradient(135deg,#0a1f5c 0%,#1d4ed8 100%)',
                boxShadow: '0 18px 40px -18px rgba(13, 35, 110, 0.55)',
              }}
            >
              <span className="text-[16px] tracking-[0.18em] font-semibold">BACK TO SIGN IN</span>
              <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight size={18} strokeWidth={2.5} />
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
