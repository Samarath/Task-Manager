import { FC, useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { NewTask } from "../types/types";
import classes from "./task-row.module.scss";

interface AddTaskProps {
  onAdd: (task: NewTask) => void;
}

const AddTask: FC<AddTaskProps> = ({ onAdd }) => {
  const [newTask, setNewTask] = useState<NewTask>({
    title: "",
    dueDate: "",
    status: "TO-DO",
    category: "WORK",
  });

  const handleSubmit = () => {
    if (newTask.title.trim()) {
      onAdd(newTask);
      setNewTask({ ...newTask, title: "" });
    }
  };

  return (
    <div>
      <div className={classes.grid}>
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <button>
          <CalendarTodayIcon /> Add date
        </button>
        <select
          value={newTask.status}
          onChange={(e) =>
            setNewTask({
              ...newTask,
              status: e.target.value as NewTask["status"],
            })
          }
        >
          <option value="TO-DO">TO-DO</option>
          <option value="IN-PROGRESS">IN-PROGRESS</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
        <select
          value={newTask.category}
          onChange={(e) =>
            setNewTask({
              ...newTask,
              category: e.target.value as NewTask["category"],
            })
          }
        >
          <option value="WORK">WORK</option>
          <option value="PERSONAL">PERSONAL</option>
        </select>
      </div>
    </div>
  );
};

export default AddTask;
