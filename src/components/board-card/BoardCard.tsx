import React from "react";
import TooltipMenu from "../tool-tip-menu/ToolTipMenu";
import classes from "./board-card.module.scss";
import { TasksType } from "../types/types";

interface BoardCardProps {
  task: TasksType;
}

const BoardCard: React.FC<BoardCardProps> = ({ task }) => {
  return (
    <div className={classes["board-card"]}>
      <div className={classes["board-content"]}>
        <div className={classes["board-header"]}>
          <h2 className={classes["board-title"]}>{task.title}</h2>
          <button
            className={classes["board-more"]}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <TooltipMenu task={task} />
          </button>
        </div>
        <div className={classes["board-footer"]}>
          <span className={classes["board-category"]}>{task.category}</span>
          <span className={classes["board-date"]}>{task.date[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
