import React from "react";
import TooltipMenu from "../tool-tip-menu/ToolTipMenu";
import classes from "./board-card.module.scss";

interface BoardCardProps {
  title: string;
  category: string;
  date: string;
  onClick?: () => void;
}

const BoardCard: React.FC<BoardCardProps> = ({
  title,
  category,
  date,
  onClick,
}) => {
  return (
    <div className={classes["board-card"]} onClick={onClick}>
      <div className={classes["board-content"]}>
        <div className={classes["board-header"]}>
          <h2 className={classes["board-title"]}>{title}</h2>
          <button
            className={classes["board-more"]}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <TooltipMenu />
          </button>
        </div>
        <div className={classes["board-footer"]}>
          <span className={classes["board-category"]}>{category}</span>
          <span className={classes["board-date"]}>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
