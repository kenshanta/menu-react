import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./modules";
import { ThemePrimary } from "./assets/theme";
import { ThemeProvider } from "@material-ui/styles";
import { useMenuStore } from "./stores/menuStore";
import { MenuService } from "./services";
import { toJS } from "mobx";
import MenuSkeleton from "./components/panelBody/panelSkeleton";
import { PanelSkeleton } from "./components/panelBody";

const App: React.FC = () => {
  const {
    localeLanguage,
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
      setLocaleLanguage(localeLanguage);
      setLocaleSubCategories(toJS(subCategoriesList));
    };
    fetchCategoriesList();
    fetchSubCategoriesList();
  }, [
    localeLanguage,
    setLocaleCategoriesList,
    setLocaleLanguage,
    setLocaleSubCategories,
    localeCategoriesList,
  ]);

  return (
    <Suspense fallback={<PanelSkeleton />}>
      <ThemeProvider theme={ThemePrimary}>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
