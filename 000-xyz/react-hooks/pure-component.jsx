import React, {
  // useState,
  // useEffect,
  // Component,
  PureComponent,
} from "react";

// import "./style.css";

// pccs, PureComponent Class With Constructor
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      id,
      name,
    } = props;
    return (
      <>
        <div>
          <p>id = {id || 2020}</p>
          <p>name = {name || xgqfrms}</p>
        </div>
      </>
    );
  }
}

export default App;


// pcs, PureComponent Class
class PCSApp extends PureComponent {
  state = { }
  render() {
    return (
      <>
        <p>Hello, React Pure Component!</p>
      </>
    );
  }
}

// export default PCSApp;

// pcsf, PureComponent Class FlowType

// type P = {
//  str: string,
// };

// type S = {
//   int: number,
// };

// class PCSFApp extends PureComponent<P, S> {
//   state = {  }
//   render() {
//     return (
//       <>
//         <p>pcsf, PureComponent Class FlowType</p>
//       </>
//     );
//   }
// }

// export default PCSFApp;
