import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <div >
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      
      <Toaster />
    </div>
  );
};

export default RootLayout;

