document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    // Function to render a task
    function renderTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        removeBtn.onclick = () => {
            taskList.removeChild(li);
            tasks = tasks.filter(t => t !== taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    // Function to add a task
    function addTask(taskText = null, save = true) {
        let text = taskText || taskInput.value.trim();

        if (text === "") {
            alert("Please enter a task!");
            return;
        }

        renderTask(text);

        if (save) {
            tasks.push(text);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        taskInput.value = "";
    }

    // Load tasks from localStorage
    tasks.forEach(task => addTask(task, false));

    // Event listeners
    addButton.addEventListener('click', () => addTask());
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addTask();
    });
});
