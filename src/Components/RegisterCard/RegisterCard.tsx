import { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import classes from "./RegisterCard.module.scss";
import CountriesList from "../CountriesList/CountriesList";
import { AppDataContext } from "../AppDataProvider/AppDataProvider";

import type {
  typeAppProviderValue,
  typeAllCountriesData,
  typeRegisterCardProps,
} from "../../Types";

const RegisterCard = ({
  tel,
  changeCountryHandler,
  selectedCountry,
  onSubmit,
  onChange,
}: typeRegisterCardProps) => {
  const {
    registerCardData,
    allCountriesData,
    usedCountriesCodes,
  }: typeAppProviderValue = useContext(AppDataContext);
  const [usedCountriesData, setUsedCountriesData] = useState<
    typeAllCountriesData | undefined
  >([]);

  const findNotSpeciale = (key: string) => {
    switch (key) {
      case "Backspace":
      case "Delete":
      case "ArrowUp":
      case "ArrowDown":
      case "ArrowLeft":
      case "ArrowRight":
        return false;
      default:
        return true;
    }
  };

  const onKeyDownHandler = (e: any) => {
    const pattern = new RegExp("[0-9]");
    if (findNotSpeciale(e.key) && !pattern.test(e.key)) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const tempUsedCountriesData: typeAllCountriesData | undefined =
      allCountriesData?.filter(
        ({ code }) => !!usedCountriesCodes?.find((cCode) => cCode === code)
      );
    setUsedCountriesData(tempUsedCountriesData);
  }, [usedCountriesCodes, allCountriesData]);

  return (
    <div className={classes.RegisterCard}>
      <header>
        <h2>{registerCardData?.title || ""}</h2>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <div className={[classes.formRow, classes.telAndProvider].join(" ")}>
            <CountriesList
              data={usedCountriesData}
              changeCountryHandler={changeCountryHandler}
              placeholder={registerCardData?.countriesListPlaceHolder || ""}
            />
            <div className={classes.tel}>
              <div className={classes.telPrefex}>
                {selectedCountry?.dial_code
                  ? `(${selectedCountry?.dial_code})`
                  : ""}
              </div>
              <input
                type="tel"
                id="msisdn"
                name="msisdn"
                placeholder={registerCardData?.telPlaceHolder || ""}
                value={tel}
                onChange={(e) =>
                  onChange ? onChange(e.target.value) : undefined
                }
                required
                size={1}
                disabled={!selectedCountry}
                onKeyDown={onKeyDownHandler}
              />
            </div>
          </div>
          <div className={classes.formRow}>
            <button
              type="submit"
              className={[classes.subscribe].join(" ")}
              title={registerCardData?.submitLabel || ""}
            >
              <span>
                <FontAwesomeIcon icon={faTrophy} />
              </span>
              {registerCardData?.submitLabel || ""}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default RegisterCard;
