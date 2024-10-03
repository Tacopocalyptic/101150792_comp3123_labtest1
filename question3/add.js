// Josephine Snyder - 101150792
// Question 3

const fs = require('fs');
const path = require('path');

// number of files to create
let k = 10

// checking for and creating 'logs' directory
let dir = path.join(__dirname, "logs")
if(fs.existsSync(dir)){
    console.log(`Directory ${dir} already exists.`)
}else{
    fs.mkdirSync(dir)
}

// writing log files. Overwriting if exists.
for (let i = 0; i < k; i++) {
    fs.writeFileSync(path.join(dir, `Log${i}.txt`), `HELLO from Log ${i}`)
    console.log(`Log${i}.txt`)
}