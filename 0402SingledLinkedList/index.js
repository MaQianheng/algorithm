import {SingleLinkedList} from './SingleLinkedList.js'

// const singleLinkedList = new SingleLinkedList(0)
// singleLinkedList.add(-1)
// singleLinkedList.add(-2)
// singleLinkedList.add(-3)
// singleLinkedList.add(-4)
// singleLinkedList.batchAdd([1, 2, 3, 4, 4, 56, 7, 8, 9])
// singleLinkedList.print()

const slTmp = new SingleLinkedList([1, 2, 4, 6, 9, 12, 33])
const slTmp1 = new SingleLinkedList([4, 6, 9, 9, 10, 14, 23, 44, 77, 89, 91])
const slTmp2 = new SingleLinkedList([44, 55, 67, 75, 77, 78, 88])
const slTmp3 = new SingleLinkedList([46, 51, 54, 55, 57, 79, 80, 82, 83, 85, 86, 89, 89, 90])

// console.log(slTmp.getNodeByIndex(-1).anyData)

unionSortedSLLNumber([slTmp, slTmp1, slTmp2, slTmp3]).print()

function unionSortedSLLNumber(arrParam) {
    const arrContainer = [], arrRes = []
    for (let i = 0; i < arrParam.length; i++) {
        arrContainer[i] = arrParam[i].anyData
    }
    let numFinishedSLL = arrParam.length
    while (numFinishedSLL !== 0) {
        const {numVal, numIndex} = findMinNum(arrContainer)
        arrRes.push(numVal)
        arrParam[numIndex] = arrParam[numIndex].slNex
        arrContainer[numIndex] = arrParam[numIndex] ? arrParam[numIndex].anyData : null
        if (arrContainer[numIndex] === null) numFinishedSLL--
    }
    return new SingleLinkedList(arrRes)
}

function findMinNum(arrParam) {
    let numVal = arrParam[0], numIndex = 0
    for (let i = 1; i < arrParam.length; i++) {
        if (numVal === null && arrParam[i] !== null) {
            numVal = arrParam[i]
            numIndex = i
        }
        if (arrParam[i] === null) continue
        if (arrParam[i] < numVal) {
            numVal = arrParam[i]
            numIndex = i
        }
    }
    return {numVal, numIndex}
}
