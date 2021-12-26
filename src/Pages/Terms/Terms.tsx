import { useContext } from "react";
import { useTranslation } from "react-i18next";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import { AppDataContext } from "../../Components/AppDataProvider/AppDataProvider";

import type { typeAppProviderValue } from "../../Types";

import { defaults } from "../../Mocks";

import classes from "./Terms.module.scss";

const Terms = () => {
  const { t, i18n } = useTranslation();
  const en = i18n.getFixedT("en");
  const { productId } = defaults;

  const { termsData }: typeAppProviderValue = useContext(AppDataContext);
  return (
    <FulscrnWrpr
      className={classes.Terms}
      containerClassName={classes.container}
    >
      <div className={classes.contents}>
        <h2>{`${t("termsData.header1.1")} ${en(`products.${productId}`)}`}</h2>
        <ul>
          {termsData &&
            termsData.map((termId, ndx) => (
              <li key={ndx}>{t(`termsData.list1.item${ndx}.${termId}`)}</li>
            ))}
        </ul>
      </div>
    </FulscrnWrpr>
  );
};

export default Terms;
