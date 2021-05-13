import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Buscador from "./components/Buscador/Buscador";
import { Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route exact path="/" component={Buscador} />
    </React.Fragment>
  );
}

export default App;
