import React, { Component } from "react";

import Item from "./Item";
import ItemSync from './ItemSync';

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleToggle = () => {
    this.setState({ show: !this.state.show });
  };

  handleToggleSync = () => {
    this.setState({ showSync: !this.state.showSync });
  };

  render() {
    const a = [];
    const { show, showSync } = this.state;
    const len = 500;
    for (var i = 0; i < len; i++) {
      a[i] = i;
    }
    return (
      <div>
        <div className='container'>
          <button style={{ fontSize: '36px' }} onClick={this.handleToggle}>Render {len} items with setImmediate</button>
          <h1>setImmediate</h1>
          {show && a.map(v => (
            <Item key={v} />
          ))}
        </div>
        <div className='container'>
          <button style={{ fontSize: '36px' }} onClick={this.handleToggleSync}>Render {len} items sync</button>
          <h1>sync</h1>
          {showSync && a.map(v => (
            <ItemSync key={v} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
