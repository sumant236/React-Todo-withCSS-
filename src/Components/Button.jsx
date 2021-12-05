import React from "react";
import styles from "../Todo/Style.module.css";

const Button = ({ title, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
