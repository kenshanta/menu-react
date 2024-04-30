import React from "react";
import { Grid, Typography } from "@mui/material";

import Footer from "../../assets/images/pattern.svg";

const FooterBar: React.FC = () => {
  return (
    <Grid container direction="row">
      <Typography variant="h6" padding={1}>
        Owned by kenshanta:{" "}
        <a href="https://github.com/kenshanta/menu-react/blob/main/LICENSE.md">
          license
        </a>
      </Typography>
      <img
        src={Footer}
        style={{
          position: "inherit",
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
        alt="website footer"
        loading="lazy"
        width="100%"
        height="calc(15%)"
      />
    </Grid>
  );
};
export default FooterBar;
