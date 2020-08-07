// Import the react and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// create a react component

// function () can also be written as () =>
const App = () => {
  const getButtonText = { text: "Click me !!" };
  return (
    <div>
      <h1 className="header" style={{ backgroundColor: "red", color: "white" }}>
        This is a test text
      </h1>
      <button style={{ border: "red solid 1px" }}>
        {" "}
        {getButtonText.text.toUpperCase()}
      </button>
    </div>
  );
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
