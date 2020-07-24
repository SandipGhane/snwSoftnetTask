import React from "react";
import { useState, useEffect } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  //create hooks and initialise state as default state
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  //create id for specific dropdown
  const Dropdown = () => (
    <label htmlFor={id}>
      {" "}
      {label}{" "}
      <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={options.length === 0}
      >
        <option> All </option>{" "}
        {options.map((item) => (
          <option key={item} value={item}>
            {" "}
            {item}{" "}
          </option>
        ))}{" "}
      </select>{" "}
    </label>
  );
  return [state, Dropdown, setState];
};

export default useDropdown;
