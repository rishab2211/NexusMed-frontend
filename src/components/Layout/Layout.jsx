import React, { Children } from "react";
import { useState } from "react";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { useEffect } from "react";
import { MainPart } from "./MainPart";
import { Content } from "./Content";
import { CardSection } from "../Dashboard/CardSection";
import { BigCardSection } from "../Dashboard/BigCardSection";
function Layout({children}) {
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
        <Content className="" >
            <main>{children}</main>
        </Content>
      </MainPart>
    </div>
  );
}

export default Layout;
