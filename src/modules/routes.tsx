import React, { Suspense, useEffect } from "react";
import {
  RouteComponentProps,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import { HeaderBar } from "../components/headerBar";
import { Menu } from "./menu";
// import { API } from 'services/api';
// import 'url-search-params-polyfill';

// import module styles
import "./module.scss";

interface Props extends RouteComponentProps {}

/**
 * Modules Entry Routes
 */
const Routes: React.FC<Props> = () => {
  // if token is present, set the auth header globally
  useEffect(() => {
    // API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }, []);

  return (
    <Suspense fallback={"Loading"}>
      <HeaderBar />
      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};
export default withRouter(Routes);
