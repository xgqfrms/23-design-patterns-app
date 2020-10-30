import React, {
  // useState,
  // useEffect,
  // Component,
} from "react";

// import "./style.css";

const App = (props) => {
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

export default App;
