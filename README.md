# Task Manager

A modern task management application built with **Next.js, React, Redux Toolkit, and Firebase Authentication**. This app enables users to efficiently create, organize, and track their tasks with an intuitive and responsive user interface.

## Features

### 1. User Authentication

- Firebase Authentication with **Google Sign-In**
- Profile management

### 2. Task Management

- Create, edit, and delete tasks
- Categorization (e.g., work, personal) and tagging
- Due date assignment
- **Drag-and-drop** task organization
- Sorting tasks by due date

### 3. Batch Actions

- Perform actions on multiple tasks (e.g., delete, mark as complete)

### 4. Task History & Activity Log

- Tracks changes such as task creation, edits, and deletions
- Displays an activity log for each task

### 5. File Attachments

- Attach files or documents to tasks

### 6. Filtering & Search

- Filter tasks by **tags, category, and date range**
- **Search** by task title

### 7. Board/List View

- Switch between a **Kanban-style board view** and a **list view**

### 8. Responsive Design

- Fully responsive, adapting to various screen sizes (mobile, tablet, desktop)

## Tech Stack

- **Frontend**: Next.js, React 19, Redux Toolkit
- **State Management**: Redux Toolkit
- **Styling**: SCSS, MUI (Material-UI)
- **Drag-and-Drop**: `@hello-pangea/dnd`
- **Date Handling**: Date-fns, Day.js
- **Text Editor**: React Quill
- **Authentication**: Firebase Authentication

## Installation & Setup

### 1. Clone the repository:

```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/task-manager.git
cd task-manager
```

### 2. Install dependencies:

```sh
npm install
```

### 3. Create a `.env.local` file and add Firebase credentials:

```sh
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Run the development server:

```sh
npm run dev
```

The app will be available at **http://localhost:3000**.

## Project Structure

```
/task-manager
├── components/   # Reusable components
├── pages/        # Next.js pages
├── store/        # Redux store setup
├── styles/       # SCSS styles
├── utils/        # Utility functions
└── public/       # Static assets
```

## Future Enhancements

- **Notifications & Reminders**
- **Recurring Tasks**
- **Dark Mode**
- **AI-Powered Task Suggestions**

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the **MIT License**.
