const arrNums = [43, 28, 91, 38, 26, 76, 25, 7, 69, 88, 89, 7, 9, 5, 55, 43, 98, 26, 83, 71, 42, 85, 94, 73, 84, 3, 66, 18, 50, 97, 88, 44, 4, 88, 82, 89, 91, 36, 37, 12, 46, 75, 4, 62, 55, 39, 87, 92, 22, 58, 3, 53, 10, 0, 64, 82, 78, 75, 38, 30, 27, 35, 91, 82, 0, 34, 52, 59, 60, 60, 42, 26, 12, 71, 10, 31, 44, 50, 60, 62, 82, 51, 84, 90, 54, 85, 92, 53, 14, 18, 66, 8, 67, 5, 27, 56, 0, 98, 22, 48]


function handleSwapArrElement(arrParam, numIndex1, numIndex2) {
    const numTmp = arrParam[numIndex1]
    arrParam[numIndex1] = arrParam[numIndex2]
    arrParam[numIndex2] = numTmp
}

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

// console.log(bubbleSort(arrNums))

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

function selectSort(arrParam) {
    for (let i = 0; i < arrParam.length; i++) {
        let numMinVal = arrParam[i], numValIndex = i
        for (let j = i + 1; j < arrParam.length; j++) {
            if (arrParam[j] < numMinVal) {
                numMinVal = arrParam[j]
                numValIndex = j
            }
        }
        if (numValIndex !== i) {
            arrParam[numValIndex] = arrParam[i]
            arrParam[i] = numMinVal
        }
    }
    return arrParam
}

function insertSort(arrParam) {
    for (let i = 1; i < arrParam.length; i++) {
        const numCur = arrParam[i]
        for (let j = 0; j < i - 1; j++) {
            const numPre = arrParam[j], numNex = arrParam[j + 1]
            if (numCur < numPre) {
                arrParam.splice(i, 1)
                arrParam.splice(j, 0, numCur)
                break
            }
            if (numCur > numPre && numCur < numNex) {
                arrParam.splice(i, 1)
                arrParam.splice(j + 1, 0, numCur)
                break
            }
        }
    }
    return arrParam
}

// console.log(insertSort(arrNums))


function shellSort(arrParam) {
    let numStep = Math.floor(arrParam.length / 2)
    while (numStep !== 0) {
        for (let i = numStep; i < arrParam.length; i++) {
            let numSecondNumIndex = i
            let numSecondNum = arrParam[numSecondNumIndex]
            if (arrParam[numSecondNumIndex] < arrParam[numSecondNumIndex - numStep]) {
                while (numSecondNumIndex - numStep >= 0 && numSecondNum < arrParam[numSecondNumIndex - numStep]) {
                    arrParam[numSecondNumIndex] = arrParam[numSecondNumIndex - numStep]
                    numSecondNumIndex -= numStep
                }
                arrParam[numSecondNumIndex] = numSecondNum
            }
            // for (let numFirstNumIndex = i - numStep; numFirstNumIndex >= 0; numFirstNumIndex -= numStep) {
            //     if (arrParam[numFirstNumIndex] > arrParam[numFirstNumIndex + numStep]) handleSwapArrElement(arrParam, numFirstNumIndex, numFirstNumIndex + numStep)
            // }
        }
        numStep = Math.floor(numStep / 2)
    }
    return arrParam
}

// console.log(shellSort(arrNums))

function quickSort(arrParam, numLeftIndex = 0, numRightIndex = arrParam.length - 1) {
    let numLI = numLeftIndex, numRI = numRightIndex
    let numPivot = arrParam[(numLI + numRI) >> 1]
    console.log('<----->')
    // 把比pivot小的值放到左边，比pivot大的值放到右边
    while (true) {
        // 以numLI为下标，在pivot左边一直循环找，找到第一个大于等于pivot的数字。找到后numLI += 1，下一次while (numLI < numRI)循环的while (arrParam[numLI] < numPivot)循环从此处开始
        while (arrParam[numLI] < numPivot) {
            numLI += 1
        }
        while (arrParam[numRI] > numPivot) {
            numRI -= 1
        }
        /**
         * 出现如下情况：[1, 22, 12, 24, 43, 25, 27, 88]
         *  pivot是24，下标为3
         *  此时24左边所有数字都小于pivot，右边数字都大于pivot。numLI = 3, numRI = 3
         *  此时应结束循环
         */
        if (numLI >= numRI) break
        console.log(`${numLI}: ${arrParam[numLI]}`, `${numRI}: ${arrParam[numRI]}`)
        handleSwapArrElement(arrParam, numLI, numRI)
        if (arrParam[numRI] === numPivot) numLI += 1
        if (arrParam[numLI] === numPivot) numRI -= 1
        /**
         * [1, 43, 12, 24, 24, 25, 27, 88]
         * 43 <=> 24
         * [1, 24, 12, 24, 43, 25, 27, 88]
         */
        // console.log(numLI, numRI)
    }
    console.log(arrParam)

    /**
     * 出现如下情况：[1, 22, 12, 24, 43, 25, 27, 88]
     * numLI = 3, numRI = 3
     */
    if (numLI === numRI) {
        numLI += 1
        numRI -= 1
    }
    if (numLeftIndex < numRI) quickSort(arrParam, numLeftIndex, numRI)
    if (numRightIndex > numLI) quickSort(arrParam, numLI, numRightIndex)
    return arrParam
}

// [1, 22, 12, 24, 43, 24, 27, 88]
const arr = [1, 43, 24, 24, 24, 25, 27, 88]

console.log(quickSort(arr))


function quickSort2(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivot = left, index = pivot + 1
        for (let i = index; i <= right; i++) {
            if (arr[i] < arr[pivot]) {
                handleSwapArrElement(arr, i, index)
                index++
            }
        }
        handleSwapArrElement(arr, pivot, index - 1)
        let partitionIndex = index - 1
        quickSort2(arr, left, partitionIndex - 1)
        quickSort2(arr, partitionIndex + 1, right)
    }
    return arr
}

function partition(arr, left, right) {     // 分区操作
    let pivot = left,                      // 设定基准值（pivot）
        index = pivot + 1
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            handleSwapArrElement(arr, i, index)
            index++
        }
    }
    handleSwapArrElement(arr, pivot, index - 1)
    return index - 1
}

// console.log(quickSort2(arrNums, 0, arrNums.length - 1))
