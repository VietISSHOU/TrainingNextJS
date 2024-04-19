"use client";
import { useTranslation } from "react-i18next";
import styles from "./../Screen/Home/styles.module.css";

export default function Translation() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className={styles.flag_country}>
        <input id="vi" type="radio" value="vi" name="language" onClick={() => {changeLanguage('vi')}} />
        <img
          src="https://www.vjp-connect.com/_next/image?url=%2Fimages%2Flogo2.png&w=64&q=75"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.flag_country}>
        <input id="vi" type="radio" value="ja" name="language" onClick={() => {changeLanguage('ja')}} />
        <img
          src="https://www.vjp-connect.com/_next/image?url=%2Fimages%2Flogo4.png&w=64&q=75"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.flag_country}>
        <input id="vi" type="radio" value="en" name="language" onClick={() => {changeLanguage('en')}} />
        <img
          src="https://www.vjp-connect.com/_next/image?url=%2Fimages%2Flogo3.png&w=64&q=75"
          width={50}
          height={50}
        />
      </div>
    </>
  );
}
