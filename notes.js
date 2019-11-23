const fs = require('fs');
const chalk = require('chalk');

//ADDING NOTES TO JSON
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New Note Added Successfully!!!'));
    }else{
        console.log(chalk.red.inverse('Note Title Is Already Taken!!!'));
    }
}

//REMOVE OR DELETE A NOTE FROM JSON
const removeNote = (title) => {
    const notes = loadNotes();
    const notesKeep = notes.filter((note) => note.title !== title);//using arrow functions
    if(notes.length > notesKeep.length){
        console.log(chalk.green.inverse('Note Removed Successfully!!!'));
        saveNotes(notesKeep);
    }else{
        console.log(chalk.red.inverse('No Such Note Found!!!'));
    }
    
}

//PRINTING ALL THE NOTES WE HAVE IN JSON
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bold.underline.inverse('Your Notes'));
    console.log('------------------------------------');
    notes.forEach((element) => {
        console.log(element.title);
    });
    console.log('------------------------------------');
    
}

//READING A PARTICULAR NOTE FROM JSON
const readNote = (title) => {
    const notes = loadNotes();
    const yourNote = notes.find((note) => note.title === title);
    console.log(chalk.blue.inverse('Reading Your Note'));
    console.log('-----------------------------------');
    if(yourNote){
        console.log(chalk.bold('Title is: ') + yourNote.title);
        console.log(chalk.bold('Body is: ') + yourNote.body);
    }else{
        console.log(chalk.red.inverse('No such Note Found!!!'));
    }
    console.log('-----------------------------------');
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}


const loadNotes = () => {
    try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};