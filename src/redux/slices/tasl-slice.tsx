import { TasksType } from "@/components/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type taskState = {
  taskList: TasksType[];
};

const initialState: taskState = {
  taskList: [],
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
  },
});

export const { createTask, updateTask } = userSlice.actions;
export default userSlice.reducer;
