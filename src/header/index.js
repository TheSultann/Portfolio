import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import { ReactComponent as SultanMark } from "../assets/images/S-logo.svg";

const Headermain = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const closeMenu = () => {
    if (isActive) {
      setActive(false);
      document.body.classList.remove("ovhidden");
    }
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="header__bar d-flex align-items-center justify-content-between">
          <Link className="brand_mark" to="/" onClick={closeMenu} aria-label={logotext}>
            <SultanMark className="brand_mark__icon" focusable="false" />
            <span className="brand_mark__word">{logotext}</span>
          </Link>

          <ul className="header__nav-links d-none d-md-flex">
            <li>
              <Link className="header__nav-link" to="/#home">
                Home
              </Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/#portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/#about">
                About
              </Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/#contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="header__actions d-flex align-items-center gap-2">
            <Themetoggle />
            <button
              className={`menu__button d-md-none ${isActive ? "is-active" : ""}`}
              onClick={handleToggle}
              aria-label="Toggle navigation"
            >
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>

        <div className={`site__navigation ${isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu">
            <ul className="the_menu">
              <li className="menu_item">
                <Link onClick={handleToggle} to="/#home">
                  Home
                </Link>
              </li>
              <li className="menu_item">
                <Link onClick={handleToggle} to="/#portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="menu_item">
                <Link onClick={handleToggle} to="/#about">
                  About
                </Link>
              </li>
              <li className="menu_item">
                <Link onClick={handleToggle} to="/#contact">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="menu_footer">
              <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={socialprofils.telegram} target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headermain;
