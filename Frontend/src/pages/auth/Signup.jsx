import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, Loader } from "lucide-react";
import PasswordStrengthMeter from "../../components/utils/PasswordStrengthMeter";
import { useAuthStore } from "../../store/authStore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { signup, error, isLoading } = useAuthStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData.email, formData.password, formData.fullName);
      toast.success("Account created successfully! Please verify your email.");
      navigate("/verify-email");
    } catch (err) {
      toast.error(err.message || "Failed to create account. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-orange-500 to-green-600 relative overflow-hidden">
      <ToastContainer />
      <div className="w-full max-w-md flex items-start mb-3 mt-16">
        <Link
          to="/"
          className="flex items-center gap-2 text-white font-medium hover:underline transition group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition" size={18} />
          Back
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/20 border border-white/30 backdrop-blur-2xl shadow-xl rounded-3xl p-6 sm:p-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 rounded-3xl border border-white/40 pointer-events-none"></div>

        <h1 className="text-3xl font-bold text-center text-white drop-shadow mb-2 tracking-wide">
          Create Account
        </h1>
        <p className="text-white/80 text-center mb-6 text-sm">
          Join the divine journey of devotion and unity ✨
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-white font-medium mb-1 text-sm">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full bg-white/80 border border-transparent focus:border-[#ff7200] p-3 rounded-lg outline-none transition focus:ring-2 focus:ring-[#ff7200]"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/80 border border-transparent focus:border-[#ff7200] p-3 rounded-lg outline-none transition focus:ring-2 focus:ring-[#ff7200]"
            />
          </div>

          <div className="relative">
            <label className="block text-white font-medium mb-1 text-sm">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full bg-white/80 border border-transparent focus:border-[#ff7200] p-3 rounded-lg outline-none transition focus:ring-2 focus:ring-[#ff7200]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-4 mt-5 flex items-center text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <PasswordStrengthMeter password={formData.password} />

          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#ff7200] hover:bg-[#ff8c1a] text-white font-semibold py-3 rounded-lg shadow-xl transition flex items-center justify-center gap-2"
          >
            {isLoading && <Loader className="animate-spin" size={20} />}
            Sign Up
          </motion.button>
        </form>

        <p className="text-center text-white/90 text-sm mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-white font-medium underline underline-offset-2">
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
