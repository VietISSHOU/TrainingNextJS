"use client";
import React, { useState } from "react";
import styles from "./Menu.module.css";

import "@/app/i18n/i18n";
import { useTranslation } from "react-i18next";

const MenuItem = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { t } = useTranslation();

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
            <a href="/">{t("Home")}</a>
            <a href="/about">{t("About Us")}</a>
            <a href="/services">{t("Search")}</a>
            <a href="/services">{t("Pricing")}</a>
            <a href="/contact">{t("Contact")}</a>
            <a href="/contact">{t("Find an Expert")}</a>
            <a href="/contact">{t("Terms of use")}</a>
            <a href="/contact">{t("User Manual")}</a>
            <hr />
            <a href="/contact">{t("Account Register")}</a>
            <a href="/contact">{t("Login")}</a>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItem;
