import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4, WiDaySunny } from "react-icons/wi";
import "./style.css";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme") || "dark");
  
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); 
  }, [theme]);
  
  return (
    <button type="button" className="theme_toggler" onClick={themetoggle} aria-label="Toggle theme">
      {theme === "dark" ? <WiDaySunny /> : <WiMoonAltWaningCrescent4 />}
    </button>
  );
};

export default Themetoggle;
