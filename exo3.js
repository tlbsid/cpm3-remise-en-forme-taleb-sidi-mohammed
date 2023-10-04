// script.js
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('tasks');

newTaskInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Supprimer</button>
            `;
            taskList.appendChild(li);
            newTaskInput.value = '';

            li.querySelector('.delete').addEventListener('click', function () {
                li.remove();
            });
        }
    }
});

