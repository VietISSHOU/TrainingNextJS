"use client"; //components của nextjs phải thêm
import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.css";

import "@/app/i18n/i18n";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  const { t } = useTranslation();

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className={styles.wrapper}>
          <div className={styles.form_content_slider}>
            <div className={styles.content_slider_user_image}>
              <img src="https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/thangvo.png" />
            </div>
            <div className={styles.content_slider_name}>
              <h3>{t("Business & IT consultant")}</h3>
              <span>{t("(Vo Duc Thang)")}</span>
            </div>
            <div className={styles.content_expert_eye}>
              <div className={styles.content_expert_show}>
                <button>{t("View profile")}</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.wrapper}>
          <div className={styles.form_content_slider}>
            <div className={styles.content_slider_user_image}>
              <img src="https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/expert-team-01.jpg" />
            </div>
            <div className={styles.content_slider_name}>
              <h3>{t("Business & IT consultant")}</h3>
              <span>{t("(Vo Duc Thang)")}</span>
            </div>
            <div className={styles.content_expert_eye}>
              <div className={styles.content_expert_show}>
                <button>{t("View profile")}</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.wrapper}>
          <div className={styles.form_content_slider}>
            <div className={styles.content_slider_user_image}>
              <img src="https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/expert-team-02.jpg" />
            </div>
            <div className={styles.content_slider_name}>
              <h3>{t("Business & IT consultant")}</h3>
              <span>{t("(Vo Duc Thang)")}</span>
            </div>
            <div className={styles.content_expert_eye}>
              <div className={styles.content_expert_show}>
                <button>{t("View profile")}</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.wrapper}>
          <div className={styles.form_content_slider}>
            <div className={styles.content_slider_user_image}>
              <img src="https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/itcomtor.png" />
            </div>
            <div className={styles.content_slider_name}>
              <h3>{t("Business & IT consultant")}</h3>
              <span>{t("(Vo Duc Thang)")}</span>
            </div>
            <div className={styles.content_expert_eye}>
              <div className={styles.content_expert_show}>
                <button>{t("View profile")}</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.wrapper}>
          <div className={styles.form_content_slider}>
            <div className={styles.content_slider_user_image}>
              <img src="https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/thangvo.png" />
            </div>
            <div className={styles.content_slider_name}>
              <h3>{t("Business & IT consultant")}</h3>
              <span>{t("(Vo Duc Thang)")}</span>
            </div>
            <div className={styles.content_expert_eye}>
              <div className={styles.content_expert_show}>
                <button>{t("View profile")}</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
