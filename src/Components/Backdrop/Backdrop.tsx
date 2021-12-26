import { useContext } from "react";
import { percentToHex } from "../../Services/Helpers";

import type { typeBackdropProps, typeAppProviderValue } from "../../Types";

import { AppDataContext } from "../AppDataProvider/AppDataProvider";

import classes from "./Backdrop.module.scss";
const Backdrop = ({
  zndx = 1000,
  bgOpacity = 0.85,
  backgroundColorHex = "#FFFFFF",
  onClickHandler,
}: typeBackdropProps) => {
  const { showHeader, headerCases }: typeAppProviderValue =
    useContext(AppDataContext);
  return (
    <button
      className={[
        classes.Backdrop,
        showHeader === headerCases?.SHOW_WITH_ANIMATION
          ? classes.fadeIn
          : showHeader === headerCases?.HIDE_WITH_ANIMATION
          ? classes.fadeOut
          : showHeader === headerCases?.HIDE_WITHOUT_ANIMATION
          ? classes.hide
          : undefined,
      ].join(" ")}
      style={{
        zIndex: zndx,
        backgroundColor: `${backgroundColorHex}${percentToHex(bgOpacity)}`,
      }}
      onClick={onClickHandler}
    />
  );
};

export default Backdrop;
