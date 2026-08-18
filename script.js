const inputText = document.getElementById('inputText');
const addBtn = document.getElementById('add');
const deleteBtn = document.getElementById('delete');
const myList = document.getElementById('todoList');

let selectedTask = null;

addBtn.addEventListener('click', function() {
    const textValue = inputText.value.trim();

    if (textValue === '') {
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = textValue;

    listItem.addEventListener('click', function() {
        selectedTask = listItem;

        listItem.style.textDecoration =
            listItem.style.textDecoration === 'line-through'
                ? 'none'
                : 'line-through';
    });

    myList.appendChild(listItem);
    inputText.value = '';
});

deleteBtn.addEventListener('click', function() {
    if (selectedTask !== null) {
        selectedTask.remove();
        selectedTask = null;
    }
});