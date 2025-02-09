import React, { useState } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { Task, NewTask } from "../types/types";
import TodoSection from "./TodoSection";
import InProgressSection from "./InProgressSection";
import CompletedSection from "./CompleteSection";
import classes from "./task-tracker.module.scss";
import { useAppSelector } from "@/redux/store";

const TaskTracker: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Interview with Design Team",
      dueDate: "Today",
      status: "TO-DO",
      category: "WORK",
    },
    {
      id: 2,
      title: "Team Meeting",
      dueDate: "30 Dec, 2024",
      status: "TO-DO",
      category: "PERSONAL",
    },
    {
      id: 3,
      title: "Morning Workout",
      dueDate: "Today",
      status: "IN-PROGRESS",
      category: "WORK",
    },
    {
      id: 4,
      title: "Submit Project Proposal",
      dueDate: "Today",
      status: "COMPLETED",
      category: "WORK",
    },
  ]);

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

  const handleAddTask = (newTask: NewTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const handleEditTask = (task: Task) => {
    console.log(task);
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const reorderTasks = (list: Task[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedTasks = reorderTasks(
      tasks,
      result.source.index,
      result.destination.index
    );
    setTasks(reorderedTasks);
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
          tasks={tasks.filter((task) => task.status === "TO-DO")}
          todoViewToggle={todoViewToggle}
          handleCompoToggle={() => handleCompoToggle(1)}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
        <InProgressSection
          tasks={tasks.filter((task) => task.status === "IN-PROGRESS")}
          progressViewToggle={progressViewToggle}
          handleCompoToggle={() => handleCompoToggle(2)}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
        <CompletedSection
          tasks={tasks.filter((task) => task.status === "COMPLETED")}
          completeViewToggle={completeViewToggle}
          handleCompoToggle={() => handleCompoToggle(3)}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
      </DragDropContext>
    </div>
  );
};

export default TaskTracker;
