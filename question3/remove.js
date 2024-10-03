// Josephine Snyder - 101150792
// Question 3

const fs = require('fs');
const path = require('path');

let dir = path.join(__dirname, "logs")

// checking for 'logs' directory
fs.readdir(dir, (err, files) => {
    if (err) console.log(err +" No action taken");
  
    // deleting files
    else {
        for (let file of files) {
            console.log("delete files..."+file)
            fs.unlink(path.join(dir, file), (err) => {
                if (err) console.log(err)
            })
        }
    }
})

fs.rmdir(dir, () => {
    console.log("'logs' directory Gone");
});

