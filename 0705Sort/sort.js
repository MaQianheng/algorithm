const arrNums = [43, 28, 91, 38, 26, 76, 25, 7, 69, 88, 89, 7, 9, 5, 55, 43, 98, 26, 83, 71, 42, 85, 94, 73, 84, 3, 66, 18, 50, 97, 88, 44, 4, 88, 82, 89, 91, 36, 37, 12, 46, 75, 4, 62, 55, 39, 87, 92, 22, 58, 3, 53, 10, 0, 64, 82, 78, 75, 38, 30, 27, 35, 91, 82, 0, 34, 52, 59, 60, 60, 42, 26, 12, 71, 10, 31, 44, 50, 60, 62, 82, 51, 84, 90, 54, 85, 92, 53, 14, 18, 66, 8, 67, 5, 27, 56, 0, 98, 22, 48
]

function bubbleSort(arrParam) {
    /**
     * [3,8,2,1,66,-2]
     *      [3,2,1,8,-2,66]
     *      [2,1,3,-2,8,66]
     *      ....
     * ifExchange作用：检测j循环中是否发生交换，如果没有发生一次交换即代表数组已经有序
     */
    let numTmp, ifExchange = false, num = 0
    for (let i = 0; i < arrParam.length - 1; i++) {
        for (let j = 0; j < arrParam.length - 1 - i; j++) {
            num += 1
            // 每次循环都把当前数据中最大的数移动到最右边
            if (arrParam[j] > arrParam[j + 1]) {
                ifExchange = true
                numTmp = arrParam[j + 1]
                arrParam[j + 1] = arrParam[j]
                arrParam[j] = numTmp
            }
        }
        if (!ifExchange) break
        else ifExchange = false
    }
    return arrParam
}

console.log(bubbleSort(arrNums))

// function b1(arrParam) {
//     let numTmp
//     for (let i = 0; i < arrParam.length - 1; i++) {
//         for (let j = 0; j < arrParam.length - 1 - i; j++) {
//             if (arrParam[j] > arrParam[j + 1]) {
//                 numTmp = arrParam[j + 1]
//                 arrParam[j + 1] = arrParam[j]
//                 arrParam[j] = numTmp
//             }
//         }
//     }
//     return arrParam
// }
