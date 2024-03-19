import React from "react";

const LocalStorageContext = React.createContext({
  localStorage: {},
  setLocalStorage: () => {},
});

export default LocalStorageContext;
