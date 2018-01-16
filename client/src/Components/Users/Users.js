import React, { Component } from "react";
import "./Users.css";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Nested states
      // users: {
      //   name: ["q", "w"],
      //   id: ["1", "2"]
      // }
      users: []
    };
  }

  componentDidMount() {
    fetch("/api/users")
      .then(res => res.json())
      .then(usersData =>
        this.setState({ users: usersData.users }, () =>
          console.log(`Users Fetched from API`, usersData)
        )
      ); // data
  }

  render() {
    return (
      <div>
        {/*<h1>First User: {this.state.users.name[0]}</h1>
        <p>ID: {this.state.users.id[0]}</p>*/}
        <h2>Users</h2>
        <ul>{this.state.users.map(users => <li>{users.fname}</li>)}</ul>
      </div>
    );
  }
}

export default Users;
