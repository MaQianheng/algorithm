/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// [2,4,9]
// [5,6,4,9]

console.log(handleTraverseLinkedList(addTwoNumbers(funcCreateLinkedList([2,4,9]), funcCreateLinkedList([5,6,4,9]))))

 function ListNode(val, next) {
 	this.val = (val===undefined ? 0 : val)
 	this.next = (next===undefined ? null : next)
}

// [2,4,3], [5,6,4]

function funcCreateLinkedList(arr) {
	const slRes = new ListNode(arr[0])
	let slTmp = slRes
	for (let i = 1; i < arr.length; i++) {
		slTmp.next = new ListNode(arr[i])
		slTmp = slTmp.next
	}
	return slRes
}

function handleTraverseLinkedList(slParam) {
	while (slParam) {
		console.log(slParam.val)
		slParam = slParam.next
	}
}

function funcGetSumCarryAndLastDigit (arr) {
	const numRes = arr.reduce((pre, cur) => (pre += cur))
	let numCarry, numLastDigit
	if (numRes >= 10) {
		numCarry = 1, numLastDigit = numRes % 10
	} else {
		numCarry = 0
        numLastDigit = numRes
    }
    return {numCarry, numLastDigit}
}

function addTwoNumbers(l1, l2) {
    const obj = funcGetSumCarryAndLastDigit([l1.val, l2.val])
    let numCarry = obj.numCarry
    let lsRes = new ListNode(obj.numLastDigit)
    let lsTmp = lsRes

    l1 = l1.next
    l2 = l2.next
    while (l1 || l2) {
    	const objTmp = funcGetSumCarryAndLastDigit([l1 ? l1.val : 0, l2 ? l2.val : 0, numCarry])
    	if (l1) l1 = l1.next
		if (l2) l2 = l2.next
    	numCarry = objTmp.numCarry
    	lsTmp.next = new ListNode(objTmp.numLastDigit)
    	lsTmp = lsTmp.next
    }
    if (numCarry) lsTmp.next = new ListNode(1)
	return lsRes
}