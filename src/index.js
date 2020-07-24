import React from "react";
import { render } from "react-dom";

//Redux Stuff
import store from "./Task1/store/store";
import { Provider } from "react-redux";

//Assignment Stuff
import Task1 from "./Task1/gallary";
import Task2 from "./Task2/Task2";

const App = () => {
  return (
    <div className="App">
      <Task1 />
      <Task2 />
    </div>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
