import { createTheme, responsiveFontSizes } from "@material-ui/core";
import { carissma, tangaroa, emerald } from "../colors";

let theme = createTheme({
  typography: {
    h3: {
      fontFamily: "AudreyM",
      fontSize: "1.7rem",
      color: emerald[700],
      fontWeight: "bold",
    },
    h4: {
      fontFamily: "AudreyM",
      fontSize: "0.7rem",
      fontWeight: 100,
    },
    h5: {
      fontFamily: "AudreyM",
      fontSize: ".7rem",
    },
    h6: {
      fontFamily: " AudreyM",
      fontSize: ".4rem",
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

    MuiTab: {
      textColorSecondary: {
        color: emerald[700],
        fontWeight: 900,
        textTransform: "none",
        fontFamily: "Yeseva",
      },
      wrapper: {
        margin: "0 .3rem 0",
        padding: "0 0 0",
        fontWeight: 100,
      },
    },
    MuiTabs: {
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
    MuiPaper: {
      elevation4: {
        boxShadow: "none",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
