import React from "react";
import "./App.css";
import Exercise2 from "./page/exercise2/exercise2";
import Exercise3 from "./page/exercise3/exercise3";
import Exercise1 from "./page/exercise1/exercise1";
import LocalStorageContext from "./context/localstorage";

function App() {
  
  const [localStorage, setLocalStorage] = React.useState({});

  return (
    <LocalStorageContext.Provider value={{localStorage, setLocalStorage}}>
    <div className="App ml-2">
      <Exercise1/>
      <Exercise2/>
      <Exercise3/>
    </div>
    </LocalStorageContext.Provider>
  );
}

export default App;