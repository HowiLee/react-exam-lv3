import useLocalStorage from "../../hook/useLocalStorage";

const ComponentTestStore = () => {
  const [name] = useLocalStorage("name");
  return (
    <div>
      <h3>Component check value local storage</h3>
      <p>local stogare has key: name and value: {name} </p>
    </div>
  );
};
export default ComponentTestStore;
