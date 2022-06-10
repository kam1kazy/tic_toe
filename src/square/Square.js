import React from "react";
import style from "./Square.module.css";

const Square = (props) => {
  return (
    <button className={style.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
