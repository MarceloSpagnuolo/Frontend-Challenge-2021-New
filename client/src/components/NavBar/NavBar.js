import React from "react";
import Logo from "../../libros.png";

import "./NavBar.css";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="Titulo">
        <img
          id="logoHenry"
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        <h2>The Books Db</h2>
      </div>
    </header>
  );
}
