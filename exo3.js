// script.js
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('tasks');

addTaskButton.addEventListener('click', function () {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Supprimer</button>
        `;
        taskList.appendChild(li);
        newTaskInput.value = '';

        const deleteButton = li.querySelector('.delete');
        deleteButton.addEventListener('click', function () {
            li.remove();
        });
    }
});
