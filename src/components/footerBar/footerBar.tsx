import React from "react";
import { Box } from "@material-ui/core";

import Footer from "../../assets/images/pattern.svg";

const FooterBar: React.FC = () => {
  return (
    <Box>
      <img
        src={Footer}
        style={{
          position: "inherit",
          bottom: 0,
          width: "100%",
          // display: "block",
          // maxHeight: "17vh",
        }}
        alt="website footer"
      />
    </Box>
  );
};
export default FooterBar;
