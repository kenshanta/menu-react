import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./modules";
import { ThemePrimary } from "./assets/theme";
import { ThemeProvider } from "@material-ui/styles";
import { useMenuStore } from "./stores/menuStore";
import { MenuService } from "./services";
import { PanelSkeleton } from "./components/panelBody";

const App: React.FC = () => {
  const {
    localeLanguage,
    setLocaleLanguage,
    setLocaleCategoriesList,
    setLocaleSubCategories,
    setCurrentCategoriesList,
    currentCategoriesList,
  } = useMenuStore();

  React.useEffect(() => {
    const fetchCategoriesList = async () => {
      const productItemsList = await MenuService.getCategoriesByLocale("all");
      setLocaleCategoriesList(productItemsList);
      logicalOperator(productItemsList);
    };
    const logicalOperator = (data: any) => {
      let arr: string[] = [];

      data.map((category) => {
        if (localeLanguage === "en" && category.locale === "en") {
          arr.push(category);
        } else if (localeLanguage === "hy-AM" && category.locale === "hy-AM") {
          arr.push(category);
        }
        return arr;
      });

      setCurrentCategoriesList(arr);
    };
    fetchCategoriesList();
  }, [
    localeLanguage,
    setLocaleCategoriesList,
    setLocaleLanguage,
    setLocaleSubCategories,
    setCurrentCategoriesList,
    currentCategoriesList,
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
