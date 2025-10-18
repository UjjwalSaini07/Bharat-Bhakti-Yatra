import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "./Scroll-To-Top";

function Layout() {
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
