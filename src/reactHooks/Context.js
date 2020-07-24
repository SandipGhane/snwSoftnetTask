import React, { useContext, useState, createContext } from "react";

const UserContext = createContext([
  {
    first: "sandip",
    last: "ghane",
    age: 25,
    edu: "msc",
    suffix: 1,
  },
  (ob1) => ob1,
]);

export default UserContext;
