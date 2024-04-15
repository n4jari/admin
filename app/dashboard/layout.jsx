import React from "react";
import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import Navbar from "../ui/dashboard/navbar/Navbar";
import Footer from "../ui/dashboard/footer/Footer";

const layout = ({ children }) => {
  return (
    <div className="flex ">
      <div className="w-1/4 bg-soft p-5 min-h-screen  max-md:hidden">
        <Sidebar />
      </div>
      <div className="p-5 w-3/4 max-md:w-full">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
