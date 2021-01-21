import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello TMS! World!</h1>
        <h3>and everybody</h3>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
