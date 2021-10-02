import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { HeaderBar } from "../components/headerBar";
import { FooterBar } from "../components/footerBar";

import { Menu } from "./menu";

import "./module.scss";

/**
 * Modules Entry Routes
 */
const Routes: React.FC = () => {
  return (
    <>
      <HeaderBar />
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Redirect to="/menu" />
      </Switch>
      <FooterBar />
    </>
  );
};
export default withRouter(Routes);
