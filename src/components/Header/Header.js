import React from "react";
import headerStyles from "../../styles/header/header.module.scss";
import Info from "./Info";
import Search from "./Search";

const Header = () => {
  return (
    <header id={headerStyles.header}>
      <div className="container">
        <div className={headerStyles.innerHeader}>
          <div className={headerStyles.title}>
            <h1>IP Address Tracker</h1>
          </div>
          <Search />
          <Info />
        </div>
      </div>
    </header>
  );
};

export default Header;
