const notes = [
    {
    title: 'My next trip',
    body: 'I would like to go to Spaine'
},{
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
},{
    title: 'Office modification',
    body: 'Get a new seat'
}];

const filters = {
    searchText: ''
};

const renderNotes = function(notes, filters){  
    document.querySelector('#notes').innerHTML = '';

    const filteredNotes = notes.filter(function(note){
        const title = note.title.toLowerCase();
        // const body = note.body.toLowerCase();
        const filter = filters.searchText.toLowerCase();
        return title.includes(filter) // || body.includes(filter);
    })
    
    filteredNotes.forEach(function(note){
        const p = document.createElement('p');
        p.textContent = note.title;
        document.querySelector('#notes').appendChild(p);
    })
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(){

});

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value;

    renderNotes(notes, filters);
});


document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value);
})
