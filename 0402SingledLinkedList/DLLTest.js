import {DoubleLinkedList} from "./DoubleLinkedList.js"

const dlTmp = new DoubleLinkedList([1, 2, 4, 6, 9, 12, 33])
// dlTmp.print()

console.log(dlTmp.setPrevNode(999).getNodeLength())
