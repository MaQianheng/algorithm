import {SingleCircularLinkedList} from "./SingleCircularLinkedList.js"

// let sclTmp = new SingleCircularLinkedList(Array(8).fill().map((_, numIndex) => numIndex))
// sclTmp = sclTmp.sclNex.sclNex
// sclTmp = sclTmp.removeByIndex(2)
// sclTmp.print()
/**
 * Josephu（约瑟夫）问题
 * 设编号为1，2...n的n个人围坐一圈，约定编号为k（1<=k<=n）的人从1开始报数，数到m的人出列，他的下一位又从1开始报数，数到m的人又出列，以此类推，直到所有人出列为止，由此产生一个出对编号的队列。
 */

function josephu(arrParam = Array(8).fill().map((_, numIndex) => numIndex), numDequeueNumber = 1) {
    const arrRes = []
    let sclTmp = new SingleCircularLinkedList(arrParam)
    while (sclTmp.sclNex !== sclTmp.sclHead) {
        const {sclRemoved, sclNex} = sclTmp.dequeueByIndex(numDequeueNumber - 1)
        arrRes.push(sclRemoved.anyData)
        sclTmp = sclNex
    }
    arrRes.push(sclTmp.anyData)
    console.log(arrRes)
}

josephu()
