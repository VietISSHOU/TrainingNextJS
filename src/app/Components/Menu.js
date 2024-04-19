"use client";
import React, { useState } from "react";
import styles from "./Menu.module.css";

const MenuItem = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <span className={styles.menu_icon} onClick={toggleMenu}>
        <img
          src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png"
          width={"100%"}
          height={"100%"}
        />
      </span>
      {isMenuOpen && (
        <div className={styles.menu_wrapper}>
          <div className={styles.menu_header}>
            <button
              onClick={closeMenu}
              style={{ backgroundColor: "transparent", color: "gray" }}
            >
              ✕
            </button>
            <h2 style={{ marginRight: "1000px" }}>Menu</h2>
          </div>
          <div className={styles.menu}>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Search</a>
            <a href="/services">Pricing</a>
            <a href="/contact">Contact</a>
            <a href="/contact">Find an Expert</a>
            <a href="/contact">Terms of use</a>
            <a href="/contact">User Manual</a>
            <hr />
            <a href="/contact">Account Register</a>
            <a href="/contact">Login</a>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItem;
