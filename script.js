// Ensure the script runs after the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input'); // Input field for new tasks
    const taskList = document.getElementById('task-list'); // Unordered list to display tasks

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get text from input and trim whitespace
        if (taskText === "") { // Check if input is empty
            alert("Please enter a task!");
            return;
        }

        // Create a new task element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Assign event to remove task on button click
        removeBtn.onclick = () => taskList.removeChild(li);

        // Append remove button to task element
        li.appendChild(removeBtn);
        // Append task element to the task list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Attach event listener to addButton
    addButton.addEventListener('click', addTask);

    // Allow adding task by pressing Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
