document.addEventListener('DOMContentLoaded', () => {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input'); // Input field for new tasks
    const taskList = document.getElementById('task-list'); // UL to display tasks

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input text and trim whitespace
        if (taskText === "") return; // Do nothing if input is empty

        // Create task element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Remove task when button is clicked
        removeBtn.onclick = () => taskList.removeChild(li);

        // Append remove button to task
        li.appendChild(removeBtn);
        // Append task to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key on input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addTask();
    });

});
