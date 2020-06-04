import React from "react";

function DashNew(props) {
  let result = props.arr1;
  let newarr=result.map(a => a.site);
  console.log(newarr);
  return (
    <h1>{newarr}</h1>
  );
}

export default DashNew;
