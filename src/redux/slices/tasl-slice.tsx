import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum Status {
  ToDo = "to-do",
  InProcess = "in-process",
  Completed = "completed",
}

enum Category {
  Work = "work",
  Professional = "professional",
}

interface TasksType {
  id: string;
  title: string;
  status: Status;
  category: Category;
  date: string;
}

const initialState: TasksType = {
  id: "",
  title: "",
  status: Status.ToDo,
  category: Category.Work,
  date: "",
};

const userSlice = createSlice({
  name: "taskManagement",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<TasksType>) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.status = action.payload.status;
      state.category = action.payload.category;
      state.date = action.payload.date;
    },
  },
});

export const { createTask } = userSlice.actions;
export default userSlice.reducer;
