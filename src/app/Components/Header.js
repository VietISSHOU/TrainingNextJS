"use client";
import Translation from "./Translation";
import MenuItem from "./Menu";
import styles from "../../app/Screen/Home/styles.module.css";

import "@/app/i18n/i18n";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className={styles.spin__container}>
      <div className={styles.translate_container}>
        <div className={styles.translate_left}></div>
        <div className={styles.translate_right}>
          <Translation />
        </div>
      </div>
      <div className={styles.Navbar_navbar__container}>
        <div className={styles.Navbar_logo}>
          <a href="/Screen/Home">
            <img
              src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogovjpc.8300dbca.png&w=384&q=75"
              width={"50%"}
              height={"100%"}
            />
          </a>
        </div>
        <div className={styles.Navbar_navbar__menu}>
          <div className={styles.Navbar_navbar__left_menu}>
            <a href="/">
              <button>
                {t("Account Register")}
                <br /> <span>{t("(FREE)")}</span>
              </button>
            </a>
            <MenuItem />
          </div>
        </div>
      </div>
    </div>
  );
}
