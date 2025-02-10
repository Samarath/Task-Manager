import React, { useState } from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { TasksType } from "../types/types";
import TaskRow from "../tasks/TaskRow";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import classes from "./task-tracker.module.scss";
import AddTask from "../tasks/AddTask";
import { Button } from "@mui/material";
import AddTaskIcon from "@/assests/svg-icons/AddTaskIcon";

interface TodoSectionProps {
  tasks: TasksType[];
  todoViewToggle: boolean;
  handleCompoToggle: () => void;
}

const TodoSection: React.FC<TodoSectionProps> = ({
  tasks,
  todoViewToggle,
  handleCompoToggle,
}) => {
  const [toggleAddButton, setToggleAddButton] = useState(false);

  return (
    <div className={classes.section}>
      <div
        className={`${classes.sectionHeader} ${classes.todo}`}
        onClick={handleCompoToggle}
      >
        <h2 className="font-semibold">Todo ({tasks.length})</h2>
        <span className={classes.toggle}>
          {todoViewToggle ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </span>
      </div>
      {todoViewToggle && (
        <>
          <div className={classes["add-task"]}>
            <div className={classes["btn"]}>
              <Button
                variant="contained"
                color="primary"
                className={classes.addTaskButton}
                onClick={() => setToggleAddButton(!toggleAddButton)}
              >
                <AddTaskIcon />
              </Button>
            </div>

            {toggleAddButton && <AddTask />}
          </div>
          <Droppable droppableId="todoTasks">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {tasks.map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TaskRow task={task} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </>
      )}
    </div>
  );
};

export default TodoSection;
