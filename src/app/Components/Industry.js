"use client";
import styles from "../../app/Screen/Home/styles.module.css";
import "@/app/i18n/i18n";
import { useTranslation } from "react-i18next";
import { IconPlaneDeparture } from "@tabler/icons-react";

export default function Industry() {
  const { t } = useTranslation();
  return (
    <div className={styles.Container_container}>
      <div className={styles.service__wrapper}>
        <div className={styles.service__element}>
          <a href="/">
            <div className={styles.service__box}>
              <span>
                <IconPlaneDeparture width={"50px"} height={"50px"} />
              </span>
              <div className={styles.service__content}>
                <h3>Travel, Entertainment, and Design</h3>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.service__element}>
          <a href="/">
            <div className={styles.service__box}>
              <span>
                <IconPlaneDeparture width={"50px"} height={"50px"} />
              </span>
              <div className={styles.service__content}>
                <h3>Travel, Entertainment, and Design</h3>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.service__element}>
          <a href="/">
            <div className={styles.service__box}>
              <span>
                <IconPlaneDeparture width={"50px"} height={"50px"} />
              </span>
              <div className={styles.service__content}>
                <h3>Travel, Entertainment, and Design</h3>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.service__element}>
          <a href="/">
            <div className={styles.service__box}>
              <span>
                <IconPlaneDeparture width={"50px"} height={"50px"} />
              </span>
              <div className={styles.service__content}>
                <h3>Travel, Entertainment, and Design</h3>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.service__element}>
          <a href="/">
            <div className={styles.service__box}>
              <span>
                <IconPlaneDeparture width={"50px"} height={"50px"} />
              </span>
              <div className={styles.service__content}>
                <h3>Travel, Entertainment, and Design</h3>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.service__element}>
          <a href="/">
            <div className={styles.service__box}>
              <span>
                <IconPlaneDeparture width={"50px"} height={"50px"} />
              </span>
              <div className={styles.service__content}>
                <h3>Travel, Entertainment, and Design</h3>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.service__element}>
          <a href="/">
            <div className={styles.service__box}>
              <span>
                <IconPlaneDeparture width={"50px"} height={"50px"} />
              </span>
              <div className={styles.service__content}>
                <h3>Travel, Entertainment, and Design</h3>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.service__element}>
          <a href="/">
            <div className={styles.service__box}>
              <span>
                <IconPlaneDeparture width={"50px"} height={"50px"} />
              </span>
              <div className={styles.service__content}>
                <h3>Travel, Entertainment, and Design</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
