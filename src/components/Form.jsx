// este componente debería contener el campo de entrada.

import React from "react";
import {useContext} from "react";
import UserContext from "../context/UserContext";

const Form = () => {
  const {user, setUser} = useContext(UserContext);

  return (
    <div>
      <label
        style={{
          fontSize: "18px",
          paddingLeft: "10px",
          alignItems: "center",
        }}
        htmlFor="user"
      >
        Dime tu nombre:{" "}
      </label>
      <input
        style={{
          fontSize: "18px",
          padding: "10px",
          margin: "5px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#f5f5f5",
        }}
        type="text"
        placeholder="Pepito Grillo"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
    </div>
  );
};

export default Form;
