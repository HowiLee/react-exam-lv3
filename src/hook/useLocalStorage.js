/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import LocalStorageContext from "../context/localstorage";
import { LocalStorageUtil } from "../utils";

const useLocalStorage = (key, defaultValue) => {
  const { localStorage = {}, setLocalStorage } =
    React.useContext(LocalStorageContext);

  React.useEffect(() => {
    const obj = {...localStorage};
    let value = LocalStorageUtil.getItem(key) || defaultValue;
      obj[key] = value;
    setLocalStorage({...obj});
  }, [defaultValue, key]);

  React.useEffect(() => {
    const changeValueFromLocalStorageBrower = (e) => {
      if (e.key) {
        const obj = { ...localStorage };
        if(e.newValue && e.newValue !== "undefined"){
          obj[key] = JSON.parse(e.newValue);
        } else {
          obj[key] = defaultValue
        }
        setLocalStorage({ ...obj });
      }
    };
    window.addEventListener("storage", changeValueFromLocalStorageBrower);
    return () => {
      window.removeEventListener("storage", changeValueFromLocalStorageBrower);
    };
  }, [key, localStorage]);

  const setValue = React.useCallback(
    (value) => {
      LocalStorageUtil.setItem(key, value);
      const obj = {...localStorage};
      obj[key] = value;
      setLocalStorage({ ...obj });
    },
    [key, localStorage]
  );

  const getValue = React.useCallback(
    () =>
      Object.keys(localStorage).includes(key)
        ? localStorage[key]
        : defaultValue,
    [defaultValue, key, localStorage]
  );

  return [getValue(), setValue];
};

export default useLocalStorage;
