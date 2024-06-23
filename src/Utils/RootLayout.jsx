import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import Sidebar from "../Components/Home/Sidebar";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="border">
        <Sidebar />
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default RootLayout;
