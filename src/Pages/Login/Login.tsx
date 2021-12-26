import { useState } from "react";
import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import RegisterCard from "../../Components/RegisterCard/RegisterCard";
import type { typeCountryData } from "../../Types";

import { postCenterLogin } from "../../Services/requests";

import classes from "./Login.module.scss";

const Login = () => {
  const [selectedCountry, setselectedCountry] = useState<
    undefined | typeCountryData
  >(undefined);
  const [tel, setTel] = useState<string>("");

  const changeCountry = (option: any) => {
    setselectedCountry(option.value);
  };

  const changeTel = (newTel: string) => {
    setTel(newTel);
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const res = await postCenterLogin(
        `${selectedCountry?.dial_code}${tel}`,
        "ElegantGames",
        1
      );
      const resJson = await res.json();
      console.log(resJson);
    } catch (error) {
      console.log(error);
    }

    // if (statusCode === 200) {
    //   const { decryptedObj, isSubscribed } = data;
    //   if (isSubscribed) {
    //     setIsSubscribed(true);
    //     setUser({
    //       ...decryptedObj,
    //     });
    //   } else {
    //     setIsSubscribed(false);
    //   }
    // }
  };

  // const checkToken = async (token: string) => {
  //   const res = await postCenterLogin(token);
  //   const { statusCode, data } = await res.json();
  //   if (statusCode === 200) {
  //     const { decryptedObj, isSubscribed } = data;
  //     if (isSubscribed) {
  //       setIsSubscribed(true);
  //       setUser({
  //         ...decryptedObj,
  //       });
  //     } else {
  //       setIsSubscribed(false);
  //     }
  //   }
  // };

  return (
    <FulscrnWrpr
      className={classes.Login}
      containerClassName={classes.container}
    >
      <RegisterCard
        tel={tel}
        changeCountryHandler={changeCountry}
        selectedCountry={selectedCountry}
        onChange={changeTel}
        onSubmit={onSubmitHandler}
      />
    </FulscrnWrpr>
  );
};

export default Login;
