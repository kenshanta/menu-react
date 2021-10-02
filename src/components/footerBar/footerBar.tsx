import React from "react";

import Footer from "../../assets/images/pattern.svg";

const FooterBar: React.FC = () => {
  return (
    <img
      src={Footer}
      style={{
        position: "inherit",
        bottom: 0,
        width: "100%",
      }}
      alt="website footer"
    />
  );
};
export default FooterBar;
