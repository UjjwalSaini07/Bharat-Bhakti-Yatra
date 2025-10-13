import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import { formatDate } from "../utils/date";
import { User, Calendar, LogOut, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-green-600 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-8 rounded-3xl backdrop-blur-md bg-white/10 shadow-2xl border border-white/20 flex flex-col gap-6"
      >
        <h2 className="text-4xl font-extrabold text-center bg-white text-transparent bg-clip-text">
          Welcome, {user.name.split(" ")[0]}!
        </h2>

        <motion.div
          className="p-6 rounded-2xl bg-white/10 border border-white/20 shadow-inner hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4 text-white">
            <User className="w-6 h-6" />
            <h3 className="text-2xl font-semibold">Profile Information</h3>
          </div>
          <p className="text-white/90"><span className="font-medium">Name:</span> {user.name}</p>
          <p className="text-white/90"><span className="font-medium">Email:</span> {user.email}</p>
          <p className="text-white/90"><span className="font-medium">Role:</span> {user.role || "User"}</p>
        </motion.div>

        <motion.div
          className="p-6 rounded-2xl bg-white/10 border border-white/20 shadow-inner hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4 text-white">
            <Calendar className="w-6 h-6" />
            <h3 className="text-2xl font-semibold">Account Activity</h3>
          </div>
          <p className="text-white/90"><span className="font-bold">Joined:</span> {new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
          <p className="text-white/90"><span className="font-bold">Last Login:</span> {formatDate(user.lastLogin)}</p>
          <p className="text-white/90"><span className="font-bold">Posts Created:</span> {user.posts || 0}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-green-600/90 hover:bg-green-500 text-white font-bold rounded-xl shadow-lg transition-all duration-200"
          >
            <Settings className="w-5 h-5" />
            Edit Profile
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-red-500/90 hover:bg-red-600 text-white font-bold rounded-xl shadow-lg transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UserProfile;
