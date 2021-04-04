var http = require("http");
var fs = require("fs");

function readFiles() {
    //Open a file for reading
const file1 = 'file1.txt';
const file2 = 'file2.txt';

var file1_data;
var file2_data;

    console.log("reading file1.txt");
// First I want to read the file
fs.readFile(file1, function read(err, data) {
    file1_data = data;
})
    console.log("waiting 2 seconds");
    setTimeout(function(){},2000);

    console.log("reading file2.txt");
    fs.readFile(file2, function read(err, data) {
        if (err) {
            console.log(err);
        }
        file2_data = data;
    });


    console.log("waiting 2 seconds");
    setTimeout(function(){},2000);

    console.log("displaying output from file1 and file2.txt");
    console.log("contents of file1.txt");
    console.log(file1_data);

    console.log("contents of file2.txt");
    console.log(file2_data);

    console.log("elapsed time: " + console.timeEnd());
}
readFiles();