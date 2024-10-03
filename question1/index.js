// Josephine Snyder - 101150792
// Question 1

const lowerCaseWords = (arr) => {

    // Takes mixed array
    // returns promise that is resolved or rejected
    // filters out non-strings, lowercase remaining words
    
    return new Promise((resolve, reject) => {
        let strArr = [];

        if(arr == null) reject("No array passed");

        for (let i = 0; i < arr.length; i++) {
            if(typeof arr[i] === 'string'){
                strArr.push(arr[i].toLowerCase())
            }
        }

        if(strArr.length<1) reject("No strings found in array");

        resolve(strArr);
    })
}

// arrays for testing
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
const mixedArray2 = [100, 10, true, 25, false, true];
const mixedArray3 = ['P', 10, true, 25, false,];

// test calls
lowerCaseWords(mixedArray).then((arr) => {
    console.log(arr)
}).catch((err) => {
    console.log(err)
})
lowerCaseWords(mixedArray2).then((arr) => {
    console.log(arr)
}).catch((err) => {
    console.log(err)
})
lowerCaseWords(mixedArray3).then((arr) => {
    console.log(arr)
}).catch((err) => {
    console.log(err)
})