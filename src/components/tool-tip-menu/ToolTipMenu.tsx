import React, { useState } from "react";
import { Tooltip, IconButton, Menu, MenuItem } from "@mui/material";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import EditIcon from "@/assests/svg-icons/EditIcon";
import DeleteIcon from "@/assests/svg-icons/DeleteIcon";

const TooltipMenu: React.FC = () => {
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
        <MenuItem onClick={handleClose}>
          <span style={{ marginRight: "10px" }}>
            <EditIcon />
          </span>
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ color: "#DA2F2F" }}>
          <span style={{ marginRight: "10px" }}>
            <DeleteIcon />
          </span>
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};

export default TooltipMenu;
