import React from "react";
import Logo from "../images/logo.png";

class Header extends React.Component {
  render() {
    return (
      <div className="page__header">
        <img
          className="page__header--img"
          src={Logo}
          alt="Logo Traductor Mimimi"
        />
      </div>
    );
  }
}

export default Header;
