import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { MainPart } from "./MainPart";
import { Content } from "./Content";
import { Outlet } from "react-router-dom"; // Import Outlet to render nested routes

function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSideBarOpen, setSideOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSideBar = () => {
    setSideOpen(!isSideBarOpen);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleSideBar={toggleSideBar}
      />
      <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />

      <MainPart>
        <Content>
          {/* This is where the nested route content will be rendered */}
          <Outlet />
        </Content>
      </MainPart>
    </div>
  );
}

export default Layout;
