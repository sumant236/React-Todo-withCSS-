import styles from "./Style.module.css";

const TodoItem = ({ id, status, title, handleDelete, handleToggle }) => {
  if (status == "true") {
    var Toggle = {
      background: "green"
    };
  }
  return (
    <div className={styles.list}>
      <span>{`${id} : ${title}`}</span>
      <div>
        <button
          className={styles.toggle}
          style={Toggle}
          onClick={() => handleToggle(id)}
        >{`${status}`}</button>
        <button className={styles.delete} onClick={() => handleDelete(id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
