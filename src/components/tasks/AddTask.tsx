import { FC, useState } from "react";
import { NewTask } from "../types/types";
import classes from "./task-row.module.scss";
import { styled, TextField } from "@mui/material";
import AddDate from "@/assests/svg-icons/AddDate";
import AddTaskToolTipMenu from "../add-task-tool-tip-menu/AddTaskToolTipMenu";
import TaskStatusToolTipMenu from "../task-status-tool-tip-menu/TaskStatusToolTipMenu";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ ...newTask, title: e.target.value });
  };
  const BorderlessTextField = styled(TextField)`
    & .MuiOutlinedInput-root {
      & fieldset {
        border: none;
      }
      &:hover fieldset {
        border: none;
      }
      &.Mui-focused fieldset {
        border: none;
      }
    }

    & .MuiInputLabel-root {
      display: none;
    }
    & input::placeholder {
      font-size: 14px;
    }
  `;

  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <BorderlessTextField
          fullWidth
          name="taskTitle"
          value={newTask.title}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
          placeholder="Task Title"
          inputProps={{
            style: {
              fontSize: "1.25rem",
              padding: "8px 0",
            },
          }}
        />
        <span>
          <AddDate />
        </span>
        <AddTaskToolTipMenu status="status" />
        <AddTaskToolTipMenu status="category" />
      </div>
    </div>
  );
};

export default AddTask;
