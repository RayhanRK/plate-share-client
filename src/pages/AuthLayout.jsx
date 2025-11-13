import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import fsBG from '../assets/foodShareIllustration.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';

const AuthLayout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: `url(${fsBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* transparent overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div data-aos="fade-up" data-aos-duration="2000" className="relative z-10">
        <Outlet />
      </div>

      <Toaster />
    </div>
  );
};

export default AuthLayout;
