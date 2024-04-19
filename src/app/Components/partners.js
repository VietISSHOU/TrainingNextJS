"use client";
import { useState, useEffect } from "react";
import dummyData from "../../../data/dummy_data.json";
import styles from "../Screen/Home/styles.module.css";

export default function Partners({ data }) {
  const [partnerData, setPartnerData] = useState([]);
  useEffect(() => {
    if (data === "data") {
      setPartnerData(dummyData.data);
    } else {
      setPartnerData(dummyData.data2);
    }
  }, [data]);

  // Hàm này sẽ chia nội dung thành các đoạn và xuống dòng mỗi khi gặp dấu ';'
  const formatContent = (content) => {
    return content.split(";").map((item, index) => (
      <span key={index}>
        {item}
        <br />
      </span>
    ));
  };

  return (
    <div className={styles.company__wrapper}>
      {partnerData.map((partner) => (
        <div key={partner.id} className={styles.company__container}>
          <div className={styles.company__left}>
            <div>
              <div className={styles.company__left__image}>
                <img
                  src={partner.image}
                  alt={partner.name}
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className={styles.company__left__country}>
                <img src={partner.image_country1} width={64} height={64} />
                <img src={partner.image_country2} width={64} height={64} />
              </div>
              <div className={styles.company__left__button}>
                <button>Detail</button>
              </div>
            </div>
          </div>
          <div className={styles.company__right}>
            <div className={styles.company__right__content}>
              <h3 className={styles.text_truncate}>{partner.name}</h3>
              {/* Sử dụng hàm formatContent để cắt nội dung */}
              <p className={styles.text_truncate}>
                {formatContent(partner.content)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
