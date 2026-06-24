import { useState } from 'react';
import { loginUser } from '../../services/authService';
import { getUserBracelet } from '../../services/braceletService';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';
import logoImage from '../../imports/Gemini_Generated_Image_vqp36vvqp36vvqp3__1_-removebg-preview.png';

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  setError('');
  setLoading(true);

  try {

  const response =
    await loginUser(
      email,
      password
    );

  if (response.success) {

    localStorage.setItem(
      "token",
      response.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(
        response.user
      )
    );

    try {

      const braceletResponse =
        await getUserBracelet(
          response.user.id
        );

      if (
        braceletResponse?.success
      ) {

        localStorage.setItem(
          "bracelet_uid",
          braceletResponse.bracelet_uid
        );

      }

    } catch (error) {

      console.log(
        "No bracelet assigned yet"
      );

    }

    navigate("/scan");

  }

} catch (err: any) {

  setError(
    err?.response?.data?.error ||
    "Login failed"
  );

} finally {
    setLoading(false);
  }
};

  return (
    <div
      className="min-h-full flex-1 flex flex-col px-7 pt-10 pb-8"
      style={{ background: 'radial-gradient(120% 80% at 50% 0%, #eef4ff 0%, #ffffff 55%)' }}
    >
      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <img src={logoImage} alt="Eutopia ID" className="h-9 w-auto" />
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 border border-slate-200/70"
          style={{ fontFamily: 'Space Grotesk, monospace' }}
        >
          <ShieldCheck size={12} className="text-[#87CEEB]" strokeWidth={2.5} />
          <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase">Secure</span>
        </div>
      </motion.div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
        className="mt-14"
      >
        <p
          className="text-[12px] tracking-[0.35em] uppercase mb-4 text-[#5d6ea8]"
          style={{ fontFamily: 'Space Grotesk, monospace' }}
        >
          Welcome back
        </p>
        <h1
          className="leading-[0.95] tracking-tight text-slate-900"
          style={{ fontFamily: 'Outfit, sans-serif', fontSize: '46px', fontWeight: 600 }}
        >
          Sign in to
          <br />
          <span className="italic font-light text-[#87CEEB]">your network.</span>
        </h1>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        className="mt-12 flex-1 flex flex-col"
      >
        {/* Email */}
        <div className="mb-7">
          <label
            htmlFor="email"
            className="block text-[11px] tracking-[0.3em] text-slate-400 uppercase mb-3"
            style={{ fontFamily: 'Space Grotesk, monospace' }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full bg-white border-[1.5px] border-slate-200 focus:border-[#87CEEB] focus:ring-4 focus:ring-blue-100 focus:outline-none rounded-xl px-4 py-3.5 text-[17px] text-black placeholder:text-slate-300 transition-all shadow-sm"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-3">
            <label
              htmlFor="password"
              className="text-[11px] tracking-[0.3em] text-slate-400 uppercase"
              style={{ fontFamily: 'Space Grotesk, monospace' }}
            >
              Password
            </label>
            <button
              type="button"
              onClick={() => navigate('/forgot-password')}
              className="text-[11px] tracking-[0.2em] text-[#87CEEB] uppercase hover:underline"
              style={{ fontFamily: 'Space Grotesk, monospace' }}
            >
              Forgot?
            </button>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-white border-[1.5px] border-slate-200 focus:border-[#87CEEB] focus:ring-4 focus:ring-blue-100 focus:outline-none rounded-xl px-4 py-3.5 pr-12 text-[17px] text-black placeholder:text-slate-300 transition-all shadow-sm"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {error && (
            <div className="text-red-500 text-sm mt-3">
              {error}
            </div>
          )}
        </div>

        {/* CTA */}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="group w-full h-16 rounded-2xl text-white flex items-center justify-between px-7 transition-shadow mt-10"
          style={{
            fontFamily: 'Outfit, sans-serif',
            background: 'linear-gradient(135deg, #87CEEB 0%, #5BA3D0 100%)',
            boxShadow: '0 18px 40px -18px rgba(135, 206, 235, 0.5)',
          }}
        >
          <span className="text-[16px] tracking-[0.18em] font-semibold">
            {loading ? 'SIGNING IN...' : 'SIGN IN'}
          </span>
          <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:translate-x-1">
            <ArrowRight size={18} strokeWidth={2.5} />
          </span>
        </motion.button>

        {/* Footer link */}
        <div
          className="text-center mt-6"
          style={{ fontFamily: 'Space Grotesk, monospace' }}
        >
          <span className="text-[13px] text-slate-400">New to Eutopia? </span>
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="text-[13px] text-[#87CEEB] font-semibold tracking-wide hover:underline"
          >
            Create account →
          </button>
        </div>
      </motion.form>
    </div>
  );
}
