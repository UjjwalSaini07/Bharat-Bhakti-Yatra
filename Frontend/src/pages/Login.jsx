import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, Loader } from "lucide-react";
import { useAuthStore } from "../store/authStore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { login, isLoading, error } = useAuthStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (err) {
      toast.error(err.message || "Failed to log in. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-orange-500 to-green-600 relative overflow-hidden">
      <ToastContainer />
      <div className="w-full max-w-md flex items-start mb-3">
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
          Welcome Back
        </h1>
        <p className="text-white/80 text-center mb-6 text-sm">
          Continue your divine journey of devotion and unity ✨
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
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
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute inset-y-0 right-4 flex items-center text-gray-800 hover:text-gray-600 focus:outline-none mt-5"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#ff7200] hover:bg-[#ff8c1a] text-white font-semibold py-3 rounded-lg shadow-xl transition flex items-center justify-center gap-2"
          >
            {isLoading && <Loader className="animate-spin" size={20} />}
            Login
          </motion.button>

          <div className="flex justify-end mt-1">
            <Link to="/forgot-password" className="text-white/80 text-sm hover:underline">
              Forgot password?
            </Link>
          </div>
        </form>

        <p className="text-center text-white/90 text-sm mt-5">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-white font-medium underline underline-offset-2">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
