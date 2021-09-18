import React from "react";
import { h1, p } from "./components/create-element";
import ClassComponent from "./components/class-component";
import PureComponent from "./components/pure-component";
import FunctionalComponent from "./components/functional-component";
import Counter from "./components/counter";

function App() {
  return (
    <div className="wrapper">
      <h1>Hello world!</h1>
      <div className="components-wrapper">
        {React.createElement("div", null, h1, p)}
        <ClassComponent />
        <PureComponent />
        <FunctionalComponent />
      </div>
      <Counter />
    </div>
  );
}

export default App;
