// Koppla ihop koden med HTML-elementen
const inputText = document.getElementById('inputText');
const addBtn = document.getElementById('add');
const myList = document.getElementById('todoList');

// Sätt upp en händelselyssnare på "Lägg till"-knappen
addBtn.addEventListener('click', function() {
    // Hämta värdet från textfältet och ta bort extra mellanslag
    const textValue = inputText.value.trim();

    const listItem = document.createElement('li');
    listItem.textContent = textValue;
    
const completeBtn = document.createElement('button');
completeBtn.textContent = 'Klar';

completeBtn.addEventListener('click', function() {
    listItem.style.textDecoration =
        listItem.style.textDecoration === 'line-through' ? 'none' : 'line-through';
});

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Ta bort';

deleteBtn.addEventListener('click', function() {
    listItem.remove();
});

listItem.appendChild(completeBtn);
listItem.appendChild(deleteBtn);
      myList.appendChild(listItem);
})
