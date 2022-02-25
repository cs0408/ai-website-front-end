import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

// Menu reused in two places
const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#whpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  // This state for Mobile devices ->
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      {/* logo and links */}
      <div className="gpt3__navbar-links">
        {/* logo */}
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        {/* links */}
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      {/* Signup and Signin */}
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      {/* This <div> used for mobile devices -> when screen size == to mobile devices, then this toggle run */}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container" scale-up-center>
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              {/* Signup and Signin */}
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
