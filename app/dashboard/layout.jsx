import React from "react";
import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import Navbar from "../ui/dashboard/navbar/Navbar";
import Footer from "../ui/dashboard/footer/Footer";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1 bg-soft p-5">
        <Sidebar />
      </div>
      <div className="p-5" style={{ flex: "4" }}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
