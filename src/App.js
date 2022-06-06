import React,{useState} from "react";
import "./style.css";

export default function App() {
  let[test, setTest] = useState(0);

  function Inc(){
    setTest(test+1);
  }

  function Dec(){
    setTest(test-1);
  }
  return (
    <>
      <button onClick={Inc}>+</button>
      <h1>{test}</h1>
      <button onClick={Dec}>-</button>
    </>
  );
}
