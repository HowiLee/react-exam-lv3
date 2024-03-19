import React from "react";
import Dropdown from "../../components/dropdown/dropdown";

const Exercise3 = () => {
  const [userList, setUserList] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserList(data));
  }, []);

  return (
    <React.Fragment>
      <strong>
        EXERCISE #3 - Create a generic auto-filter dropdown component to filter
        any kind of data
      </strong>
      <div style={{display: 'flex', flexDirection: 'row'}}>
      <Dropdown
        name="name"
        altName="name"
        data={userList}
        className="mt-1 mr-4"
        placeholder="Enter Name"
        onChangeValue={(e)=>console.log("name: ", e)}
      />
      <Dropdown
        name="city"
        altName="address.city"
        data={userList}
        className="mt-1 mr-4"
        placeholder="Enter city"
        onChangeValue={(e)=>console.log("address.city: ", e)}
      />
      <Dropdown
        name="companyName"
        altName="company.name"
        data={userList}
        className="mt-1 mr-4"
        placeholder="Enter company name"
        onChangeValue={(e)=>console.log("company.name: ", e)}
      />
      </div>
    </React.Fragment>
  );
};
export default Exercise3;
