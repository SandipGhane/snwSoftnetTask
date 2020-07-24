import React, { useState, useContext } from "react";
import UserContext from "./Context";

const UseContext = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <h5> {`${user.first} ${user.last} the ${user.suffix} born`} </h5>{" "}
      <button
        onClick={() => {
          setUser(
            Object.assign({}, user, {
              suffix: user.suffix + 1,
            })
          );
        }}
      >
        Increment{" "}
      </button>{" "}
    </div>
  );
};

export default UseContext;
