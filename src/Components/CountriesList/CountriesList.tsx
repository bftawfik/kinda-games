import { useState, useRef, useEffect, useCallback } from "react";
import Select, { components } from "react-select";
import { typeCustomListProps, typeCustomOptionProps } from "../../Types";
import ReactCountryFlag from "react-country-flag";

import classes from "./CountriesList.module.scss";

const customStyles = {
  container: (provided: any, state: any) => ({
    ...provided,
    width: "100%",
  }),
};

const CustomOption = ({ children, value, ...rest }: typeCustomOptionProps) => {
  return (
    <components.Option value={value} {...rest} className={classes.option}>
      <ReactCountryFlag
        countryCode={value.code}
        svg
        className={classes.flag}
        title={value.name}
      />
      <span>{value.name}</span>
    </components.Option>
  );
};

const CountriesList = ({
  data,
  changeCountryHandler,
  placeholder,
}: typeCustomListProps) => {
  const [open, setOpen] = useState(false);

  const openRef = useRef(open);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  const closeEventHandler = useCallback((e) => {
    document.removeEventListener("click", closeEventHandler);
    if (openRef) {
      setOpen(false);
    }
  }, []);

  return (
    <div
      className={[classes.CountriesList, open ? classes.open : null].join(" ")}
    >
      {data && (
        <Select
          styles={customStyles}
          options={data.map((singleCountry) => ({
            value: singleCountry,
            label: singleCountry.name,
          }))}
          components={{ Option: CustomOption }}
          onChange={changeCountryHandler}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};
export default CountriesList;
