// Koppla ihop koden med HTML-elementen
const inputText = document.getElementById('inputText');
const addBtn = document.getElementById('add');
const myList = document.getElementById('todoList');

// Sätt upp en händelselyssnare på "Lägg till"-knappen
addBtn.addEventListener('click', function() {
    // Hämta värdet från textfältet och ta bort extra mellanslag
    const textValue = inputText.value.trim();
})
