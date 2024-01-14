# React Todo List : Ashish Pankhedkar [2020A7PS0126G]

This project is done as a part of assesment for the ODE Screening. 

The React Todo List project is a simple application that allows users to create and manage their todos. It includes features such as adding todos, marking them as completed, and persisting the todo list state using local storage. Additionally, there are stretch goals like deleting todos and sorting based on timestamps.

## Features

### 1. Toggle Todo State

Clicking on a todo item toggles its "checked" state, allowing users to mark todos as completed or active.

### 2. Persistent Data Storage

The todo list state is saved and loaded from local storage. This ensures that users can close and reopen the application without losing their todo items.

### 3. Auto-Sort Checked Items

Checked items automatically sink to the bottom of the list, providing a visual separation between active and completed todos.

## Stretch Goals

### 4. Todo Deletion

Hovering over a todo reveals an "X" on the far right side. Clicking the "X" removes the todo from the list, allowing users to delete unwanted todos.

### 5. Timestamps for Sorting

Hidden timestamps (created_at, completed_at) are added to todos for sorting purposes:
   - Active todos are sorted by created_at in descending order.
   - Completed todos are sorted by completed_at in ascending order.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-todo-list.git
   cd react-todo-list
   ```
2. Install Dependencies
```bash 
npm install 
```
3. Start the Server 
```bash
npm start
```
