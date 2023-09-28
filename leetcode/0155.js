/*
* @Author: 123456
* @Date:   2021-06-22 15:46:37
* @Last Modified by:   123456
* @Last Modified time: 2021-06-22 15:47:05
*/
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = []
    this.arrMin = [Infinity]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.arr.push(val)
    if (val <= this.arrMin[this.arrMin.length - 1]) this.arrMin.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.arrMin[this.arrMin.length - 1] === this.arr[this.arr.length - 1]) this.arrMin.pop()
    this.arr.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (!(this.arr.length)) return null
    return this.arrMin[this.arrMin.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */