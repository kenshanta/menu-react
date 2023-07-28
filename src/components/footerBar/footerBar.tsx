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
      loading="lazy"
      width="100%"
      height="calc(15%)"
    />
  );
};
export default FooterBar;
