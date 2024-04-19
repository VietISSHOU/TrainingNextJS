"use client";
import { useTranslation } from "react-i18next";
import styles from "./../Screen/Home/styles.module.css";
import { useState } from "react";

export default function Translation() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("vi");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <>
      <div className={styles.flag_country}>
        <label htmlFor="vi">
          <img
            src="https://www.vjp-connect.com/_next/image?url=%2Fimages%2Flogo2.png&w=64&q=75"
            width={50}
            height={50}
            onClick={() => {changeLanguage('vi')}}
          />
          <input id="vi" type="radio" value="vi" name="language" style={{ display: 'none' }} />
          {selectedLanguage === "vi" && <div className={styles.tick}></div>}
        </label>
      </div>
      <div className={styles.flag_country}>
        <label htmlFor="ja">
          <img
            src="https://www.vjp-connect.com/_next/image?url=%2Fimages%2Flogo4.png&w=64&q=75"
            width={50}
            height={50}
            onClick={() => {changeLanguage('ja')}}
          />
          <input id="ja" type="radio" value="ja" name="language" style={{ display: 'none' }} />
          {selectedLanguage === "ja" && <div className={styles.tick}></div>}
        </label>
      </div>
      <div className={styles.flag_country}>
        <label htmlFor="en">
          <img
            src="https://www.vjp-connect.com/_next/image?url=%2Fimages%2Flogo3.png&w=64&q=75"
            width={50}
            height={50}
            onClick={() => {changeLanguage('en')}}
          />
          <input id="en" type="radio" value="en" name="language" style={{ display: 'none' }} />
          {selectedLanguage === "en" && <div className={styles.tick}></div>}
        </label>
      </div>
    </>
  );
}

