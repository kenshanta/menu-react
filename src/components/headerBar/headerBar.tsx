import React from "react";
import { AppBar, Toolbar, Grid } from "@mui/material";
import { useMenuStore } from "../../stores/menuStore";
import { observer } from "mobx-react-lite";

import { ReactComponent as LogoEnglish } from "../../assets/images/logo-no-background.svg";
import { ReactComponent as UkIcon } from "../../assets/images/flag_uk.svg";
import { ReactComponent as AmIcon } from "../../assets/images/flag_am.svg";
import "../../modules/module.scss";
const HeaderBar: React.FC = observer(() => {
  const { setLocaleLanguage, localeLanguage } = useMenuStore();

  const handleOnClick = () => {
    setLocaleLanguage(localeLanguage === "en" ? "hy-AM" : "en");
  };

  const activeLogo = React.useMemo(() => {
    return <LogoEnglish />;
  }, []);

  const activeIcon = React.useMemo(() => {
    if (localeLanguage === "en") {
      return <UkIcon />;
    } else {
      return <AmIcon />;
    }
  }, [localeLanguage]);

  return (
    <Grid
      // sx={{ height: "7rem" }}
      container
      direction="row"
      className={"headerMain"}
    >
      <AppBar position="sticky">
        <Toolbar className="customToolbar">
          <Grid container item xs={11} justifyContent="center">
            {activeLogo}
          </Grid>
          <Grid
            item
            xs
            justifyContent="center"
            alignContent="center"
            container
            onClick={() => handleOnClick()}
          >
            {activeIcon}
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
});
export default HeaderBar;
