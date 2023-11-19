import React, { Component } from "react";
import { render } from "react-dom";
import {HomePage} from "./HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import {CreateRoomPage} from "./CreateRoomPage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <p>This</p>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
