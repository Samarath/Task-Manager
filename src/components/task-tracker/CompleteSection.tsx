import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { Task } from "../types/types";
import TaskRow from "../tasks/TaskRow";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import classes from "./task-tracker.module.scss";

interface CompletedSectionProps {
  tasks: Task[];
  completeViewToggle: boolean;
  handleCompoToggle: () => void;
  handleEditTask: (task: Task) => void;
  handleDeleteTask: (taskId: number) => void;
}

const CompletedSection: React.FC<CompletedSectionProps> = ({
  tasks,
  completeViewToggle,
  handleCompoToggle,
  handleEditTask,
  handleDeleteTask,
}) => {
  return (
    <div className={classes.section}>
      <div
        className={`${classes.sectionHeader} ${classes.completed}`}
        onClick={handleCompoToggle}
      >
        <h2 className="font-semibold">Completed ({tasks.length})</h2>
        <span className={classes.toggle}>
          {completeViewToggle ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </span>
      </div>
      {completeViewToggle && (
        <Droppable droppableId="completedTasks">
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

export default CompletedSection;
