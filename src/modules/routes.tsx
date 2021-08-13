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
  const {
    localeLanguage,
    setIsLoading,
    setLocaleLanguage,
    setLocaleCategoriesList,
    setLocaleSubCategories,
    localeCategoriesList,
  } = useMenuStore();

  React.useEffect(() => {
    const fetchCategoriesList = async () => {
      const productItemsList = await MenuService.getCategoriesByLocale(
        localeLanguage
      );
      setLocaleCategoriesList(toJS(productItemsList));
    };
    const fetchSubCategoriesList = async () => {
      const subCategoriesList = await MenuService.getSubCategoriesByLocale(
        localeLanguage
      );
      setLocaleSubCategories(toJS(subCategoriesList));
      setIsLoading(false);
      setLocaleLanguage(localeLanguage);
    };
    fetchCategoriesList();
    fetchSubCategoriesList();
  }, [
    localeLanguage,
    setLocaleCategoriesList,
    setLocaleLanguage,
    setIsLoading,
    setLocaleSubCategories,
    localeCategoriesList,
  ]);

  return (
    <>
      <Suspense fallback={<PanelSkeleton />}>
        <HeaderBar />
        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
          <Redirect to="/" />
        </Switch>
        <FooterBar />
      </Suspense>
    </>
  );
};
export default withRouter(Routes);
