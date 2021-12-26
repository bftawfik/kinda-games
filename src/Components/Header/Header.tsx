import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import { AppDataContext } from "../AppDataProvider/AppDataProvider";

import Backdrop from "../Backdrop/Backdrop";

import { defaults, languagesData } from "../../Mocks";

import type { typeAppProviderValue } from "../../Types";

import classes from "./Header.module.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { productId } = defaults;
  const {
    language,
    switchLanguage,
    showHeader,
    changeShowHeader,
    headerCases,
  }: typeAppProviderValue = useContext(AppDataContext);

  return (
    <>
      <Backdrop />
      <div
        className={[
          classes.Header,
          showHeader === headerCases?.SHOW_WITH_ANIMATION
            ? classes.grow
            : showHeader === headerCases?.HIDE_WITH_ANIMATION
            ? classes.shrink
            : showHeader === headerCases?.HIDE_WITHOUT_ANIMATION
            ? classes.hide
            : undefined,
        ].join(" ")}
      >
        <h1>{i18n.getFixedT("en")(`products.${productId}`)}</h1>
        <h2>{t("headerData.header1.1")}</h2>
        <h2>{t("headerData.header2.1")}</h2>
        <div
          className={[
            classes.buttonsContainer,
            language === "ar" ? classes.ar : undefined,
          ].join(" ")}
        >
          {languagesData.map((lang, ndx) => (
            <button
              key={ndx}
              className={
                lang === language ? classes.selected : classes.notSelected
              }
              onClick={() => {
                if (switchLanguage) {
                  switchLanguage(lang);
                }
                if (location?.pathname === "/") {
                  if (
                    showHeader === headerCases?.HIDE_WITH_ANIMATION ||
                    showHeader === headerCases?.HIDE_WITHOUT_ANIMATION
                  ) {
                    changeShowHeader &&
                      changeShowHeader(headerCases?.SHOW_WITH_ANIMATION);
                  } else {
                    changeShowHeader &&
                      changeShowHeader(headerCases?.HIDE_WITH_ANIMATION);
                  }
                } else {
                  if (
                    showHeader === headerCases?.HIDE_WITHOUT_ANIMATION ||
                    showHeader === headerCases?.HIDE_WITH_ANIMATION
                  ) {
                    navigate("/");
                    changeShowHeader &&
                      changeShowHeader(headerCases?.HIDE_WITHOUT_ANIMATION);
                  } else {
                    changeShowHeader &&
                      changeShowHeader(headerCases?.SHOW_WITH_ANIMATION);
                  }
                }
              }}
            >
              <span className={classes.msg}>
                {t(`headerData.startBtn.${lang}.1`)}
              </span>
              <span className={classes.icon}>
                <FontAwesomeIcon icon={faHome} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
