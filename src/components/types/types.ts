export enum Status {
  ToDo = "to-do",
  InProcess = "in-process",
  Completed = "completed",
}

export enum Category {
  Work = "work",
  Professional = "professional",
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
  description: string;
  title: string;
  status: Status;
  category: Category;
  date: string[];
  files?: FileType[];
}
