import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarMain } from "../components/Navbar/navbar";
import { Footer } from "../components/Footer/footer";

const RootView = () => {
  return (
    <>
      <NavbarMain />
      <main className="h-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootView;
