// import React, {
//   // useState,
//   // useEffect,
//   // Component,
//   PureComponent,
// } from "react";

// import { FlowFlags } from "typescript";
// FlowFlags

// import "./style.css";

import * as React from 'react';

// pcsf, PureComponent Class FlowType

type P = {
 str: string,
};

type S = {
  int: number,
};

class PCSFApp extends PureComponent<P, S> {
  state = {  }
  render() {
    return (
      <>
        <p>pcsf, PureComponent Class FlowType</p>
      </>
    );
  }
}

export default PCSFApp;
