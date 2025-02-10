import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import classes from "./create-task-modal.module.scss";
import { TasksType, Status, Category, FileType } from "../types/types";
import dayjs from "dayjs";
import { useAppDispatch } from "@/redux/store";
import { createTask } from "@/redux/slices/tasl-slice";

interface CreateTaskModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ open, onClose }) => {
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
  const dispatch = useAppDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles: FileType[] = files
      .filter(
        (file) =>
          file.type.startsWith("image/") || file.type === "application/pdf"
      )
      .map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
        type: file.type.startsWith("image/") ? "image" : "pdf",
      }));
    setTaskData((prev) => ({
      ...prev,
      files: [...(prev.files || []), ...validFiles],
    }));
  };

  const handleCategoryChange = (category: Category) => {
    setTaskData((prev) => ({ ...prev, category }));
  };

  const handleStatusChange = (status: Status) => {
    setTaskData((prev) => ({ ...prev, status }));
  };
  const generateUniqueId = () => {
    const timestamp = performance.now().toString(36);
    const randomNumber = Math.random().toString(36).substr(2, 9);
    return timestamp + randomNumber;
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
    if (
      taskData.status &&
      taskData.date &&
      taskData.description &&
      taskData.title
    ) {
      dispatch(createTask({ ...taskData, id: generateUniqueId() }));
      setTaskData(initialState);
      onClose();
    } else {
      alert("fill fill all the necessary fields");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "20px",
        },
      }}
    >
      <DialogTitle className={classes.dialogTitle}>
        Create Task
        <IconButton
          onClick={onClose}
          className={classes.closeButton}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent className={classes.dialogContent}>
        <TextField
          fullWidth
          placeholder="Task title"
          value={taskData.title}
          onChange={(e) =>
            setTaskData((prev) => ({ ...prev, title: e.target.value }))
          }
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              backgroundColor: "#F1F1F1",
            },
            "& .MuiOutlinedInput-input ": {
              padding: "10px",
            },
          }}
        />
        <div className={classes["text-editor"]}>
          <ReactQuill
            value={taskData.description}
            onChange={(value) =>
              setTaskData((prev) => ({ ...prev, description: value }))
            }
            placeholder="Description"
            className={classes.editor}
            modules={{
              toolbar: [
                ["bold", "italic"],
                [{ list: "ordered" }, { list: "bullet" }],
              ],
            }}
          />
          <span className={classes.count}>
            {taskData?.description?.length} / 300
          </span>
        </div>

        <div className={classes.formRow}>
          <div className={classes.category}>
            <p>Task Category*</p>
            <div className={classes["toggle-category"]}>
              <span
                className={
                  taskData.category === Category.Work
                    ? classes.active
                    : classes.normal
                }
                onClick={() => handleCategoryChange(Category.Work)}
              >
                Work
              </span>
              <span
                className={
                  taskData.category === Category.Personal
                    ? classes.active
                    : classes.normal
                }
                onClick={() => handleCategoryChange(Category.Personal)}
              >
                Professional
              </span>
            </div>
          </div>
          <div className={classes.options}>
            <div className={classes["date-picker"]}>
              <p>Due on*</p>
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
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "10px 14px",
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className={classes.statusSelect}>
              <p>Task Status*</p>
              <FormControl
                sx={{
                  backgroundColor: "#f1f1f1",
                  borderRadius: "20px",
                  width: "200px",
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
              >
                <Select
                  value={taskData.status}
                  onChange={(e) => handleStatusChange(e.target.value as Status)}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    choose
                  </MenuItem>
                  <MenuItem value={Status.ToDo}>To Do</MenuItem>
                  <MenuItem value={Status.InProgress}>In Progress</MenuItem>
                  <MenuItem value={Status.Completed}>Completed</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>

        <div className={classes.attachmentSection}>
          <p className={classes.attachmentTitle}>Attachment</p>
          <div
            className={classes.dropZone}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const files = Array.from(e.dataTransfer.files);
              const validFiles: FileType[] = files
                .filter(
                  (file) =>
                    file.type.startsWith("image/") ||
                    file.type === "application/pdf"
                )
                .map((file) => ({
                  name: file.name,
                  url: URL.createObjectURL(file),
                  type: file.type.startsWith("image/") ? "image" : "pdf",
                }));
              setTaskData((prev) => ({
                ...prev,
                files: [...(prev.files || []), ...validFiles],
              }));
            }}
          >
            <input
              type="file"
              accept="image/*,.pdf"
              multiple
              onChange={handleFileChange}
              className={classes.fileInput}
              id="file-input"
            />
            <label htmlFor="file-input">
              Drop your files here or{" "}
              <span className={classes.updateLink}>Update</span>
            </label>
          </div>
        </div>
      </DialogContent>
      <div className={classes.actions}>
        <Button onClick={onClose} className={classes["cancel-btn"]}>
          CANCEL
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          className={classes["create-btn"]}
        >
          CREATE
        </Button>
      </div>
    </Dialog>
  );
};

export default CreateTaskModal;
