import React from "react";
import { Link } from "react-router-dom";

const FooterLogos = ({ socialClassName, url, logo, name }) => {
  return (
    <Link
      className={`icon ${socialClassName}`}
      to={url}
      target="_black"
    >
      <span className="tooltip">{name}</span>
      <img className="icon-img" src={logo} alt={name} title={name} />
    </Link>
  );
};

export default FooterLogos;
