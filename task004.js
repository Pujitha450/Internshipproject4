document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Retrieve tasks from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Display tasks
    function displayTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.title;
        if (task.completed) {
          li.classList.add('completed');
        }
        li.addEventListener('click', () => toggleTask(index));
        taskList.appendChild(li);
      });
    }
  
    // Add new task
    todoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskTitle = taskInput.value.trim();
      if (taskTitle !== '') {
        tasks.push({ title: taskTitle, completed: false });
        taskInput.value = '';
        saveTasks();
        displayTasks();
      }
    });
  
    // Toggle task completion
    function toggleTask(index) {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      displayTasks();
    }
  
    // Save tasks to local storage
    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Initial display of tasks
    displayTasks();
  });