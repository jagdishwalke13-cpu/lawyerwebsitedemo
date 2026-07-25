import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change for smooth user experience
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content page-transition" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
