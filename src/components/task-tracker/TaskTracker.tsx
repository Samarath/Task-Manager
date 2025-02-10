import React, { useState } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { Status } from "../types/types";
import TodoSection from "./TodoSection";
import InProgressSection from "./InProgressSection";
import CompletedSection from "./CompleteSection";
import classes from "./task-tracker.module.scss";
import { useAppSelector } from "@/redux/store";

const TaskTracker: React.FC = () => {
  const [todoViewToggle, setTodoViewToggle] = useState(false);
  const [progressViewToggle, setProgressViewToggle] = useState(false);
  const [completeViewToggle, setCompleteViewToggle] = useState(false);
  const { taskList } = useAppSelector((state) => state.taskManager);
  console.log(taskList);

  const handleCompoToggle = (id: number) => {
    if (id === 1) {
      setTodoViewToggle(!todoViewToggle);
    }
    if (id === 2) {
      setProgressViewToggle(!progressViewToggle);
    }
    if (id === 3) {
      setCompleteViewToggle(!completeViewToggle);
    }
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    // Implement your logic for handling drag and drop here
  };

  return (
    <div className={classes["container"]}>
      <div className={classes.headers}>
        <div className={classes.header}>Task name</div>
        <div className={classes.header}>Due on</div>
        <div className={classes.header}>Task Status</div>
        <div className={classes.header}>Task Category</div>
        <div className={classes.header}></div>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <TodoSection
          tasks={taskList.filter((task) => task.status === Status.ToDo)}
          todoViewToggle={todoViewToggle}
          handleCompoToggle={() => handleCompoToggle(1)}
        />
        <InProgressSection
          tasks={taskList.filter((task) => task.status === Status.InProgress)}
          progressViewToggle={progressViewToggle}
          handleCompoToggle={() => handleCompoToggle(2)}
        />
        <CompletedSection
          tasks={taskList.filter((task) => task.status === Status.Completed)}
          completeViewToggle={completeViewToggle}
          handleCompoToggle={() => handleCompoToggle(3)}
        />
      </DragDropContext>
    </div>
  );
};

export default TaskTracker;
