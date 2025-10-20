import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "./Scroll-To-Top";

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <main>
        <Outlet />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Layout;
