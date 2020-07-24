import React, { useState, useRef, useEffect } from "react";

const useRRef = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const numRef = useRef(0);

  function incremnetState() {
    setStateNumber(stateNumber + 1);
    numRef.current++;
    setTimeout(
      () => alert(`state: ${stateNumber} | ref: ${numRef.current}`),
      1000
    );
  }
  return (
    <div>
      <h2> useRef example </h2>{" "}
      <button onClick={incremnetState}> Increment </button>{" "}
      <h3> state: {stateNumber} </h3>
      <h3> ref: {numRef.current} </h3>{" "}
    </div>
  );
};

export default useRRef;
