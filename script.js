function addTask() {
    const taskText = taskInput.value.trim(); // Get text from input and trim whitespace
    if (taskText === "") return; // Stop if input is empty

    // Create task element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn';

    // Remove task on button click
    removeBtn.onclick = () => taskList.removeChild(li);

    // Append remove button to task element
    li.appendChild(removeBtn);
    // Append task element to task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}
