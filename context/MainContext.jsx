"use client";
import { createContext, useState } from "react";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <MainContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </MainContext.Provider>
  );
};
export default MainProvider;
