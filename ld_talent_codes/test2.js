// CODE 2
/*
Write a function that takes as input a filename. 
The function parses the file reading line by line and determines if
the line contains a single valid number. 
It should return a list of all the numbers found in the file. 

Example input file:
==========================================
#This is an input file with some text and numbers
10
  -50
Some more numbers follow
3.1457
12  00 47
1.25E-7
-20000
==========================================

Above function should return [10, -50, 3.1457, 1.25E-7, -20000]
*/

const fs = require('fs')
function readFileSync(pathToFile) {
    try {
        const data = fs.readFileSync(pathToFile, 'utf8')
        const textContent = data.toString()

        return textContent
    } catch (e) {
        throw Error(e.stack)
    }
}

const pathToFile = './test2.file.txt' // make sure you substitute 'pathToFile' with the actual path to a file in your filesystem.
const fileText = readFileSync(pathToFile)

function getListOfAllNumbersFromText(text) {
    // regular expression to sreach for a valid number
    const regex = RegExp(/-?[\d\.\E\-\d]+/, 'g')
    const LineRgx = RegExp(/\n?[a-z\W\w1-9]+/, 'gi')
    const listOfNumbers = text.match(LineRgx)

    return listOfNumbers
}

let result = getListOfAllNumbersFromText(fileText)
console.log(result) // [10, -50, 3.1457, 1.25E-7, -20000]
