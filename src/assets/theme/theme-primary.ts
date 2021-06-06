import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { red } from "../colors";

let theme = createMuiTheme({
  typography: {
    fontFamily: "Audrey",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
  },
  palette: {
    primary: red,
    secondary: red,
  },
  overrides: {
    MuiButton: {
      sizeLarge: {
        padding: "1.5rem 5rem",
        fontSize: "1.2rem",
      },
      containedSecondary: {
        color: "#fff",
        fontWeight: 400,
        backgroundColor: red[500],
        "&:hover": {
          backgroundColor: red["700"],
        },
      },
      outlinedSecondary: {
        color: red[500],
        fontWeight: 400,
        borderColor: red[500],
        "&:hover": {
          backgroundColor: red["700"],
          color: "#fff",
        },
      },
    },
    MuiFab: {
      secondary: {
        color: "#fff",
        fontWeight: 400,
        backgroundColor: red[500],
        "&:hover": {
          backgroundColor: red["700"],
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
