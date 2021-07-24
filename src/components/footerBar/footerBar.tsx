import React from "react";
import { Box } from "@material-ui/core";

import Footer from "../../assets/images/pattern.svg";

const FooterBar: React.FC = () => {
  return (
    <Box id="footer">
      <img
        src={Footer}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "auto",
        }}
        alt="website footer"
      />
    </Box>
  );
};
export default FooterBar;
