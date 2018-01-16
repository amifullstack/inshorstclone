import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";

import Users from "./Components/Users/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
