const notes = require('./notes.js');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'reading notes',
    builder: {
        title: {
            describe: 'Building Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Building body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){//fucntion in ES6
        notes.addNote(argv.title,argv.body)
    }
});

yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {
        title: {
            describe: 'remove title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){//function
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'listing all the commands',
    handler(){
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title: {
            describe: 'reading the title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});
yargs.parse();//to display output
