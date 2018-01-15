import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <a href="/users">Users</a>
        <a href="/news">News</a>
      </div>
    );
  }
}

export default Home;
