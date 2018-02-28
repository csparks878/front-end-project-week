import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './styles/App.css';

import Menu from "./components/menu/menu";
import NewNote from "./components/newNote/newNote";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <div className="App__menu">
          <Route path="/" component={Menu} />
        </div>
        <div className="App__main">
          <Route path="/newnote" exact component={NewNote} />
        </div>
      </div>
    );
  }
}

export default App;
