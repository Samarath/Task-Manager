import { FC } from "react";
import { Status, Task, TasksType } from "../types/types";
import classes from "./task-row.module.scss";
import CheckMark from "@/assests/svg-icons/CheckMark";
import TooltipMenu from "../tool-tip-menu/ToolTipMenu";
import TaskStatusToolTipMenu from "../task-status-tool-tip-menu/TaskStatusToolTipMenu";
import DragIcon from "@/assests/svg-icons/DragIcon";
import GreenCheckMark from "@/assests/svg-icons/GreenCheckMark";

interface TaskRowProps {
  task: TasksType;
  onEdit?: (task: Task) => void;
  onDelete?: (taskId: number) => void;
}

const TaskRow: FC<TaskRowProps> = ({ task }) => {
  return (
    <div className={classes.taskRow}>
      <div className={classes.grid}>
        <div className={classes.titleCell}>
          <input type="checkbox" />
          <div className={classes.titles}>
            <span>
              <DragIcon />
            </span>
            <span>
              {task.status === Status.Completed ? (
                <GreenCheckMark />
              ) : (
                <CheckMark />
              )}
            </span>
            <span>{task.title}</span>
          </div>
        </div>
        <div className={classes["dates"]}>{task.date[0]}</div>
        <div>
          <TaskStatusToolTipMenu status={task.status} />
        </div>
        <div className="flex items-center justify-between">
          <span
            className={`${classes.badge} ${
              classes[task.category.toLowerCase()]
            }`}
          >
            {task.category}
          </span>
        </div>
        <div>
          <TooltipMenu task={task} />
        </div>
      </div>
    </div>
  );
};

export default TaskRow;
