import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { Task } from "../types/types";
import TaskRow from "../tasks/TaskRow";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import classes from "./task-tracker.module.scss";

interface InProgressSectionProps {
  tasks: Task[];
  progressViewToggle: boolean;
  handleCompoToggle: () => void;
  handleEditTask: (task: Task) => void;
  handleDeleteTask: (taskId: number) => void;
}

const InProgressSection: React.FC<InProgressSectionProps> = ({
  tasks,
  progressViewToggle,
  handleCompoToggle,
  handleEditTask,
  handleDeleteTask,
}) => {
  return (
    <div className={classes.section}>
      <div
        className={`${classes.sectionHeader} ${classes.inProgress}`}
        onClick={handleCompoToggle}
      >
        <h2 className="font-semibold">In-Progress ({tasks.length})</h2>
        <span className={classes.toggle}>
          {progressViewToggle ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </span>
      </div>
      {progressViewToggle && (
        <Droppable droppableId="inProgressTasks">
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
                      <TaskRow
                        task={task}
                        onEdit={handleEditTask}
                        onDelete={handleDeleteTask}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </div>
  );
};

export default InProgressSection;
