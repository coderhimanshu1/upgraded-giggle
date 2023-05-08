import React, { useState } from "react";
import "./EightBall.css";

const EightBall = () => {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question");

  return (
    <div className="EightBall" style={{ backgroundColor: color }}>
      <h2>{message}</h2>
    </div>
  );
};

export default EightBall;
