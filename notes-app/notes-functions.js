// Read exisiting notes from local storage
const getSavedNotes = function(){
    const notesJSON = localStorage.getItem('notes');

    if (notesJSON !== null){
        return JSON.parse(notesJSON);
        } else {
            return [];
        }
}

// Save notes to localStorage
const saveNotes = function(notes){
    localStorage.setItem('notes', JSON.stringify(notes));
}
//remove notes by id
const removeNote = function(id){
    const index = notes.findIndex(function(note){
        return note.id === id;
    })

    if (index > -1) {
        notes.splice(index,1);
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function (note){
    const noteEl = document.createElement('div');
    const textEl = document.createElement('a')
    const button = document.createElement('button');

    // Setup the remove note button
    button.textContent = 'x';
    button.addEventListener('click', function(){
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters)
    })
    noteEl.appendChild(button);

    // Setup the note title text
    if (note.title.length > 0){
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note';
    }
    textEl.setAttribute('href', `./edit.html#${note.id}`)
    noteEl.appendChild(textEl);

    return noteEl;
}

const sortNotes = function (notes, sortBy) {
    if (sortBy === 'byEdited'){
        return notes.sort(function(a,b){
            if (a.updatedAt > b.updatedAt){
                return -1;
            } else if (a.updatedAt < b.updatedAt){
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort(function(a,b){
            if (a.createdAt > b.createdAt){
                return -1;
            } else if (a.createdAt < b.createdAt){
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'alphabetical'){
        return notes.sort(function (a,b){
            if (a.title.toLowerCase() < b.title.toLowerCase()){
                return -1;
            } else if (a.title.toLowerCase() > b.title.toLowerCase()){
                return 1;
            } else {
                return 0;
            }
        })
    } else {
        return notes;
    }
}

// Render application notes
const renderNotes = function(notes, filters){  
    notes = sortNotes(notes, filters.sortBy);

    document.querySelector('#notes').innerHTML = '';

    const filteredNotes = notes.filter(function(note){
        const title = note.title.toLowerCase();
        // const body = note.body.toLowerCase();
        const filter = filters.searchText.toLowerCase();
        return title.includes(filter) // || body.includes(filter);
    })
    
    filteredNotes.forEach(function(note){
        const p = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(p);
    })
};

const generateLastEdited = function(timestamp){
    return `Last edited ${moment(timestamp).fromNow()}`
}