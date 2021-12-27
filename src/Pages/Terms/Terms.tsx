import { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import { AppDataContext } from "../../Components/AppDataProvider/AppDataProvider";

import type { typeAppProviderValue, typeAllCountriesData } from "../../Types";

import { defaults } from "../../Mocks";

import classes from "./Terms.module.scss";

const Terms = () => {
  const { t } = useTranslation();
  const { productId } = defaults;
  const [usedCountriesData, setUsedCountriesData] = useState<
    typeAllCountriesData | undefined
  >([]);

  const {
    termsData,
    allCountriesData,
    usedCountriesCodes,
  }: typeAppProviderValue = useContext(AppDataContext);

  useEffect(() => {
    const tempUsedCountriesData: typeAllCountriesData | undefined =
      allCountriesData?.filter(
        ({ code }) => !!usedCountriesCodes?.find((cCode) => cCode === code)
      );
    setUsedCountriesData(tempUsedCountriesData);
  }, [usedCountriesCodes, allCountriesData]);

  return (
    <FulscrnWrpr
      className={classes.Terms}
      containerClassName={classes.container}
    >
      <div className={classes.contents}>
        <div className={classes.countriesList}>
          <ul>
            {usedCountriesData?.map((singleCountry, ndx) => (
              <li>
                <button className={ndx === 1 ? classes.selected : undefined}>
                  {singleCountry.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.terms}>
          <h2>{`${t("termsData.header1.1")} ${t(`products.${productId}`)}`}</h2>
          <ul>
            {termsData &&
              termsData.map((termId, ndx) => (
                <li key={ndx}>{t(`termsData.list1.item${ndx}.${termId}`)}</li>
              ))}
          </ul>
        </div>
      </div>
    </FulscrnWrpr>
  );
};

export default Terms;
