document.addEventListener('DOMContentLoaded', () => {
    // تحديد العناصر من DOM
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // تحميل المهام من Local Storage عند بداية الصفحة
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // إضافة مهمة جديدة
    function addTask(taskText = null, save = true) {
        let text = taskText || taskInput.value.trim();

        if (text === "") {
            alert("Please enter a task!");
            return;
        }

        // إنشاء عناصر li و زر الحذف
        const li = document.createElement('li');
        li.textContent = text;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // حدث إزالة المهمة
        removeBtn.onclick = () => {
            li.remove();
            updateLocalStorage();
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // حفظ المهمة في Local Storage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(text);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        taskInput.value = "";
    }

    // تحديث Local Storage بعد حذف مهمة
    function updateLocalStorage() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            // إزالة نص زر الحذف من النص
            const taskText = li.firstChild.textContent;
            tasks.push(taskText);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // إضافة مهمة عند الضغط على زر Add
    addButton.addEventListener('click', () => addTask());

    // إضافة مهمة عند الضغط على Enter
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // تحميل المهام عند فتح الصفحة
    loadTasks();
});
