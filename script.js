// ننتظر تحميل الصفحة قبل تنفيذ الكود
document.addEventListener('DOMContentLoaded', () => {

    // تحديد العناصر من صفحة HTML
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // إنشاء دالة addTask لإضافة مهمة جديدة
    function addTask() {
        // أخذ النص من حقل الإدخال بعد إزالة الفراغات الزائدة
        const taskText = taskInput.value.trim();

        // التحقق إذا كان الحقل فارغ
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // إنشاء عنصر <li> للمهمة
        const li = document.createElement('li');
        li.textContent = taskText;

        // إنشاء زر "Remove" لحذف المهمة
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // عند الضغط على زر الحذف، نحذف المهمة من القائمة
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // إضافة الزر لعنصر <li>
        li.appendChild(removeBtn);

        // إضافة <li> إلى قائمة المهام <ul>
        taskList.appendChild(li);

        // مسح حقل الإدخال بعد الإضافة
        taskInput.value = "";
    }

    // حدث عند الضغط على زر "Add Task"
    addButton.addEventListener('click', addTask);

    // حدث عند الضغط على زر "Enter" في لوحة المفاتيح
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
