import InputCSS from "./Input.module.css";
import React from "react";

function Input({ id, type, name, value, onChange, label, innerRef }) {
  return (
    <div className={InputCSS.input}>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        ref={innerRef} //apply to innerRef instead of ref to prevent 'functions cannot be given refs' used to clear file inputs
        required
      />
      <span className={InputCSS.highlight}></span>
      <span className={InputCSS.bar}></span>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
export default Input;
