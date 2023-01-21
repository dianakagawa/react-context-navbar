// este componente debe ajustar la barra de navegación y los componentes FormWrapper (y accederá a useState).

import React, {useState} from "react";
import UserContext from "../context/UserContext";

const Wrapper = ({children}) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{user, setUser}}>
      <div>{children}</div>
    </UserContext.Provider>
  );
};

export default Wrapper;
