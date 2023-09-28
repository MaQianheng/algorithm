'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

let inputTimes = 5;

// 7 11(s,t)
// 5 15(a,b)
// 3 2(m,n)
// -2 2 1(distances that each apple falls from point)
// 5 -6(distances that each oranges falls from point)

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
    inputTimes--
    if (inputTimes===0) {
        process.stdin.emit('end');
    }
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesCount = 0
    let orangesCount = 0
    let applesObj = {}
    let orangesObj = {}
    let miniApple = s - a - 1
    let maxApple = t - a + 1
    let miniOrange = s - b - 1
    let maxOrange = t - b + 1
    
    console.log(apples.reduce((sum, d) => sum + (s - a <= d && d <= t - a), 0));
    console.log(oranges.reduce((sum, d) => sum + (s - b <= d && d <= t - b), 0));

    // applesCount = apples.reduce((total,item) => ((item > miniApple && item < maxApple) ? total++ : null))
    // orangesCount = oranges.reduce((total,item) => ((item > miniOrange && item < maxOrange) ? total++ : null))

    // var numbers = [65, 44, 12, 4]
    // numbers.reduce((total,num) => (total+num))
    
    // for (let i = 0; i < apples.length; i++){
    //     if (apples[i] in applesObj) {
    //         if (applesObj[apples[i]]===1) {
    //             applesCount++
    //         }
    //     } else {
    //         if (apples[i] > miniApple && apples[i] < maxApple) {
    //             applesObj[apples[i]] = 1
    //             applesCount++
    //         } else {
    //             applesObj[apples[i]] = 0
    //         }
    //     }
    // }

    // for (let i = 0; i < oranges.length; i++){
    //     if (oranges[i] in orangesObj) {
    //         if (orangesObj[oranges[i]]===1) {
    //             orangesCount++
    //         }
    //     } else {
    //         if (oranges[i] > miniOrange && oranges[i] < maxOrange) {
    //             orangesObj[oranges[i]] = 1
    //             orangesCount++
    //         } else {
    //             orangesObj[oranges[i]] = 0
    //         }
    //     }
    // }
    
    // console.log(applesCount)
    // console.log(orangesCount)
}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ')

    const oranges = readLine().split(' ')

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
