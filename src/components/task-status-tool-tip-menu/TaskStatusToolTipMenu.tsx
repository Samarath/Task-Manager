import React, { useState } from "react";
import { Tooltip, Menu, MenuItem } from "@mui/material";
import classes from "./task-status-tool-tip-menu.module.scss";

interface TaskStatusToolTipMenuProps {
  status: string;
}

const TaskStatusToolTipMenu: React.FC<TaskStatusToolTipMenuProps> = ({
  status,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="Options">
        <span onClick={handleClick} className={classes.status}>
          {status}
        </span>
      </Tooltip>
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
    </div>
  );
};

export default TaskStatusToolTipMenu;
