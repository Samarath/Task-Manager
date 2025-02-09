import React, { useState } from "react";
import { Tooltip, Menu, MenuItem } from "@mui/material";
import classes from "./add-task-tool-tip-menu.module.scss";
import PlusIcon from "@/assests/svg-icons/PlusIcon";

interface TaskStatusToolTipMenuProps {
  status: string;
}

const AddTaskTooltip: React.FC<TaskStatusToolTipMenuProps> = ({ status }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderOptionBasedOnStaus = () => {
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
          <MenuItem onClick={handleClose}>TO-DO</MenuItem>
          <MenuItem onClick={handleClose}>IN-PROGRESS</MenuItem>
          <MenuItem onClick={handleClose}>COMPLETE</MenuItem>
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
        <MenuItem onClick={handleClose}>WORK</MenuItem>
        <MenuItem onClick={handleClose}>PERSONAL</MenuItem>
      </Menu>
    );
  };

  return (
    <div>
      <Tooltip title="Options">
        <span onClick={handleClick} className={classes.status}>
          <PlusIcon />
        </span>
      </Tooltip>
      {renderOptionBasedOnStaus()}
    </div>
  );
};

export default AddTaskTooltip;
