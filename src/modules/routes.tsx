import React, { Suspense } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { HeaderBar } from "../components/headerBar";
import { FooterBar } from "../components/footerBar";

import { useMenuStore } from "../stores/menuStore";
import { MenuService } from "../services";
import { Menu } from "./menu";

import "./module.scss";
import { PanelSkeleton } from "../components/panelBody";
import { toJS } from "mobx";

/**
 * Modules Entry Routes
 */
const Routes: React.FC = () => {
  return (
    <Suspense fallback={<PanelSkeleton />}>
      <HeaderBar />
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Redirect to="/menu" />
      </Switch>
      <FooterBar />
    </Suspense>
  );
};
export default withRouter(Routes);
