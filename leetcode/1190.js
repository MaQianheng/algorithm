/*
* @Author: 123456
* @Date:   2021-11-02 15:39:31
* @Last Modified by:   123456
* @Last Modified time: 2021-11-02 15:59:20
*/
/**
 * 给出一个字符串 s（仅含有小写英文字母和括号）。

请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

注意，您的结果中 不应 包含任何括号。

 

示例 1：

输入：s = "(abcd)"
输出："dcba"
示例 2：

输入：s = "(u(love)i)"
输出："iloveu"
解释：先反转子字符串 "love" ，然后反转整个字符串。
示例 3：

输入：s = "(ed(et(oc))el)"
输出："leetcode"
解释：先反转子字符串 "oc" ，接着反转 "etco" ，然后反转整个字符串。
示例 4：

输入：s = "a(bcdefghijkl(mno)p)q"
输出："apmnolkjihgfedcbq"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(strParam) {
	let arrStack = []
	let strRes = ''
	for (let i = 0; i < strParam.length; i++) {
		switch (strParam[i]) {
			case '(':
				arrStack.push(strRes)
				strRes = ''
				break
			case ')':
				strRes = strRes.split('').reverse().join('')
				strRes = arrStack.pop() + strRes
				break
			default: 
				strRes += strParam[i]
				break
		}
	}
	return strRes
};

console.log(reverseParentheses("(u(love)i)"))








































