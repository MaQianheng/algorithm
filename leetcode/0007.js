/*
* @Author: 123456
* @Date:   2021-08-17 16:54:29
* @Last Modified by:   123456
* @Last Modified time: 2021-08-17 17:11:38
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = String(x)
    if (x[0] === '-') {
    	x = '-' + x.slice(1).split('').reverse().join('')
    } else {
    	x = x.split('').reverse().join('')
    }
    if (x.length > 32) return 0
    return x
}

console.log(reverse('123'))