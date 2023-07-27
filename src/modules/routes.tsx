import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";


import "./module.scss";

const Menu = React.lazy(() => import("./menu/menu"));
const HeaderBar = React.lazy(() => import("../components/headerBar/headerBar"));
const FooterBar = React.lazy(() => import("../components/footerBar/footerBar"));

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
