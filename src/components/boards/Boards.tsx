import BoardCard from "../board-card/BoardCard";
import classes from "./boards.module.scss";

const Boards = () => {
  return (
    <div className={classes.boardContainer}>
      <div className={classes.boardBox}>
        <span className={classes["board-todo-title"]}>ToDo</span>
        <BoardCard
          title="Interview with Design Team"
          category="Work"
          date="Today"
          onClick={() => {
            console.log("card clicked");
          }}
        />

        <BoardCard
          title="Interview with Design Team"
          category="Work"
          date="Today"
          onClick={() => {
            console.log("card clicked");
          }}
        />
      </div>
      <div className={classes.boardBox}>
        <span className={classes["board-progress-title"]}>Progress</span>
        <BoardCard
          title="Interview with Design Team"
          category="Work"
          date="Today"
          onClick={() => {
            console.log("card clicked");
          }}
        />{" "}
        <BoardCard
          title="Interview with Design Team"
          category="Work"
          date="Today"
          onClick={() => {
            console.log("card clicked");
          }}
        />
      </div>
      <div className={classes.boardBox}>
        <span className={classes["board-complete-title"]}>Complete</span>
        <BoardCard
          title="Interview with Design Team"
          category="Work"
          date="Today"
          onClick={() => {
            console.log("card clicked");
          }}
        />
        <BoardCard
          title="Interview with Design Team"
          category="Work"
          date="Today"
          onClick={() => {
            console.log("card clicked");
          }}
        />
      </div>
    </div>
  );
};

export default Boards;
