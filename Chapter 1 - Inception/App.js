/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Ch_03_CodingAssignment";
import HeaderComponent from "./Ch_03_FC";
import FoodVilla from "./FoodVilla";

function App() {
  return (
    <>
      <FoodVilla />
    </>
  );
}

/*
const heading = (
  <div>
    {Title()}
    <HeaderComponent />
    <Header />
  </div>
);
*/
// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading, heading2]
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
