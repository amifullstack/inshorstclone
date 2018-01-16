import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/apis">API's</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/users">Users</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
