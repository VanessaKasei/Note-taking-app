const noteInput = document.getElementById('noteInput');
const addButton = document.getElementById('addButton');
const noteList = document.getElementById('noteList');

addButton.addEventListener('click', function () {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        const li = document.createElement('li');
        li.textContent = noteText;
        noteList.appendChild(li);
        noteInput.value = '';
    }
});

noteList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});

function deleteNote(iconElement) {
  const noteContainer = document.getElementById('noteContainer');
  const noteToDelete = iconElement.parentNode;
  noteContainer.removeChild(noteToDelete);
}