// read-file.js

const fs = require('fs');

// This is to create a file named "welcome.txt" containing one line "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File "welcome.txt" has been created with the content "Hello Node"');
    });

    // Read and console.log data from "welcome.txt"
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Data from "welcome.txt":', data);
});
