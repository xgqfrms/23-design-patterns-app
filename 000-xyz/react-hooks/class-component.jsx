import React, {
  // useState,
  // useEffect,
  // Component,
} from "react";

// import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key1: 1,
      key2: 2,
      key3: 3,
    };
    // this.updateKey = this,this.updateKey.bind(this);
  }
  // updateKey(key, value) {
  //   this.setState({
  //     [key]: value,
  //   });
  // }
  updateKey = (key, value) => {
    this.setState({
      [key]: value,
    });
  }
  render() {
    const {
      key1,
      key2,
      key3,
    } = this.state;
    return (
      <div>
        <button className="app-btn" onClick={() => this.updateKey(`key1`, key1 + 1)}>
          {key1}
        </button>
        <button className="app-btn" onClick={() => this.updateKey(`key2`, key2 + 1)}>
          {key2}
        </button>
        <button className="app-btn" onClick={() => this.updateKey(`key3`, key3 + 1)}>
          {key3}
        </button>
      </div>
    );
  }
}
