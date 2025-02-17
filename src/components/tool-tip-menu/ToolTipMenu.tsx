import React, { useState } from "react";
import { Tooltip, IconButton, Menu, MenuItem } from "@mui/material";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import EditIcon from "@/assests/svg-icons/EditIcon";
import DeleteIcon from "@/assests/svg-icons/DeleteIcon";
import { TasksType } from "../types/types";
import { useAppDispatch } from "@/redux/store";
import { deleteTask } from "@/redux/slices/tasl-slice";
import EditTaskModal from "../edit-task-modal/EditTaskModal";

interface TooltipMenuProps {
  task: TasksType;
}

const TooltipMenu: React.FC<TooltipMenuProps> = ({ task }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task));
    handleClose();
  };

  const handleEditTask = () => {
    setOpen(true);
    handleClose();
  };

  return (
    <div>
      <Tooltip title="Options">
        <IconButton onClick={handleClick}>
          <MoreHoriz />
        </IconButton>
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
        <MenuItem onClick={handleEditTask}>
          <span style={{ marginRight: "10px" }}>
            <EditIcon />
          </span>
          Edit
        </MenuItem>
        <MenuItem onClick={handleDeleteTask} sx={{ color: "#DA2F2F" }}>
          <span style={{ marginRight: "10px" }}>
            <DeleteIcon />
          </span>
          Delete
        </MenuItem>
      </Menu>
      <EditTaskModal open={open} onClose={() => setOpen(false)} task={task} />
    </div>
  );
};

export default TooltipMenu;
