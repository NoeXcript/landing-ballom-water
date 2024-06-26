import "./styles.css";
import React from "react";

function Button({ text }) {
  return (
    <button type="button" className="button">
      {text}
    </button>
  );
}

export default Button;
