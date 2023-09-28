/*
* @Author: 123456
* @Date:   2021-09-18 12:24:53
* @Last Modified by:   123456
* @Last Modified time: 2021-09-18 12:35:16
*/

/*
 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回该列名称对应的列序号。
 例如，
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/excel-sheet-column-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} strColumnTitle
 * @return {number}
 */
var titleToNumber = function(strColumnTitle) {
	let numRes = 0
    for (const c of strColumnTitle) {
        numRes = numRes * 26 + (c.charCodeAt() - 64)
    }
    return numRes

	// 作者：chen-xin-an
	// 链接：https://leetcode-cn.com/problems/excel-sheet-column-number/solution/da-jia-wan-an-shui-ge-hao-jue-by-chen-xi-mgyu/
	// 来源：力扣（LeetCode）
	// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
};

console.log(titleToNumber('AB'))