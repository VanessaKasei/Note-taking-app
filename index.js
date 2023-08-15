const noteInput = document.getElementById('noteInput');
const addButton = document.getElementById('addButton');
const noteList = document.getElementById('noteList');
const deleteButton = document.getElementById('deleteButton');

addButton.addEventListener('click', function () {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        const li = document.createElement('li');
        li.textContent = noteText;
        noteList.appendChild(li);
        noteInput.value = '';
    }
    else (
        window.alert("Enter a note!")
    )
});

/*deleteButton.addEventListener('click', function () {

})*/

noteList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});
 