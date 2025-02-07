import classes from "./boards.module.scss";

const Boards = () => {
  return (
    <div className={classes.boardContainer}>
      <div className={classes.boardBox}>
        <span className={classes["board-todo-title"]}>ToDo</span>
      </div>
      <div className={classes.boardBox}>
        <span className={classes["board-progress-title"]}>Progress</span>
      </div>
      <div className={classes.boardBox}>
        <span className={classes["board-complete-title"]}>Complete</span>
      </div>
    </div>
  );
};

export default Boards;
