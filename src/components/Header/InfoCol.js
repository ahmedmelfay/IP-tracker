import React from "react";
import headerStyles from "../../styles/header/header.module.scss";

const InfoCol = ({ title, value }) => {
  return (
    <div className={headerStyles.infoCol}>
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
};

export default InfoCol;
