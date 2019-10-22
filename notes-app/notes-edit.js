const titleElement = document.querySelector('#note-title');
const timeElement = document.querySelector('#time-stamp');
const bodyElement = document.querySelector('#note-body');
const noteId = location.hash.substr(1);
let notes = getSavedNotes();
let note = notes.find(function (note) {
    return note.id === noteId
});

if (note === undefined){
    location.assign('./index.html');
}

//Get the existing note's info from the page
timeElement.textContent = generateLastEdited(note.updatedAt);
titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener('input', function() {
    note.title = titleElement.value;
    note.updatedAt = moment().valueOf();
    timeElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
})

bodyElement.addEventListener('input', function() {
    note.body = bodyElement.value;
    note.updatedAt = moment().valueOf();
    timeElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
})

document.querySelector('#remove-note').addEventListener('click', function(){
    removeNote(note.id);
    saveNotes(notes);
    location.assign('./index.html');
})

window.addEventListener('storage', function(e){
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue);
        note = notes.find(function (note) {
            return note.id === noteId;
        });
        
        if (note === undefined){
            location.assign('./index.html');
        }
        timeElement.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`;
        titleElement.value = note.title;
        bodyElement.value = note.body;
    }
})

