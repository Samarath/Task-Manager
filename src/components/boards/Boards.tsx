import { useAppSelector } from "@/redux/store";
import BoardCard from "../board-card/BoardCard";
import classes from "./boards.module.scss";
import { Status } from "../types/types";

const Boards: React.FC = () => {
  const { taskList } = useAppSelector((state) => state.taskManager);

  return (
    <div className={classes.boardContainer}>
      <div className={classes.boardBox}>
        <span className={classes["board-todo-title"]}>ToDo</span>
        {taskList
          .filter((task) => task.status === Status.ToDo)
          .map((task) => (
            <BoardCard key={task.id} task={task} />
          ))}
      </div>
      <div className={classes.boardBox}>
        <span className={classes["board-progress-title"]}>Progress</span>
        {taskList
          .filter((task) => task.status === Status.InProgress)
          .map((task) => (
            <BoardCard key={task.id} task={task} />
          ))}
      </div>
      <div className={classes.boardBox}>
        <span className={classes["board-complete-title"]}>Complete</span>
        {taskList
          .filter((task) => task.status === Status.Completed)
          .map((task) => (
            <BoardCard key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default Boards;
