import React from "react";
import Button from "../../components/button/button";
import ComponentTestStore from "./component1";
import useLocalStorage from "../../hook/useLocalStorage";
const Exercise1 = () => {
  const [nameContext, setNameContext] = useLocalStorage("name", "");
  const inputRef = React.useRef();
  React.useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.value = nameContext;
    }
  }, [nameContext]);

  return (
    <React.Fragment>
      <strong>
        EXERCISE #1 - Create a generic localStorage handler usable by React
        function component
      </strong>
      <input
        ref={inputRef}
        id="name"
        name="name"
        placeholder="enter name..."
        defaultValue={nameContext}
        style={{width: "200px"}}
      />
      <Button
        className=""
        text="Save"
        onClick={() => inputRef && inputRef.current && setNameContext(inputRef.current.value)}
      />
      <ComponentTestStore />
    </React.Fragment>
  );
};

export default Exercise1;
