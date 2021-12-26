import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import { AppDataContext } from "../AppDataProvider/AppDataProvider";

import FulscrnWrpr from "../FulscrnWrpr/FulscrnWrpr";

import { defaults } from "../../Mocks";

import type { typeAppProviderValue } from "../../Types";

import classes from "./Footer.module.scss";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const en = i18n.getFixedT("en");
  const { productId } = defaults;
  const { socialIcons, internalLinks, searchParams }: typeAppProviderValue =
    useContext(AppDataContext);
  const [showFooter, setShowFooter] = useState<boolean | undefined>(undefined);

  return (
    <FulscrnWrpr
      className={[
        classes.Footer,
        showFooter
          ? classes.grow
          : showFooter === false
          ? classes.shrink
          : undefined,
      ].join(" ")}
      containerClassName={classes.container}
    >
      <button
        className={classes.toggleFooter}
        onClick={() => {
          if (showFooter === undefined) {
            setShowFooter(true);
          } else {
            setShowFooter(!showFooter);
          }
        }}
      >
        <span className={classes.icon}>
          <FontAwesomeIcon icon={faInfoCircle} />
        </span>
      </button>
      <div className={classes.footerRow}>
        <div className={classes.footerCol}>
          <h3>
            <span>{t("footerData.header1.1")} </span>
            <span>{en(`products.${productId}`)}</span>
          </h3>
          <p>{t("footerData.paragraph1.1")}</p>
          <ul className={classes.internalLinks}>
            {internalLinks &&
              internalLinks.map(({ url }, ndx) => (
                <li key={ndx}>
                  <Link to={`${url}?${searchParams?.toString()}`}>
                    {t(`footerData.internalLinks.link${ndx}.1`)}
                  </Link>
                  {ndx + 1 < internalLinks.length && <span>-</span>}
                </li>
              ))}
          </ul>
        </div>
        <div className={classes.footerCol}>
          <h3>{t("footerData.header2.1")}</h3>
          <ul>
            {socialIcons &&
              socialIcons.map(({ name, url, type, icon }, ndx) => (
                <li key={ndx}>
                  {type === "external" ? (
                    <a href={url} target={"_blank"} rel="noreferrer">
                      <FontAwesomeIcon icon={icon} />
                    </a>
                  ) : (
                    <Link to={url} key={ndx}>
                      <FontAwesomeIcon icon={icon} />
                    </Link>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className={classes.footerRow}>
        <p>{`${en(`products.${productId}`)} © ${t(
          "footerData.copyright.1"
        )} 2021`}</p>
      </div>
    </FulscrnWrpr>
  );
};

export default Footer;
