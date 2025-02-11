import { TasksType } from "@/components/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type taskState = {
  taskList: TasksType[];
  searchList: TasksType[];
  workFilter: string;
  dateFilter: string;
  search: string;
};

const initialState: taskState = {
  taskList: [],
  searchList: [],
  workFilter: "Category",
  dateFilter: "",
  search: "",
};

const userSlice = createSlice({
  name: "taskManagement",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<TasksType>) => {
      state.taskList.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<TasksType>) => {
      const index = state.taskList.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.taskList[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<TasksType>) => {
      const index = state.taskList.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.taskList.splice(index, 1);
      }
    },
    updateSearchList: (state, action: PayloadAction<TasksType[]>) => {
      state.searchList = action.payload;
    },
    setWorkFilter: (state, action: PayloadAction<string>) => {
      state.workFilter = action.payload;
    },
    setDateFilter: (state, action: PayloadAction<string>) => {
      state.dateFilter = action.payload;
    },
    resetWorkDateFilter: (state) => {
      state.dateFilter = "";
      state.workFilter = "Category";
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const {
  createTask,
  updateTask,
  deleteTask,
  updateSearchList,
  setDateFilter,
  setWorkFilter,
  resetWorkDateFilter,
  setSearch,
} = userSlice.actions;
export default userSlice.reducer;
