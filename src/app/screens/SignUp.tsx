import { useState } from 'react';
import { registerUser } from '../../services/authService';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Eye, EyeOff, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import logoImage from '../../imports/Gemini_Generated_Image_vqp36vvqp36vvqp3__1_-removebg-preview.png';

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

function Field({ id, label, type = 'text', placeholder, value, onChange, children }: FieldProps) {
  return (
    <div className="mb-3.5">
      <label
        htmlFor={id}
        className="block text-[10px] tracking-[0.3em] text-slate-400 uppercase mb-1.5"
        style={{ fontFamily: 'Space Grotesk, monospace' }}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className="w-full bg-white border-[1.5px] border-slate-200 focus:border-[#87CEEB] focus:ring-4 focus:ring-blue-100 focus:outline-none rounded-xl px-4 py-2.5 pr-12 text-[15px] text-black placeholder:text-slate-300 transition-all shadow-sm"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        />
        {children}
      </div>
    </div>
  );
}

export function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  setError('');

  try {
    setLoading(true);

    const response =
      await registerUser({
        full_name:
          formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password:
          formData.password,
        role: 'user'
      });

    if (response.success) {
      navigate(
        '/onboarding/introduction'
      );
    }
  } catch (err: any) {
    setError(
      err?.response?.data?.error ||
        'Registration failed'
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      className="min-h-full flex-1 flex flex-col px-7 pt-6 pb-8"
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
          New
        </span>
      </motion.div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
        className="mt-5"
      >
        <p
          className="text-[11px] tracking-[0.35em] text-blue-700 uppercase mb-2"
          style={{ fontFamily: 'Space Grotesk, monospace' }}
        >
          Create your account
        </p>
        <h1
          className="leading-[0.95] tracking-tight text-slate-900"
          style={{ fontFamily: 'Outfit, sans-serif', fontSize: '32px', fontWeight: 600 }}
        >
          Join the
          <br />
          <span className="italic font-light text-[#87CEEB]">network.</span>
        </h1>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSignUp}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        className="mt-5"
      >
        <Field
          id="fullName"
          label="Full Name"
          placeholder="Ogunlana Tofunmi"
          value={formData.fullName}
          onChange={handleChange}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          placeholder="+234 ___ ___ ____"
          value={formData.phone}
          onChange={handleChange}
        />
        <Field
          id="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
        >
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </Field>

        {/* Terms */}
        <button
          type="button"
          onClick={() => setAgreed(!agreed)}
          className="flex items-start gap-3 mt-1 mb-4 text-left w-full"
        >
          <span
            className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-all ${
              agreed
                ? 'border-0'
                : 'border-[1.5px] border-slate-300 bg-white'
            }`}
            style={
              agreed
                ? {
                    background: 'linear-gradient(135deg, #87CEEB, #5BA3D0)',
                    boxShadow: '0 4px 12px rgba(135, 206, 235, 0.4)',
                  }
                : undefined
            }
          >
            {agreed && <Check size={13} strokeWidth={3} className="text-white" />}
          </span>
          <span
            className="text-[12px] leading-relaxed text-slate-500"
            style={{ fontFamily: 'Space Grotesk, monospace' }}
          >
            I agree to the <span className="text-[#87CEEB] font-semibold">Terms of Service</span> and{' '}
            <span className="text-[#87CEEB] font-semibold">Privacy Policy</span>.
          </span>
        </button>

        {error && (
          <div className="text-red-500 text-sm mb-3">
            {error}
          </div>
        )}

        {/* CTA */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          disabled={!agreed || loading}
          className="group w-full h-14 rounded-2xl text-white flex items-center justify-between px-6 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            fontFamily: 'Outfit, sans-serif',
            background: 'linear-gradient(135deg, #87CEEB 0%, #5BA3D0 100%)',
            boxShadow: '0 18px 40px -18px rgba(135, 206, 235, 0.5)',
          }}
        >
          <span className="text-[16px] tracking-[0.18em] font-semibold">
            {loading
              ? 'CREATING...'
              : 'CREATE ACCOUNT'}
          </span>
          <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:translate-x-1">
            <ArrowRight size={18} strokeWidth={2.5} />
          </span>
        </motion.button>

        <div
          className="text-center mt-3"
          style={{ fontFamily: 'Space Grotesk, monospace' }}
        >
          <span className="text-[13px] text-slate-400">Already a member? </span>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-[13px] text-[#87CEEB] font-semibold tracking-wide hover:underline"
          >
            Sign in →
          </button>
        </div>
      </motion.form>
    </div>
  );
}
