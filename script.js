// creating te todo list add in that we just add task and remove that just tell me the approch how to do that

// Approach for creating a Todo List:
// 1. Create an array to store todo tasks
// 2. Create a function to add tasks to the array
// 3. Create a function to remove tasks from the array (by index or task name)
// 4. Optionally, create functions to display tasks and mark them as complete

// Step 1: Initialize an empty array to store tasks
let todoList = [];

// Step 2: Function to add a task
function addTask(task) {
  todoList.push(task);
  console.log(`Task added: ${task}`);
}

// Step 3: Function to remove a task by index
function removeTask(index) {
  if (index >= 0 && index < todoList.length) {
    const removedTask = todoList.splice(index, 1);
    console.log(`Task removed: ${removedTask}`);
  } else {
    console.log('Invalid index');
  }
}

// Optional: Function to display all tasks
function displayTasks() {
  console.log('Todo List:');
  todoList.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

// Example usage:
// addTask('Buy groceries');
// addTask('Complete homework');
// displayTasks();
// removeTask(0);
// displayTasks();
