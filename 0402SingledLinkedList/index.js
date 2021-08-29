import {SingleLinkedList} from './SingleLinkedList.js'

const singleLinkedList = new SingleLinkedList(0)
singleLinkedList.add(-1)
singleLinkedList.add(-2)
singleLinkedList.add(-3)
singleLinkedList.add(-4)
singleLinkedList.batchAdd([1,2,3,4,4,56,7,8,9])
singleLinkedList.print()
