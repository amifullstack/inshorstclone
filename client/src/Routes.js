import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Home/Home";
import Users from "./Components/Users/Users";
import News from "./Components/News/News";

const AllRoutes = () => {
  return (
    <div>
      <Router>
        <Switch>
          {/*API*/}
          <Route path="/apis" component={API} />

          {/*Components*/}
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/news" component={News} />

          <Route component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
};

const API = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="http://localhost:5000/api/newsdata">New-API</a>
        </li>
        <li>
          <a href="http://localhost:5000/api/users">Users-API</a>
        </li>
      </ul>
    </div>
  );
};

const Notfound = () => <p>404!! Hold on the page you looking for not found</p>;
export default AllRoutes;
