import {SingleCircularLinkedList} from "./SingleCircularLinkedList.js"

// const sclTmp = new SingleCircularLinkedList()
const sclTmp = new SingleCircularLinkedList(Array(8).fill().map((_, numIndex) => numIndex))
sclTmp.print()
