import React, { useState } from "react";
import { Select, MenuItem, TextField, Button } from "@mui/material";
import classes from "./filter.module.scss";
import CreateTaskModal from "../create-task-modal/CreateTaskModal";

const Filters: React.FC = () => {
  const [category, setCategory] = useState("Category");
  const [dueDate, setDueDate] = useState("Due Date");
  const [open, setOpen] = useState(false);

  const handleSubmit = (taskData) => {
    console.log("Task Data:", taskData);
  };
  return (
    <div className={classes.filtersContainer}>
      <div className={classes.firstSection}>
        <span>Filter by:</span>
        <div className={classes.selectContainer}>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value as string)}
            className={classes.selectInput}
            variant="outlined"
            sx={{
              borderRadius: "25px",
              "& .MuiSelect-select": {
                padding: "10px",
              },
            }}
          >
            <MenuItem value="Category">Category</MenuItem>
            <MenuItem value="Work">Work</MenuItem>
            <MenuItem value="Personal">Personal</MenuItem>
          </Select>
        </div>{" "}
        <div className={classes.selectContainer}>
          <Select
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value as string)}
            className={classes.selectInput}
            variant="outlined"
            sx={{
              borderRadius: "25px",
              "& .MuiSelect-select": {
                padding: "10px",
              },
            }}
          >
            <MenuItem value="Due Date">Due Date</MenuItem>
            <MenuItem value="Today">Today</MenuItem>
            <MenuItem value="This Week">This Week</MenuItem>
          </Select>
        </div>
      </div>

      <div className={classes.secondSection}>
        <TextField
          placeholder="Search"
          variant="outlined"
          size="small"
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
        <CreateTaskModal
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Filters;
