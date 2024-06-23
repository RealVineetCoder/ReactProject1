import React from "react";
import "../Css/Footer.css";
import Contact from "./Contact";

import Engagement from "./Engagement";

const Footer = () => {
  return (
    <div className="flex">
      <Contact />
      <Engagement />
    </div>
  );
};

export default Footer;
