import { FC, useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Task, NewTask } from "../types/types";
import TaskRow from "../tasks/TaskRow";
import AddTask from "../tasks/AddTask";
import classes from "./task-tracker.module.scss";

const TaskTracker: FC = () => {
  const [tasks, setTasks] = useState([
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

  const getTasksByStatus = (status: Task["status"]) =>
    tasks.filter((task) => task.status === status);

  const handleAddTask = (newTask: NewTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const handleEditTask = (task: Task) => {
    console.log(task);
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

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

  return (
    <div className={classes["container"]}>
      <div className={classes.headers}>
        <div className={classes.header}>Task name</div>
        <div className={classes.header}>Due on</div>
        <div className={classes.header}>Task Status</div>
        <div className={classes.header}>Task Category</div>
        <div className={classes.header}></div>
      </div>

      <div className={classes.section}>
        <div className={`${classes.sectionHeader} ${classes.todo}`}>
          <h2 className="font-semibold">
            Todo ({getTasksByStatus("TO-DO").length})
          </h2>
          <span onClick={() => handleCompoToggle(1)} className={classes.toggle}>
            {todoViewToggle ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </span>
        </div>
        {todoViewToggle ? (
          <div>
            {getTasksByStatus("TO-DO").map((task) => (
              <TaskRow
                key={task.id}
                task={task}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className={classes.section}>
        <div className={`${classes.sectionHeader} ${classes.inProgress}`}>
          <h2 className="font-semibold">
            In-Progress ({getTasksByStatus("IN-PROGRESS").length})
          </h2>
          <span onClick={() => handleCompoToggle(2)} className={classes.toggle}>
            {progressViewToggle ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </span>
        </div>
        {progressViewToggle ? (
          <div>
            {getTasksByStatus("IN-PROGRESS").map((task) => (
              <TaskRow
                key={task.id}
                task={task}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className={classes.section}>
        <div className={`${classes.sectionHeader} ${classes.completed}`}>
          <h2 className="font-semibold">
            Completed ({getTasksByStatus("COMPLETED").length})
          </h2>
          <span onClick={() => handleCompoToggle(3)} className={classes.toggle}>
            {completeViewToggle ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </span>
        </div>
        {completeViewToggle ? (
          <div>
            {getTasksByStatus("COMPLETED").map((task) => (
              <TaskRow
                key={task.id}
                task={task}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TaskTracker;
