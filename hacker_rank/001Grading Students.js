'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

let inputTimes = 0;

process.stdin.on('data', function(inputStdin) {
    if (inputTimes===0) {
        inputTimes = parseInt(inputStdin)+1
    }
    inputString += inputStdin;
    inputTimes--
    if (inputTimes===0) {
        process.stdin.emit('end');
    }
    // console.log(inputString);
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    // inputString.splice(inputString.length-1,inputString.length);
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    const result = []
    for(let i = 0; i < grades.length; i++){
        let grade = grades[i]
        let remiander = grade%5
        if (remiander-3>0||remiander-3===0) {
            let diff = 5-remiander
            if (grade + diff<40) {
                result.push(grade)
            } else {
                result.push(grade + diff)
            }
        } else {
            result.push(grade)
        }
    }
    return result
}

function main() {
    // process.env.OUTPUT_PATH
    const ws = fs.createWriteStream('./Student_Grade.txt');

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
