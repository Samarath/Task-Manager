import React, { useState } from "react";
import { Tooltip, Menu, MenuItem } from "@mui/material";
import classes from "./add-task-tool-tip-menu.module.scss";
import PlusIcon from "@/assests/svg-icons/PlusIcon";
import { Category, Status } from "../types/types";

interface TaskStatusToolTipMenuProps {
  status: string;
  selectedOption: Status | Category | "";
  setSelectedOption: (option: Status | Category | "") => void;
}

const AddTaskToolTipMenu: React.FC<TaskStatusToolTipMenuProps> = ({
  status,
  selectedOption,
  setSelectedOption,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: Status | Category) => {
    setSelectedOption(option);
    handleClose();
  };

  const renderOptionBasedOnStatus = () => {
    if (status === "status") {
      return (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "10px",
            },
          }}
        >
          <MenuItem onClick={() => handleMenuItemClick(Status.ToDo)}>
            TO-DO
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick(Status.InProgress)}>
            IN-PROGRESS
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick(Status.Completed)}>
            COMPLETE
          </MenuItem>
        </Menu>
      );
    }

    return (
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "10px",
          },
        }}
      >
        <MenuItem onClick={() => handleMenuItemClick(Category.Work)}>
          WORK
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick(Category.Personal)}>
          PERSONAL
        </MenuItem>
      </Menu>
    );
  };

  return (
    <div>
      <Tooltip title="Options">
        <span
          onClick={handleClick}
          className={!selectedOption ? classes.status : classes.cursor}
        >
          {selectedOption ? selectedOption : <PlusIcon />}
        </span>
      </Tooltip>
      {renderOptionBasedOnStatus()}
    </div>
  );
};

export default AddTaskToolTipMenu;
