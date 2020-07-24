import React, { useEffect, useState } from "react";

const Effect = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, [time]);
  return <h2> Time::{time.toLocaleTimeString()} </h2>;
};

export default Effect;
