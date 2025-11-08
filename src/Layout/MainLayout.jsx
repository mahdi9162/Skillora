import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet, useLocation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';

const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <ToastContainer />
      <Navbar></Navbar>
      <AnimatePresence mode='wait'>
        <div className="flex-1" key={location.pathname}>
          <Outlet></Outlet>
        </div>
      </AnimatePresence>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
