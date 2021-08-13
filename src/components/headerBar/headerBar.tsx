import React from "react";
import { AppBar, Toolbar, IconButton, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useMenuStore } from "../../stores/menuStore";
import { observer } from "mobx-react-lite";

import { ReactComponent as LogoEnglish } from "../../assets/images/logo_en.svg";
import { ReactComponent as UkIcon } from "../../assets/images/flag_uk.svg";
import { ReactComponent as AmIcono } from "../../assets/images/flag_am.svg";
import { ReactComponent as LogoArmenian } from "../../assets/images/logo_am.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 1,
    height: "calc(20%)",
  },
  parentDiv: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    minHeight: "2rem",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    marginLeft: "2rem",
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
}));
const HeaderBar: React.FC = observer(() => {
  const classes = useStyles();
  const { setLocaleLanguage, localeLanguage } = useMenuStore();

  const handleOnClick = async () => {
    if (localeLanguage === "en") {
      setLocaleLanguage("hy-AM");
    } else {
      setLocaleLanguage("en");
    }
  };
  return (
    <Grid container direction="row" className={classes.root}>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <Grid container item xs={12} justifyContent="center">
            {localeLanguage === "en" ? <LogoEnglish /> : <LogoArmenian />}
          </Grid>
          <Grid item xs justifyContent="flex-end" container>
            <IconButton
              aria-label="language"
              color="inherit"
              onClick={handleOnClick}
              style={{ paddingRight: 0 }}
            >
              {localeLanguage === "en" ? <UkIcon /> : <AmIcono />}
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
});
export default HeaderBar;
