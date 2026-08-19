const inputText = document.getElementById('inputText');
const addBtn = document.getElementById('add');
const deleteBtn = document.getElementById('delete');
const myList = document.getElementById('todoList');

const filtreraAllt = document.getElementById('filtreraAllt');
const filtreramarkerade = document.getElementById('filtreramarkerade');
const filtreraomarkerade = document.getElementById('filtreraomarkerade');


let selectedTask = null;
let currentFilter = 'all'; // Håller koll på vilket filter som är aktivt

addBtn.addEventListener('click', function() {
    const textValue = inputText.value.trim();

    if (textValue === '') {
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = textValue;

    listItem.addEventListener('click', function() {
        selectedTask = listItem;

        // Växla text-decoration
        listItem.style.textDecoration =
            listItem.style.textDecoration === 'line-through'
                ? 'none'
                : 'line-through';
        
        // Växla klassen 'completed' för att underlätta filtrering
        listItem.classList.toggle('completed');
        
        // Uppdatera vyn direkt om användaren klickar på en uppgift medan ett filter är aktivt
        Filter();
    });

    myList.appendChild(listItem);
    inputText.value = '';
    
    // Se till att den nya uppgiften syns om vi är i fel filter
    Filter();
});

deleteBtn.addEventListener('click', function() {
    if (selectedTask !== null) {
        selectedTask.remove();
        selectedTask = null;
    }
});

function darkmode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function Filter() {
    const items = myList.getElementsByTagName('li');
    
    for (let item of items) {
        const isCompleted = item.classList.contains('completed');
        
        if (currentFilter === 'alla') {
            item.style.display = ''; // Visar elementet
        } else if (currentFilter === 'markerad') {
            item.style.display = isCompleted ? '' : 'none'; // Visar bara markerade
        } else if (currentFilter === 'omarkerad') {
            item.style.display = !isCompleted ? '' : 'none'; // Visar bara omarkerade
        }
    }
}

// Event listeners för filterknapparna
filtreraAllt.addEventListener('click', function() {
    currentFilter = 'alla';
    Filter();
});

filtreramarkerade.addEventListener('click', function() {
    currentFilter = 'markerad';
    Filter();
});

filtreraomarkerade.addEventListener('click', function() {
    currentFilter = 'omarkerad';
    Filter();
});
