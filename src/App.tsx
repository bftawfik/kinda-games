import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Router from "./Router/Router";

import StaticDataProvider from "./Components/AppDataProvider/AppDataProvider";

import { extractParams } from "./Services/Helpers";
import { postIsSubscribed } from "./Services/requests";

import {
  socialIcons,
  internalLinks,
  gamesData,
  termsData,
  privacyData,
  allCountriesData,
  usedCountriesCodes,
  registerCardData,
  languagesData,
  defaults,
} from "./Mocks";
import { typeUserData, typeHeaderCases } from "./Types";
import "./App.scss";

const headerCases: typeHeaderCases = {
  SHOW_WITHOUT_ANIMATION: "SHOW_WITHOUT_ANIMATION",
  HIDE_WITHOUT_ANIMATION: "HIDE_WITHOUT_ANIMATION",
  SHOW_WITH_ANIMATION: "SHOW_WITH_ANIMATION",
  HIDE_WITH_ANIMATION: "HIDE_WITH_ANIMATION",
};

function App() {
  const { lang: defaultLang, productId } = defaults;
  const {
    i18n: { resolvedLanguage, changeLanguage, getFixedT },
  } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const { search, pathname } = location;

  const [searchParams, setSearchParams] = useState<string>(
    new URLSearchParams(search).toString()
  );
  const [paramLang, token] = extractParams(new URLSearchParams(searchParams), [
    "lang",
    "token",
  ]);
  const [userData, setUserData] = useState<typeUserData>({
    isSubscribed: undefined,
    data: undefined,
  });
  const { isSubscribed }: typeUserData = userData;
  const [externalUrl, setExternalUrl] = useState<string | undefined>(undefined);
  const [language, setLanguage] = useState<string | undefined>(undefined);
  const [showHeader, setShowHeader] = useState<string | undefined>(
    headerCases.SHOW_WITHOUT_ANIMATION
  );

  const checkSessionStorage = () => {
    const sessionUserData = sessionStorage.getItem("userData");
    if (sessionUserData) {
      setUserData(JSON.parse(sessionUserData));
    } else {
      setUserData({
        isSubscribed: false,
        data: undefined,
      });
    }
  };

  const changeShowHeader = (value: string | undefined) => {
    console.log(value);
    if (value === headerCases.HIDE_WITH_ANIMATION) {
      setShowHeader(value);
      setTimeout(() => {
        setShowHeader(headerCases.HIDE_WITHOUT_ANIMATION);
      }, 1000);
    } else if (value === headerCases.SHOW_WITH_ANIMATION) {
      setShowHeader(value);
      setTimeout(() => {
        setShowHeader(headerCases.SHOW_WITHOUT_ANIMATION);
      }, 1000);
    } else {
      setShowHeader(value);
    }
  };

  const checkToken = useCallback(async (token: string) => {
    try {
      const res = await postIsSubscribed(token);
      const { statusCode, data } = await res.json();
      if (statusCode === 200) {
        const { decryptedObj, isSubscribed } = data;
        setUserData({
          isSubscribed: isSubscribed,
          data: {
            ...decryptedObj,
            urlToken: token,
          },
        });
        if (!isSubscribed) {
          setExternalUrl("http://www.google.com");
          checkSessionStorage();
        }
      } else {
        checkSessionStorage();
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const switchLanguage = useCallback(
    (newLang: string | undefined) => {
      const enProductName = getFixedT("en")(`products.${productId}`)
        .split(" ")
        .join("");
      const localLang = localStorage.getItem(`${enProductName}Lang`);
      const validNewLang = !!languagesData.find((l) => l === newLang);
      const finalLang = validNewLang
        ? newLang
        : localLang
        ? localLang
        : defaultLang;
      // console.log("newLang = ", newLang);`
      // console.log("localLang = ", localLang);
      // console.log(validNewLang);
      // console.log("finalLang = ", finalLang);
      // console.log("resolvedLanguage = ", resolvedLanguage);
      if (finalLang) {
        const urlSearchParams: URLSearchParams = new URLSearchParams(
          searchParams
        );
        urlSearchParams.set("lang", finalLang);
        setSearchParams(urlSearchParams.toString());
        navigate(`${pathname}?${urlSearchParams.toString()}`);
        localStorage.setItem(`${enProductName}Lang`, finalLang);
        if (finalLang !== language) {
          setLanguage(finalLang);
        }
        document?.querySelector("html")?.setAttribute("lang", finalLang);
        if (finalLang === "ar") {
          document?.querySelector("html")?.setAttribute("dir", "rtl");
        } else {
          document?.querySelector("html")?.setAttribute("dir", "ltr");
        }
        if (resolvedLanguage !== finalLang) {
          changeLanguage(finalLang);
        }
      }
      return finalLang;
    },
    [
      changeLanguage,
      defaultLang,
      navigate,
      productId,
      resolvedLanguage,
      searchParams,
      getFixedT,
      pathname,
      language,
    ]
  );

  useEffect(() => {
    if (isSubscribed === undefined) {
      checkToken(token);
    }
  }, [isSubscribed, token, checkToken]);

  useEffect(() => {
    switchLanguage(paramLang);
  }, [paramLang, switchLanguage]);

  return (
    <div className="App">
      <StaticDataProvider
        value={{
          socialIcons,
          internalLinks,
          termsData,
          privacyData,
          gamesData,
          userData,
          allCountriesData,
          usedCountriesCodes,
          registerCardData,
          externalUrl,
          showHeader,
          changeShowHeader,
          searchParams,
          language: language || defaultLang,
          switchLanguage,
          headerCases,
        }}
      >
        <Router />
      </StaticDataProvider>
    </div>
  );
}

export default App;

//http://localhost:3000/?token=U2FsdGVkX1%2F6Api1PJY90qnNHmeBF0V1%2FRXZz0cCCx5VeNo21%2FbguE%2BfZ%2FTVIMs4bRoO%2FPE09oJ%2Fcz4YQ2cQ%2FzwTO4hWnuKBprj3An0fRkCQ8YehRpVNZsgeEG7yomALLX8QbEGxK8d4wknBYHYFYXRZv9PW%2BZY65tvClytBgccqRiA0hSvMZABVRSVXAYw9hMOlhxYv6nV6fp96QUb0D%2Ff6cfZh2VHWESa7ToJ%2BXh6obhXdiHH51gSkH0UJtsmy