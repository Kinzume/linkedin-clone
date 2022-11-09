import React from "react";
import "./InputOption.css";
// className="inputOption"
function InputOption({ Icon, title, color }) {
  return (
    <div className={`inputOption ${title.toLowerCase()}`}>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
