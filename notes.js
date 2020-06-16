const { require } = require("yargs");

var fs = require('fs');
e.exports = getNotes;
var getNotes = function() {
        return "concerts are fan";
    }
    // adding more notes in our body and title
var addNote = function(tilte, body) {}
var saveNotes = function(notes) {

        //writing our notes using fs.writeFilesSync()
        var dataJSON = JSON.stringify(notes);
        fs.writeFileSync("notes.json", dataJSON);
    }
    //load the notes after adding to know the existing notes
var loadNotes = function() {
    try {
        var data = fs.readFileSync('notes.jscon');
        var dataJSON = data.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}
module.exports = getNotes;