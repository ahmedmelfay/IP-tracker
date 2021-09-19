import React from "react";
import headerStyles from "../../styles/header/header.module.scss";

const InfoCol = ({ title, value }) => {
  return (
    <div className={headerStyles.infoCol}>
      <p>{title}</p>
      {!value ? <span className={`loading__anim ${headerStyles.loading}`}></span> : <h2>{value}</h2>}
    </div>
  );
};

export default InfoCol;
