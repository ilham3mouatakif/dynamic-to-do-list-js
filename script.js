document.addEventListener('DOMContentLoaded', () => {
    // تحديد العناصر
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // دالة لإضافة مهمة
    function addTask() {
        const taskText = taskInput.value.trim(); // أخذ نص المهمة

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // إنشاء عنصر li
        const li = document.createElement('li');
        li.textContent = taskText;

        // إنشاء زر الحذف
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // إسناد الحدث للزر لإزالة المهمة
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // إضافة الزر للعنصر li
        li.appendChild(removeBtn);

        // إضافة العنصر للـ ul
        taskList.appendChild(li);

        // مسح حقل الإدخال
        taskInput.value = "";
    }

    // الحدث عند الضغط على الزر
    addButton.addEventListener('click', addTask);

    // الحدث عند الضغط على Enter
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
