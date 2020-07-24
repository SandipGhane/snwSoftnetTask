import React, { useState, useEffect } from "react";

const State = () => {
  const [isGreen, setIsGreen] = useState(true);

  return (
    <h2
      onClick={() => setIsGreen(!isGreen)}
      style={{ color: isGreen ? "green" : "red" }}
    >
      useState Example
    </h2>
  );
};

export default State;
