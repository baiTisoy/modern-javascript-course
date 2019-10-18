const notes = ['Note 1', 'Note 2', 'Note 3'];
// notes.push('My new note'); // puts item on the end
// console.log(notes.pop()); // takes items from the end

// console.log(notes.shift()); //take an item from the beginning;
// console.log(notes.unshift()); //put an item on the beginning;

// notes.splice(1,1);
// notes.splice(1,0, 'This is the new second item');

notes.forEach(function(item, index){
    console.log(index);
    console.log(item);
})

// console.log(notes);
// console.log(notes.length);