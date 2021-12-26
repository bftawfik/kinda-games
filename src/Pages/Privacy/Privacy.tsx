import { useContext } from "react";
import { useTranslation } from "react-i18next";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import { AppDataContext } from "../../Components/AppDataProvider/AppDataProvider";

import { defaults } from "../../Mocks";

import type { typeAppProviderValue } from "../../Types";

import classes from "./Privacy.module.scss";

const Privacy = () => {
  const { t, i18n } = useTranslation();
  const en = i18n.getFixedT("en");
  const { productId } = defaults;
  const { privacyData }: typeAppProviderValue = useContext(AppDataContext);
  return (
    <FulscrnWrpr
      className={classes.Privacy}
      containerClassName={classes.container}
    >
      <div className={classes.contents}>
        <h2>{`${t("privacyData.header1.1")} ${en(
          `products.${productId}`
        )}`}</h2>
        {privacyData &&
          privacyData.map((termId, ndx) => (
            <p key={ndx}>{t(`privacyData.list1.item${ndx}.${termId}`)}</p>
          ))}
      </div>
    </FulscrnWrpr>
  );
};

export default Privacy;
