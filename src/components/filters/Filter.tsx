import React, { useEffect, useState } from "react";
import {
  Select,
  MenuItem,
  TextField,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import classes from "./filter.module.scss";
import CreateTaskModal from "../create-task-modal/CreateTaskModal";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {
  setDateFilter,
  setSearch,
  setWorkFilter,
  updateSearchList,
} from "../../redux/slices/tasl-slice";

const Filters: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const [isDueDateSelected, setDueDateSelected] = useState<boolean>(false);

  const { taskList, workFilter, dateFilter, search } = useAppSelector(
    (state) => state.taskManager
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentDate) {
      const filterList = taskList.filter(
        (task) => task.date[0] === currentDate
      );

      dispatch(updateSearchList(filterList));
    }
  }, [currentDate]);

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    const formattedDate = date?.format("DD/MM/YYYY") || "";
    setCurrentDate(formattedDate);
  };

  const handleOptionChange = (e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    if (value === "Due Date") {
      setDueDateSelected(true);
    } else {
      const date = dayjs();
      const todaysDate = date.format("DD/MM/YYYY");
      const filterList = taskList.filter((task) => task.date[0] === todaysDate);
      dispatch(updateSearchList(filterList));
      setDueDateSelected(false);
    }
    dispatch(setDateFilter(value));
  };

  const handleCategoryFilter = (e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    const filterList = taskList.filter((task) => task.category === value);
    dispatch(setWorkFilter(value));
    dispatch(updateSearchList(filterList));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterList = taskList.filter((task) =>
      task.title.includes(e.target.value)
    );
    dispatch(updateSearchList(filterList));
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className={classes.filtersContainer}>
      <div className={classes.firstSection}>
        <span>Filter by:</span>
        <div className={classes.selectContainer}>
          <Select
            value={workFilter}
            onChange={(e) => handleCategoryFilter(e)}
            className={classes.selectInput}
            variant="outlined"
            sx={{
              borderRadius: "25px",
              "& .MuiSelect-select": {
                padding: "10px",
              },
              width: "150px",
            }}
          >
            <MenuItem value="Category">Category</MenuItem>
            <MenuItem value="Work">Work</MenuItem>
            <MenuItem value="Personal">Personal</MenuItem>
          </Select>
        </div>
        <div className={classes.selectContainer}>
          <Select
            value={dateFilter}
            onChange={handleOptionChange}
            className={classes.selectInput}
            variant="outlined"
            displayEmpty
            sx={{
              borderRadius: "25px",
              "& .MuiSelect-select": {
                padding: "10px",
              },
              width: "180px",
            }}
            renderValue={(selected) => {
              if (selected === "") {
                return <span>Filter by Due Date</span>;
              }
              return selected;
            }}
          >
            <MenuItem value="" disabled>
              <em>Filter by Due Date</em>
            </MenuItem>
            <MenuItem value="Due Date">Due Date</MenuItem>
            <MenuItem value="Today">Today</MenuItem>
          </Select>
        </div>
        {isDueDateSelected && (
          <div className={classes.selectContainer}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={currentDate ? dayjs(currentDate, "DD/MM/YYYY") : null}
                onChange={handleDateChange}
                sx={{
                  borderRadius: "20px",
                  "& .MuiFormControl-root-MuiTextField-root": {
                    borderRadius: "20px !important",
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px !important",
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "10px 14px",
                  },
                }}
              />
            </LocalizationProvider>
          </div>
        )}
      </div>

      <div className={classes.secondSection}>
        <TextField
          placeholder="Search"
          variant="outlined"
          size="small"
          value={search}
          onChange={handleChange}
          className={classes.searchInput}
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "25px",
              padding: "2px",
            },
          }}
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.addTaskButton}
          onClick={() => setOpen(true)}
        >
          ADD TASK
        </Button>
        <CreateTaskModal open={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
};

export default Filters;
