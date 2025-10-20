import React, { useEffect } from "react";
import "./index.css";
import "./styles/App.scss";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/common/Header";
import Layout from "./components/common/Layout";
import CommingSoon from "./components/common/commingSoon";
import { useAuthStore } from "./store/authStore";
import Home from "./pages/home/Home";
import Userprofile from "./components/users/userProfile";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import EmailVerificationPage from "./pages/auth/EmailVerificationPage";
import Pujas from './components/pujas/Pujas';
import Blog from "./pages/blogs/blog";
import TermsAndConditions from './components/legals/TermsAndConditions'
import PrivacyPolicy from './components/legals/PrivacyPolicy';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!user?.isVerified) return <Navigate to="/verify-email" replace />;

  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.isVerified) return <Navigate to="/" replace />;
  return children;
};

const App = () => {
  const { checkAuth } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>

            <Route path="/" element={<Home />} />

            {/* ✅ Protected Routes */}
            <Route path="/profile" element={<ProtectedRoute><Userprofile /></ProtectedRoute>} />

            {/* ✅ Public but Redirect if logged in */}
            <Route path="/signup" element={<RedirectAuthenticatedUser><Signup /></RedirectAuthenticatedUser>} />
            <Route path="/login" element={<RedirectAuthenticatedUser><Login /></RedirectAuthenticatedUser>} />
            <Route path="/verify-email" element={<RedirectAuthenticatedUser><EmailVerificationPage /></RedirectAuthenticatedUser>} />
            <Route path="/forgot-password" element={<RedirectAuthenticatedUser><ForgotPasswordPage /></RedirectAuthenticatedUser>} />
            <Route path="/reset-password/:token" element={<RedirectAuthenticatedUser><ResetPasswordPage /></RedirectAuthenticatedUser>} />

            {/* Open Routes */}
            <Route path="/pujas" element={<Pujas />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            
            {/* Comming Soon Routes */}
            <Route path="/bhagwat-geeta" element={<CommingSoon />} />
            <Route path="/bhaktigeets" element={<CommingSoon />} />
            <Route path="/chantings" element={<CommingSoon />} />
            <Route path="/chronicles" element={<CommingSoon />} />
            <Route path="/kundli" element={<CommingSoon />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
