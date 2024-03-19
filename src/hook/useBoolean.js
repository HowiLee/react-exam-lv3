import React from "react";

export const useBoolean = (defaultValue) => {
  const [value, setValue] = React.useState(defaultValue);
  return [value, { setTrue: () => setValue(true), setFalse: () => setValue(false)  }];
};
