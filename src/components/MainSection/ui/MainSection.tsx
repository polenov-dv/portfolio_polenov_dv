import React from "react";
import cls from "./MainSection.module.scss";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

export const MainSection = () => {
  const { t } = useTranslation();

  return (
    <div id="main-path" className={cls.content}>
      <p className={cls.title}>{t("Добро пожаловать")}</p>
      <h1 className={cls.desc}>
        <Typewriter
          words={[
            t("Меня зовут Дмитрий"),
            t("Я frontend-разработчик"),
            t("Приветствую вас в моей вселенной!"),
          ]}
          loop={false}
          cursor
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <button className={cls.btn}>
        <a href="#contacts-path">{t("Связаться")}</a>
      </button>
      <div className={cls.arrow_wrapper}>
        <a href="#about-path">
          <div className={cls.arrow}></div>
        </a>
      </div>
    </div>
  );
};
