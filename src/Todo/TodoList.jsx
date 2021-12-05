import React, { useState } from "react";
import Button from "../Components/Button";
import styles from "./Style.module.css";

const TodoList = ({ onTextCreate }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    onTextCreate(text);
  };
  return (
    <div>
      <input
        className={styles.btn}
        type="text"
        value={text}
        placeholder="Write Something"
        onChange={handleChange}
      />
      <Button title="+" onClick={handleClick} />
    </div>
  );
};

export default TodoList;
