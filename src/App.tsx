import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./modules";
import { ThemeProvider } from "@mui/material/styles";
import { useMenuStore } from "./stores/menuStore";
import { MenuService } from "./services";
import { PanelSkeleton } from "./components/panelBody";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { carissma, tangaroa, emerald } from "./assets/colors";

let theme = createTheme({
  typography: {
    h3: {
      fontFamily: "Audrey",
      fontSize: "2.1rem",
      color: emerald[700],
      fontWeight: "bold",
    },
    h4: {
      fontFamily: "Audrey",
      fontSize: "1.5rem",
      fontWeight: 100,
    },
    h5: {
      fontFamily: "Audrey",
      fontSize: "1.9rem",
    },
    h6: {
      fontFamily: " Audrey",
      fontSize: "1.1rem",
    },
  },
  palette: {
    primary: tangaroa,
    secondary: carissma,
    info: emerald,
    mode: "light",
  },

  components: {
    MuiFab: {
      styleOverrides: {
        secondary: {
          color: "#fff",
          fontWeight: 400,
          backgroundColor: carissma[500],
          "&:Mui-hover": {
            backgroundColor: carissma["700"],
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        textColorSecondary: {
          color: emerald[700],
          fontWeight: 900,
          textTransform: "none",
          fontFamily: "Audrey",
        },
        wrapped: {
          padding: "0 0 0",
          fontWeight: 100,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: emerald["50"],
          color: emerald["500"],
          fontWeight: 800,
          overflow: "hidden",
          position: "relative",
          padding: "0",
        },
        indicator: {
          height: "100%",
          background: "#bda78c",
          opacity: 0.2,
          borderRadius: "3%",
        },
        flexContainer: {
          position: "absolute",
          width: "100%",
          height: "50%",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation4: {
          boxShadow: "none",
        },
      },
    },
  },
});
const App: React.FC = () => {
  const { localeLanguage, setCurrentCategoriesList } =
    useMenuStore();

  React.useEffect(() => {
    const fetchCategoriesList = async () => {
      const productItemsList = await MenuService.getCategoriesByLocale("all");
      logicalOperator(productItemsList);
    };
    const logicalOperator = (data: any) => {
      let categoryListArr: any[] = [];
      data.map((category) => {
        if (localeLanguage === "en" && category.locale === "en") {
          categoryListArr.push(category);
        } else if (localeLanguage === "hy-AM" && category.locale === "hy-AM") {
          categoryListArr.push(category);
        }
        return categoryListArr;
      });
      categoryListArr.sort(function (a, b) {
        return a.id - b.id;
      });
      setCurrentCategoriesList(categoryListArr);
    };
    fetchCategoriesList();
  });

  return (
    <Suspense fallback={<PanelSkeleton />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
