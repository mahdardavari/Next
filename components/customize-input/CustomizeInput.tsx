import React, { FC, InputHTMLAttributes } from "react";
import styles from "./CustomizeInput.module.scss";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  lable?: string;
}

const Input: FC<InputProps> = ({ name, lable, ...rest }) => {
  return (
    <div
      className={`${styles.inputWrapper}`}
    >
      <label htmlFor={name}>{lable}</label>
      <input id={name}></input>
    </div>
  );
};
export default Input;
