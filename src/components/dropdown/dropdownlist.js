import React from "react";
const DropdownList = React.memo(function (props) {
  const {name = "", data = [], value, onChange = () => {} } = props;
  const ref =React.useRef();
  const dataFilter = data.filter((item) =>
    String(item).match(new RegExp(value, "i"))
  );

  const makeBold = (e) =>
    String(e).replace(new RegExp(value, "i"), "<strong>$&</strong>");
  return (
    <div ref={ref} name={"dropdown-list-"+name} className="dropdown-list">
      <ul>
        {dataFilter.map((item, i) => {
          return (
            <li key={"optionKey" + i} onClick={()=> {
              onChange(item);
              }}>
              <span
                dangerouslySetInnerHTML={{
                  __html: makeBold(item),
                }}
              ></span>
            </li>
          );
        })}
        {dataFilter.length === 0 && (
          <li className="no-result">No results found</li>
        )}
      </ul>
    </div>
  );
});

export default DropdownList;
