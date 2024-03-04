import { Description } from "components/Description";
import cls from "./AboutMe.module.scss";
import { useTranslation } from "react-i18next";
import Download from "shared/assets/icon/download.svg";
import resume from "shared/file/resume_pdv.pdf";

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div id="about-path" className={cls.content}>
      <Description title={t("Обо мне")} text={t("Узнай меня лучше")} />
      <div className={cls.desc_wrapper}>
        <div className={cls.desc}>
          <p className={cls.title}>
            {t("Здравствуйте")}. {t("Меня зовут")}&nbsp;
            <span className={cls.name}>
              {t("Поленов Дмитрий")} {t("Владимирович")}
            </span>
            .
          </p>
          <p className={cls.desc_text}>
            {t(
              "Я frontend-разработчик с глубоким интересом к созданию инновационных и эффективных веб-приложений"
            )}
            .&nbsp;
            {t("Стремлюсь к постоянному росту в сфере и готов к новым задачам")}
            .
          </p>
          <p>
            {t(
              "Моя цель - создавать пользовательские интерфейсы, которые были бы не только красивыми, но и удобными для пользователя. Я следую передовым технологиям и методологиям разработки, чтобы обеспечить наилучшее качество и эффективность моих проектов"
            )}
            .
          </p>
        </div>

        <div className={cls.info}>
          <ul className={cls.info_list}>
            <li className={cls.info_item}>
              <span>{t("Имя")}: </span> {t("Поленов Дмитрий")}
            </li>
            <li className={cls.info_item}>
              <span>{t("Эл. почта")}: </span>
              <a
                className={cls.address_link}
                href="mailto:polenovdimaprok@gmail.com"
              >
                polenovdimaprok@gmail.com
              </a>
            </li>
            <li className={cls.info_item}>
              <span>{t("Возраст")}: </span>31
            </li>
            <li className={cls.info_item}>
              <span>{t("Локация")}: </span>
              {t("Российская Федерация")}
            </li>
          </ul>
          <a
            href={resume}
            download="resume_pdv.pdf"
            className={cls.btn_wrapper}
          >
            <button className={cls.btn}>
              {t("Скачать")} CV
              <Download className={cls.download_icon} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
