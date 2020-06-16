const { require } = require("yargs");

var fs = require('fs');
var getNotes = function() {
    return "concerts are fan";
}
var addNote = function(tilte, body) {}
var saveNotes = function(notes) {
    var dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}
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