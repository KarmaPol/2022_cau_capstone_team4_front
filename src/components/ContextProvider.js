import React, { createContext, useState } from "react";

const Context = createContext({
  loggedUser: "",
  loggedIn: false,
  loggedUserData: {},

  actions: {
    setLoggedUser: () => {},
    setLoggedIn: () => {},
    setLoggedUserData: () => {},
  },
});

const ContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("Token") ? true : false
  );
  // 토큰 저장
  const [loggedUser, setLoggedUser] = useState(localStorage.getItem("Token"));
  const [loggedUserData, setLoggedUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  // 유저 정보 저장

  const value = {
    loggedUser,
    loggedUserData,
    loggedIn,
    actions: { setLoggedUserData, setLoggedUser, setLoggedIn },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const ContextConsumer = Context.Consumer;

export { ContextProvider, ContextConsumer };

export default Context;
