import React, { Component } from "react";
import NavBar from "./components/common/navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import NewAttendance from "./components/newAttendance";
import NotFound from "./components/common/notFound";
import PreviousAttendance from "./components/previousAttendance";
import About from "./components/about";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ToastContainer />
        <Switch>
          <Route path="/new" component={NewAttendance} />
          <Route path="/previous" component={PreviousAttendance} />
          <Route path="/about" component={About} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/new" />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
