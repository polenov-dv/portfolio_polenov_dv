import { Description } from "components/Description";
import cls from "./Resume.module.scss";
import { useTranslation } from "react-i18next";
import { ProgressSkill } from "components/ProgressSkill";
import Download from "shared/assets/icon/download.svg";
import resume from "shared/file/resume_pdv.pdf";

export const Resume = () => {
  const { t } = useTranslation();

  return (
    <div id="resume-path" className={cls.content}>
      <Description title={t("Резюме")} text={t("Краткое описание")} />
      <p className={cls.text}>{t("Опыт работы")}</p>

      <div className={cls.experience}>
        <span className={cls.time_work}>2022 - 2024</span>
        <p className={cls.position_work}>{t("Фронтенд-разработчик")}</p>
        <p className={cls.place_work}>{t("Фриланс")}</p>
        <ul className={cls.exp_list}>
          <li>{t("Функциональные обязанности")}:</li>
          <li>
            {t(
              "разработка и поддержка одностраничных приложений на React, обеспечивая высокую производительность и отзывчивость"
            )}
            ;
          </li>
          <li>
            {t(
              "использование React Hooks и контекста для управления состоянием компонентов"
            )}
            ;
          </li>
          <li>
            {t(
              "интеграция с внешними API для получения и отправки данных с использованием библиотеки Axios"
            )}
            ;
          </li>
          <li>
            {t(
              "работа с Redux для эффективного управления глобальным состоянием приложения"
            )}
            ;
          </li>
          <li>
            {t(
              "оптимизация приложений для различных устройств и браузеров, обеспечивая кроссбраузерную совместимость"
            )}
            ;
          </li>
          <li>
            {t(
              "тестирование компонентов с использованием Jest для обеспечения стабильности кода"
            )}
            .
          </li>
        </ul>
      </div>

      <div className={cls.experience}>
        <span className={cls.time_work}>2017 - 2022</span>
        <p className={cls.position_work}>{t("Инженер-программист")}</p>
        <p className={cls.place_work}>{t("ЧАО СНПО «Импульс»")}</p>
        <ul className={cls.exp_list}>
          <li>{t("Функциональные обязанности")}:</li>
          <li>{t("программирование микроконтроллеров")};</li>
          <li>{t("разработка кроссплатформенных приложений на Qt")};</li>
          <li>{t("создание сервисов под ОС Linux на С++")};</li>
          <li>{t("документирование разработанных программных продуктов")}.</li>
        </ul>
      </div>

      <div className={cls.skills}>
        <p className={cls.text}>{t("Навыки")}</p>
        <div className={cls.skill_blocks}>
          <div className={cls.skill_block}>
            <ProgressSkill skill="HTML/CSS" completed="90" />
            <ProgressSkill skill="JavaScript" completed="75" />
            <ProgressSkill skill="React JS" completed="70" />
            <ProgressSkill skill="Redux Toolkit" completed="70" />
          </div>

          <div className={cls.skill_block}>
            <ProgressSkill skill="TypeScript" completed="65" />
            <ProgressSkill skill="Git" completed="90" />
            <ProgressSkill skill="Webpack" completed="80" />
            <ProgressSkill skill="Unit tests" completed="70" />
          </div>
        </div>
      </div>

      <a href={resume} download="resume_pdv.pdf" className={cls.btn_wrapper}>
        <button className={cls.btn}>
          {t("Скачать")} CV
          <Download className={cls.download_icon} />
        </button>
      </a>
    </div>
  );
};
