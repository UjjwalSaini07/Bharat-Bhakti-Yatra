import React, { useEffect, useState } from "react";
import "./index.css";
import "./styles/App.scss";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/common/Header";
import Layout from "./components/common/Layout";
import CommingSoon from "./components/common/commingSoon";

import Home from "./pages/home/Home";
import Userprofile from "./components/users/userProfile";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import EmailVerificationPage from "./pages/auth/EmailVerificationPage";
import Pujas from "./components/pujas/Pujas";
import Blog from "./pages/blogs/blog";
import TermsAndConditions from "./components/legals/TermsAndConditions";
import PrivacyPolicy from "./components/legals/PrivacyPolicy";
import FaqPage from "./components/faq/Faq";

import { useAuthStore } from "./store/authStore";
import { auth } from "./components/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const useUnifiedAuth = () => {
  const { isAuthenticated, Authuser, checkAuth } = useAuthStore();
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user.reload();
        setFirebaseUser({
          uid: user.uid,
          email: user.email,
          isVerified: user.emailVerified,
        });
      } else {
        setFirebaseUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [checkAuth]);

  return { loading, firebaseUser, isAuthenticated, Authuser };
};

const ProtectedRoute = ({ children }) => {
  const { loading, firebaseUser, isAuthenticated, Authuser } = useUnifiedAuth();
  
  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        Checking Authentication...
      </div>
    );

  const hasFirebaseAccess = firebaseUser && firebaseUser.isVerified;
  const hasBackendAccess = isAuthenticated && Authuser && Authuser.isVerified;
  
  if (!hasFirebaseAccess && !hasBackendAccess) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
  const { loading, firebaseUser, isAuthenticated, Authuser } = useUnifiedAuth();
  
  if (loading)
    return (
      <div
        className="flex flex-col items-center justify-center h-screen w-screen"
        style={{
          background:
            "linear-gradient(135deg, #9f1239 0%, #f97316 50%, #14532d 100%)",
        }}
      >
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-6"></div>
        <div className="text-white text-2xl font-bold drop-shadow-lg">
          Checking Authentication...
        </div>
      </div>
    );

  const hasFirebaseAccess = firebaseUser && firebaseUser.isVerified;
  const hasBackendAccess = isAuthenticated && Authuser && Authuser.isVerified;
  
  if (hasFirebaseAccess || hasBackendAccess) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Protected Routes */}
            <Route path="/profile" element={<ProtectedRoute><Userprofile /></ProtectedRoute>} />
            
            {/* Public Routes */}
            <Route path="/signup" element={<RedirectAuthenticatedUser><Signup /></RedirectAuthenticatedUser>} />
            <Route path="/login" element={<RedirectAuthenticatedUser><Login /></RedirectAuthenticatedUser>} />
            <Route path="/verify-email" element={<RedirectAuthenticatedUser><EmailVerificationPage /></RedirectAuthenticatedUser>} />
            <Route path="/forgot-password" element={<RedirectAuthenticatedUser><ForgotPasswordPage /></RedirectAuthenticatedUser>} />
            <Route path="/reset-password/:token" element={<RedirectAuthenticatedUser><ResetPasswordPage /></RedirectAuthenticatedUser>} />
            
            {/* Open Routes */}
            <Route path="/pujas" element={<Pujas />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            
            {/* Coming Soon */}
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
