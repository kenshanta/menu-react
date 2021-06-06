import React from "react";
import { AppBar, Toolbar, IconButton, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { styled as MUIStyled } from "@material-ui/styles";

import { ReactComponent as LogoEnglish } from "../../assets/images/logo_en.svg";
import { ReactComponent as UkIcon } from "../../assets/images/flag_uk.svg";
import { ReactComponent as AmIcono } from "../../assets/images/flag_am.svg";
import { ReactComponent as LogoArmenian } from "../../assets/images/logo_am.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "#001a38",
  },
  parentDiv: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    minHeight: "2rem",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
}));
const HeaderBar: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          {/* <Grid container> */}
          <Grid container item xs={12} justify="center">
            <LogoEnglish />
          </Grid>
          <Grid container item xs={1} justify="flex-end">
            <IconButton aria-label="language" color="inherit">
              <UkIcon />
            </IconButton>
          </Grid>
          {/* </Grid> */}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
export default HeaderBar;
