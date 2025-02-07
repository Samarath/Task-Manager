"use client";
import BoardView from "@/assests/svg-icons/BoardView";
import ListView from "@/assests/svg-icons/ListViewIcon";
import Filters from "@/components/filters/Filter";
import Header from "@/components/header/Header";
import React, { useState } from "react";
import classes from "./task.module.scss";
import TaskTracker from "@/components/task-tracker/TaskTracker";
import Boards from "@/components/boards/Boards";

const Task: React.FC = () => {
  const [toggle, setToggle] = useState(1);

  const handleToggle = (id: number) => {
    setToggle(id);
  };
  return (
    <div className={classes["task-container"]}>
      <Header />
      <div className={classes["view-toggle"]}>
        <span
          className={classes[toggle === 1 ? "border" : ""]}
          onClick={() => handleToggle(1)}
        >
          <ListView />
        </span>
        <span
          className={classes[toggle === 2 ? "border" : ""]}
          onClick={() => handleToggle(2)}
        >
          <BoardView />
        </span>
      </div>
      <Filters />
      {toggle === 1 ? <TaskTracker /> : <Boards />}
    </div>
  );
};

export default Task;
