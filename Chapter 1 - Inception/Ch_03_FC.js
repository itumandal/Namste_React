import React from "react";

const HeaderComponent = () => {
  return <h1>Namaste React from functional component</h1>;
};
//? Or the below one
const HeaderComponent2 = () => (
  <>
    <h1>Namaste React from functional component</h1>
  </>
);
export default HeaderComponent;
