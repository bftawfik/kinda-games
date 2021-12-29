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
  const [selectedCountry, setSelectedCountry] = useState(0);

  const {
    termsData,
    allCountriesData,
    usedCountriesCodes,
    language,
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
      className={[
        classes.Terms,
        language === "ar" ? classes.ar : undefined,
      ].join(" ")}
      containerClassName={classes.container}
    >
      <h2>{`${t("termsData.header1.1")} ${t(`products.${productId}`)}`}</h2>
      <div className={classes.contents}>
        <div className={classes.terms}>
          <h2>
            {usedCountriesData &&
              t(`countries.${usedCountriesData[selectedCountry]?.code}`)}
          </h2>
          <ul>
            {termsData &&
              termsData.map((termId, ndx) => (
                <li key={ndx}>
                  {t(`termsData.list${selectedCountry}.item${ndx}.${termId}`)}
                </li>
              ))}
          </ul>
        </div>
        <div className={classes.countriesList}>
          <ul>
            {usedCountriesData?.map((singleCountry, ndx) => (
              <li>
                <button
                  className={
                    ndx === selectedCountry ? classes.selected : undefined
                  }
                  onClick={() => {
                    setSelectedCountry(ndx);
                  }}
                  disabled={ndx === selectedCountry}
                >
                  {t(`countries.${singleCountry?.code}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FulscrnWrpr>
  );
};

export default Terms;
