import { FC, useState } from "react";
import { Category, Status, TasksType } from "../types/types";
import classes from "./task-row.module.scss";
import { Button, TextField } from "@mui/material";
import AddTaskToolTipMenu from "../add-task-tool-tip-menu/AddTaskToolTipMenu";
import EnterIcon from "@/assests/svg-icons/EnterIcon";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useAppDispatch } from "@/redux/store";
import { createTask, resetWorkDateFilter } from "@/redux/slices/tasl-slice";

const AddTask: FC = () => {
  const initialState = {
    id: "",
    title: "",
    description: "",
    status: "" as Status,
    category: Category.Work,
    date: [],
    files: [],
  };
  const [taskData, setTaskData] = useState<TasksType>(initialState);
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<Status | "">("");
  const [selectedOptionCategory, setSelectedOptionCategory] = useState<
    Category | ""
  >("");

  const dispatch = useAppDispatch();

  const generateUniqueId = () => {
    const timestamp = performance.now().toString(36);
    const randomNumber = Math.random().toString(36).substr(2, 9);
    return timestamp + randomNumber;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskData({ ...taskData, title: e.target.value });
  };

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    const formattedDate = date?.format("DD/MM/YYYY") || "";
    setCurrentDate(formattedDate);
    setTaskData((prev) => ({
      ...prev,
      date: [formattedDate, ...prev.date],
    }));
  };

  const handleSubmit = () => {
    if (selectedOption && selectedOptionCategory && taskData.title) {
      dispatch(
        createTask({
          ...taskData,
          id: generateUniqueId(),
          status: selectedOption,
          category: selectedOptionCategory,
        })
      );
      setTaskData(initialState);
      dispatch(resetWorkDateFilter());
    } else {
      alert("fill fill all the necessary fields");
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <TextField
          fullWidth
          name="taskTitle"
          value={taskData.title}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
          placeholder="Task Title"
          inputProps={{
            style: {
              fontSize: "1rem",
              padding: "8px",
            },
          }}
          sx={{
            border: "none",
            "& fieldset": {
              border: "none",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: 0,
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
          }}
        />
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={currentDate ? dayjs(currentDate, "DD/MM/YYYY") : null}
              onChange={handleDateChange}
              sx={{
                backgroundColor: "#f1f1f1",
                borderRadius: "20px",
                "& .MuiFormControl-root-MuiTextField-root": {
                  borderRadius: "20px !important",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px !important",
                  maxWidth: "200px",
                },
                "& .MuiOutlinedInput-input": {
                  padding: "10px 14px",
                },
              }}
            />
          </LocalizationProvider>
        </div>
        <AddTaskToolTipMenu
          status="status"
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
        <AddTaskToolTipMenu
          status="category"
          setSelectedOption={setSelectedOptionCategory}
          selectedOption={selectedOptionCategory}
        />
      </div>
      <div className={classes["btn-group"]}>
        <Button className={classes["add-btn"]} onClick={handleSubmit}>
          Add{" "}
          <span style={{ marginTop: "5px" }}>
            <EnterIcon />
          </span>
        </Button>
        <Button className={classes["cancel-btn"]}>Cancel </Button>
      </div>
    </div>
  );
};

export default AddTask;
