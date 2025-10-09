import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-green-600 flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="w-20 h-20 border-4 border-t-4 border-t-[#ff7200] border-white/40 rounded-full shadow-xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default LoadingSpinner;
