import React, { useEffect } from "react";
import Header from "./components/common/Header";
import "./index.css";
import { useAuthStore } from "./store/authStore";
import Home from "./pages/Home";
import Userprofile from "./components/users/userProfile";
import "./styles/App.scss";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import EmailVerificationPage from "./pages/auth/EmailVerificationPage";
import Pujas from './components/Pujas';

import { Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import BlogWrapper from "./components/blog/BlogWrapper";

const App = () => {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Userprofile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path="/pujas" element={<Pujas />} />
        <Route path="/blog" element={<BlogWrapper/>} />
      </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;

// Todo: Working Protected Routes
// import React, { useEffect } from "react";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import { Toaster } from "react-hot-toast";

// import Header from "./components/common/Header";
// import Home from "./pages/Home";
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
// import LoadingSpinner from "./components/utils/LoadingSpinner";

// import { useAuthStore } from "./store/authStore";
// import "./index.css";
// import "./styles/App.scss";

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated, user } = useAuthStore();

//   if (!isAuthenticated) return <Navigate to="/login" replace />;
//   if (!user?.isVerified) return <Navigate to="/verify-email" replace />;

//   return children;
// };

// const RedirectAuthenticatedUser = ({ children }) => {
//   const { isAuthenticated, user } = useAuthStore();

//   if (isAuthenticated && user?.isVerified) return <Navigate to="/" replace />;
//   return children;
// };

// const App = () => {
//   const { isCheckingAuth, checkAuth } = useAuthStore();
//   const location = useLocation();

//   useEffect(() => {
//     checkAuth();
//   }, [checkAuth]);

//   if (isCheckingAuth) return <LoadingSpinner />;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-500 to-green-600 flex flex-col relative overflow-hidden">
//       <Header />
//       <AnimatePresence mode="wait">
//         <Routes location={location} key={location.pathname}>
//           <Route path="/" element={ <Home /> } />
//           <Route path="/signup" element={ <RedirectAuthenticatedUser> <Signup /> </RedirectAuthenticatedUser> } />
//           <Route path="/login" element={ <RedirectAuthenticatedUser> <Login /> </RedirectAuthenticatedUser> } />
//           <Route path="/verify-email" element={<div className="text-center mt-10 text-lg">Verify your email to continue.</div>} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </AnimatePresence>
//       <Toaster position="top-right" />
//     </div>
//   );
// };

// export default App;