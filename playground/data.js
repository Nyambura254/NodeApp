var fs = require("fs");
var book = {
    title: "33 strategies of war",
    author: "Robert Greene",
};
var bookJSON = JSON.stringify(book);
fs.writeFileSync("data.json", bookJSON);

// var parseData=JSON.stringify(book);
// console.log(parseData.JSON(book));