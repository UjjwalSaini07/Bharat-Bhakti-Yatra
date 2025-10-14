import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthStore } from "../../store/authStore";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isResendVisible, setIsResendVisible] = useState(false);

  const { isLoading, forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      setIsSubmitted(true);
      toast.success("If an account exists, a reset link has been sent!");
      setTimeout(() => setIsResendVisible(true), 10000);
    } catch (error) {
      toast.error(error.message || "Error sending reset link.");
    }
  };

  const handleResend = async () => {
    try {
      await forgotPassword(email);
      toast.info("A new reset link has been sent.");
    } catch (error) {
      toast.error(error.message || "Error resending reset link.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-orange-500 to-green-600 relative overflow-hidden">
      <ToastContainer />

      <div className="w-full max-w-md flex items-start mb-3">
        <Link
          to="/login"
          className="flex items-center gap-2 text-white font-medium hover:underline transition group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition" size={18} />
          Back to Login
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/20 border border-white/30 backdrop-blur-2xl shadow-xl rounded-3xl p-6 sm:p-8 relative overflow-hidden"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Forgot Password
        </h2>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <p className="text-white/80 mb-4 text-center text-sm">
              Enter your email, and we'll send a link to reset your password.
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/80 border border-transparent focus:border-[#ff7200] p-3 rounded-lg outline-none transition focus:ring-2 focus:ring-[#ff7200]"
              />
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" size={20} />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#ff7200] hover:bg-[#ff8c1a] text-white font-semibold py-3 rounded-lg shadow-xl transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? <Loader className="animate-spin" size={20} /> : "Send Reset Link"}
            </motion.button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-16 h-16 bg-[#ff7200] rounded-full flex items-center justify-center mx-auto"
            >
              <Mail className="h-8 w-8 text-white" />
            </motion.div>
            <p className="text-white/80 text-sm">
              If an account exists for <span className="font-bold">{email}</span>, you will receive a password reset link shortly.
            </p>
            {isResendVisible && (
              <button
                onClick={handleResend}
                className="text-sm text-white/90 hover:underline focus:outline-none mt-2"
              >
                Resend Email
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
