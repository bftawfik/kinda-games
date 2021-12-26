import React from "react";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

type typeSingleSocialIconData = {
  name: string;
  url: string;
  type: string;
  icon: IconDefinition;
};

type typeSocialIcons = typeSingleSocialIconData[] | undefined;

type typeSingleInternalLinkData = {
  url: string;
};

type typeInternalLinks = typeSingleInternalLinkData[] | undefined;

type typeAppProviderValue = {
  socialIcons?: typeSocialIcons;
  internalLinks?: typeInternalLinks;
  listData?: typeGameListData;
  termsData?: typeTermsData;
  privacyData?: typePrivacyData;
  gamesData?: typeGamesData;
  userData?: typeUserData;
  allCountriesData?: typeAllCountriesData;
  usedCountriesCodes?: typeUsedCountriesCodes;
  registerCardData?: typeRegisterCardData;
  showHeader?: string | undefined;
  changeShowHeader?: (value: string | undefined) => void;
  externalUrl?: undefined | string;
  searchParams?: string;
  language?: string;
  switchLanguage?: (value: string | undefined) => void;
  headerCases?: typeHeaderCases;
};

type typeBackdropProps = {
  zndx?: number;
  bgOpacity?: number;
  backgroundColorHex?: string;
  onClickHandler?: React.MouseEventHandler | undefined;
};

type typeFulscrnWrpr = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  style?: object;
};

type typeSingleGameData = {
  gameId?: string;
};

type typeGameListData = typeSingleGameData[];

type typeTermsData = string[];

type typeGamesData = string[];

type typeGamesGrid = {
  card: any;
};

type typePrivacyData = string[];

type typeUserData = {
  isSubscribed: undefined | boolean;
  data:
    | Promise<{
        errorMessage: string;
        lang: number;
        messageDeliveryStatus: boolean;
        msisdn: string;
        subscriptionContractId: number;
        token: string;
        urlToken: string;
      }>
    | undefined;
};

// type alltypes = typeSingleSocialIconData &
//   typeSocialIcons &
//   typeAppProviderValue;

type typeCountryData = {
  name: string;
  dial_code: string;
  code: string;
};

type typeAllCountriesData = typeCountryData[];

type typeUsedCountriesCodes = string[];

type typeRegisterCardData = {
  title: string;
  telPlaceHolder: string;
  submitLabel: string;
  countriesListPlaceHolder: string;
};

type typeRegisterCardProps = {
  tel?: string;
  onChange?: (newTel: string) => void;
  onSubmit?: (e: any) => {};
  biggerTitle?: (e: any) => {};
  changeCountryHandler: (o: any) => void;
  selectedCountry?: typeCountryData;
};

type typeCustomListProps = {
  data?: typeAllCountriesData;
  changeCountryHandler?: (e: any) => void;
  placeholder: string;
};

type typeCustomOptionProps = any;

type typeDefaultsObj = { lang: string; productId: number };

type typeHeaderCases = {
  [key: string]: string;
};
export type {
  typeSocialIcons,
  typeInternalLinks,
  typeAppProviderValue,
  typeBackdropProps,
  typeFulscrnWrpr,
  typeSingleGameData,
  typeGameListData,
  typeGamesGrid,
  typeTermsData,
  typePrivacyData,
  typeGamesData,
  typeUserData,
  typeCountryData,
  typeAllCountriesData,
  typeUsedCountriesCodes,
  typeRegisterCardData,
  typeRegisterCardProps,
  typeCustomListProps,
  typeCustomOptionProps,
  typeDefaultsObj,
  typeHeaderCases,
};
