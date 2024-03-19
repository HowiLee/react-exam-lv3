import React from "react";

export const useBoolean = (defaultValue) => {
  const [value, setValue] = React.useState(defaultValue);
  return [value, { toggle: () => setValue(!value) }];
};
