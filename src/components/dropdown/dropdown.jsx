/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import DropdownList from "./dropdownlist";
import "./dropdown.css";
import { useBoolean } from "./../../hook/useBoolean";

const Dropdown = React.memo(function (props) {
  const {
    name = "",
    data = [],
    altName = "",
    className,
    placeholder = "",
    onChangeValue = () => {},
  } = props;

  const [valueChange, setValueChange] = React.useState("");
  const [isOpenDropList, { toggle: isHiden }] = useBoolean(false);
  const [options, setOptions] = React.useState([]);
  const [optionSelectedList, setOptionSelectedList] = React.useState([]);
  React.useEffect(() => {
    const getValueByKey = () => {
      const values = data.map((user) => {
        const keys = altName.split(".");
        return keys.reduce(function (prev, curr) {
          return prev[curr];
        }, user);
      });
      return values;
    };
    setOptions(getValueByKey());
  }, [data, altName]);

  return (
    <React.Fragment>
      <div name={"dropdown-filter-" + name} className={`dropdown ${className}`}>
        <div className="dropdown-wrapper">
          {optionSelectedList.map((option, i) => (
            <span
              key={"option-lable-" + i}
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                border: "solid 1px grey",
                height: "20px",
                padding: "10px",
              }}
            >
              {option}
            </span>
          ))}
          <input
            className="dropdown-input"
            name="dropdown-input"
            onFocus={() => isHiden()}
            onChange={(e) => setValueChange(e.target.value)}
            placeholder={placeholder}
            value={valueChange}
          />
          {isOpenDropList && (
            <DropdownList
              name={name}
              data={options}
              value={valueChange}
              onChange={(item) => {
                isHiden();
                setValueChange("");
                const optionsTemp = [...optionSelectedList];
                optionsTemp.includes(item)
                  ? optionSelectedList.splice(item)
                  : optionsTemp.push(item);
                setOptionSelectedList(optionsTemp);
                onChangeValue({ ...optionsTemp });
              }}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
});

export default Dropdown;
