import {SingleCircularLinkedList} from "./SingleCircularLinkedList.js"

// const sclTmp = new SingleCircularLinkedList()
let sclTmp = new SingleCircularLinkedList(Array(8).fill().map((_, numIndex) => numIndex))
// sclTmp.print()
console.log(sclTmp.removeByIndex(5).anyData)
sclTmp.print()
/**
 * Josephu（约瑟夫）问题
 * 设编号为1，2...n的n个人围坐一圈，约定编号为k（1<=k<=n）的人总1开始报数，数到m的人出列，他的下一位又从1开始报数，数到m的人又出列，以此类推，直到所有人出列为止，由此产生一个出对编号的队列。
 */
