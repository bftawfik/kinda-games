import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import Home from "../Pages/Home/Home";
import SingleGame from "../Pages/SingleGame/SingleGame";
import Terms from "../Pages/Terms/Terms";
import Privacy from "../Pages/Privacy/Privacy";

import Login from "../Pages/Login/Login";
import Unsubscribe from "../Pages/Unsubscribe/Unsubscribe";
import Missing from "../Pages/Missing/Missing";

const Router = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/games/" element={<Home />} />
        <Route path="/privacy/" element={<Privacy />} />
        <Route path="/terms/" element={<Terms />} />
        <Route path="/games/:gameId" element={<SingleGame />} />
        <Route path="/cancel" element={<Unsubscribe />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};
export default Router;
