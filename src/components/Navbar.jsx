//  este componente debe ser tu barra de navegación que contiene el saludo. No admite ninguna propiedad.

import React from "react";
import UserContext from "../context/UserContext";
import {useContext} from "react";

const Navbar = () => {
  const {user} = useContext(UserContext);

  return (
    <div
      style={{
        backgroundColor: "rebeccapurple",
        color: "white",
        padding: "10px",
        marginBottom: "10px",
        alignContent: "center",
        textAlign: "right",
        fontSize: "16px",
      }}
    >
      <h1>¡Hola, {user}!</h1>
    </div>
  );
};

export default Navbar;
