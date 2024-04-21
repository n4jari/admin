"use client";
import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import Navbar from "../ui/dashboard/navbar/Navbar";
import Footer from "../ui/dashboard/footer/Footer";
import { MainContext } from "@/context/MainContext";
import { useContext } from "react";
import { MdClose } from "react-icons/md";

const layout = ({ children }) => {
  const { openMenu, setOpenMenu } = useContext(MainContext);
  return (
    <div className="flex">
      {!openMenu ? (
        <div className="w-1/5 bg-soft p-5 min-h-screen max-lg:w-1/4 max-md:hidden">
          <Sidebar />
        </div>
      ) : (
        <div className="hidden w-2/3 bg-soft p-5 min-h-screen  max-md:block fixed z-10">
          <p className="absolute right-5">
            <button onClick={() => setOpenMenu((prev) => !prev)}>
              <MdClose />
            </button>
          </p>
          <Sidebar />
        </div>
      )}

      <div className="p-5 w-4/5 max-lg:w-3/4 max-md:w-full">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
