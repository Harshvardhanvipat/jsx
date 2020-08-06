// Import the react and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// create a react component

// function () can also be written as () =>
const App = () => {
  return <div> Hi there </div>;
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
