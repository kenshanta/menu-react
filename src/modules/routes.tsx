import React, { Suspense } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { HeaderBar } from "../components/headerBar";
import { FooterBar } from "../components/footerBar";
// import { FooterBar } from "../components/footerBar";
import { Menu } from "./menu";
// import module styles
import "./module.scss";
import { Box } from "@material-ui/core";

/**
 * Modules Entry Routes
 */
const Routes: React.FC = () => {
  return (
    <Box id="page-container">
      <Suspense fallback={"Loading"}>
        <HeaderBar />
        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
          <Redirect to="/" />
        </Switch>
        <FooterBar />
      </Suspense>
    </Box>
  );
};
export default withRouter(Routes);
