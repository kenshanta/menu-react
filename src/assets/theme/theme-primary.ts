import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { carissma, tangaroa, emerald } from "../colors";

let theme = createMuiTheme({
  typography: {
    h3: {
      fontSize: "2.5rem",
    },
    h4: {
      fontSize: "2rem",
    },
    h5: {
      fontFamily: "Audrey",
      fontSize: "1.5rem",
      fontWeight: 700,
      color: emerald[700],
    },
    h6: {
      fontFamily: " Audrey",
      // fontWeight: 500,
      fontSize: ".7rem",
    },
  },
  palette: {
    primary: tangaroa,
    secondary: carissma,
    info: emerald,
  },

  overrides: {
    MuiFab: {
      secondary: {
        color: "#fff",
        fontWeight: 400,
        backgroundColor: carissma[500],
        "&:hover": {
          backgroundColor: carissma["700"],
        },
      },
    },
    MuiAppBar: {
      positionStatic: {
        height: "3rem",
      },
    },
    MuiTab: {
      textColorSecondary: {
        color: emerald[700],
      },
    },
    MuiTabs: {
      root: {
        backgroundColor: emerald["50"],
        color: emerald["500"],
        height: "3rem",
      },
      indicator: {
        color: "white",
        width: "100% !important",
        left: "0 !important",
        height: "1px",
      },
      flexContainer: {
        height: "3rem",
      },
    },
    MuiPaper: {
      elevation4: {
        boxShadow: "none",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
