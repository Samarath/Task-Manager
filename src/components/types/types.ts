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
