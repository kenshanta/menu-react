import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { carissma, tangaroa, emerald } from "../colors";
import React from "react";
import { DefaultTheme } from "styled-components";
import { useMenuStore } from "../../stores/menuStore";

let theme = createTheme({
  typography: {
    h3: {
      fontFamily: "Audrey",
      fontSize: "2.5rem",
      color: emerald[700],
      fontWeight: "bold",
    },
    h4: {
      fontFamily: "Audrey",
      fontSize: "1.7rem",
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
          margin: "0 .3rem 0",
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
theme = responsiveFontSizes(theme);

export default theme;
