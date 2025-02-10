export enum Status {
  ToDo = "TO-Do",
  InProgress = "IN-PROGRESS",
  Completed = "COMPLETED",
}

export enum Category {
  Work = "Work",
  Personal = "Personal",
}
export interface Task {
  id: number;
  title: string;
  dueDate: string;
  status: "TO-DO" | "IN-PROGRESS" | "COMPLETED";
  category: "WORK" | "PERSONAL";
}

export interface NewTask {
  title: string;
  dueDate: string;
  status: Task["status"];
  category: Task["category"];
}

export interface FileType {
  name: string;
  url: string;
  type: "image" | "pdf";
}

export interface TasksType {
  id: string;
  description?: string;
  title: string;
  status: Status;
  category: Category;
  date: string[];
  files?: FileType[];
}
