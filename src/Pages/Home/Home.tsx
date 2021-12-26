import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import GamesGrid from "../../Components/GamesGrid/GamesGrid";
import GameThumbBox from "../../Components/GameThumbBox/GameThumbBox";

import type { typeAppProviderValue } from "../../Types";

import { AppDataContext } from "../../Components/AppDataProvider/AppDataProvider";

import classes from "./Home.module.scss";
import Loading from "../Loading/Loading";

const Home = () => {
  const {
    userData,
    searchParams,
    showHeader,
    changeShowHeader,
    headerCases,
  }: typeAppProviderValue = useContext(AppDataContext);

  const isSubscribed = userData?.isSubscribed;

  useEffect(() => {
    if (isSubscribed === false) {
      if (
        showHeader === headerCases?.SHOW_WITH_ANIMATION ||
        showHeader === headerCases?.SHOW_WITHOUT_ANIMATION
      ) {
        changeShowHeader &&
          changeShowHeader(headerCases?.HIDE_WITHOUT_ANIMATION);
      }
    }
  }, [isSubscribed, showHeader, headerCases, changeShowHeader]);

  return userData?.isSubscribed ? (
    <FulscrnWrpr className={classes.Home}>
      <GamesGrid card={GameThumbBox} />
    </FulscrnWrpr>
  ) : userData?.isSubscribed === false ? (
    <Navigate to={`/login?${searchParams?.toString()}`} replace={true} />
  ) : (
    <Loading />
  );
};

export default Home;
