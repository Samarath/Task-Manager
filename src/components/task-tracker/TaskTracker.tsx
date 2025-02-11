import React, { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { Status } from "../types/types";
import TodoSection from "./TodoSection";
import InProgressSection from "./InProgressSection";
import CompletedSection from "./CompleteSection";
import classes from "./task-tracker.module.scss";
import { useAppSelector } from "@/redux/store";
import NotFound from "@/assests/svg-icons/NotFound";

const TaskTracker: React.FC = () => {
  const [todoViewToggle, setTodoViewToggle] = useState(false);
  const [progressViewToggle, setProgressViewToggle] = useState(false);
  const [completeViewToggle, setCompleteViewToggle] = useState(false);
  const { taskList, searchList, search } = useAppSelector(
    (state) => state.taskManager
  );

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
  };

  const handleData = (type: string) => {
    if (type === "todo") {
      return searchList.length
        ? searchList.filter((task) => task.status === Status.ToDo)
        : taskList.filter((task) => task.status === Status.ToDo);
    }
    if (type === "progress") {
      return searchList.length
        ? searchList.filter((task) => task.status === Status.InProgress)
        : taskList.filter((task) => task.status === Status.InProgress);
    }

    return searchList.length
      ? searchList.filter((task) => task.status === Status.Completed)
      : taskList.filter((task) => task.status === Status.Completed);
  };

  return (
    <div className={classes["container"]}>
      {search && searchList.length === 0 ? (
        <div className={classes["not-found"]}>
          <div className={classes["icon"]}>
            <span>
              <NotFound />
            </span>

            <p>It looks like we can&lsquot find any results that match.</p>
          </div>
        </div>
      ) : (
        <>
          <div className={classes.headers}>
            <div className={classes.header}>Task name</div>
            <div className={classes.header}>Due on</div>
            <div className={classes.header}>Task Status</div>
            <div className={classes.header}>Task Category</div>
            <div className={classes.header}></div>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <TodoSection
              tasks={handleData("todo")}
              todoViewToggle={todoViewToggle}
              handleCompoToggle={() => handleCompoToggle(1)}
            />
            <InProgressSection
              tasks={handleData("progress")}
              progressViewToggle={progressViewToggle}
              handleCompoToggle={() => handleCompoToggle(2)}
            />
            <CompletedSection
              tasks={handleData("completed")}
              completeViewToggle={completeViewToggle}
              handleCompoToggle={() => handleCompoToggle(3)}
            />
          </DragDropContext>
        </>
      )}
    </div>
  );
};

export default TaskTracker;
