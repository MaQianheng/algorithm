/*
* @Author: 123456
* @Date:   2021-09-15 12:10:11
* @Last Modified by:   123456
* @Last Modified time: 2021-09-15 13:49:41
*/

/**
 * 
给你一个字符串 s 和一个字符串数组 dictionary ，找出并返回 dictionary 中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。

如果答案不止一个，返回长度最长且字典序最小的字符串。如果答案不存在，则返回空字符串。


示例 1：
输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
输出："apple"

示例 2：
输入：s = "abpcplea", dictionary = ["a","b","c"]
输出："a"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(strParam, arrDic) {
	arrDic = arrDic.sort((word1, word2) => {
        if (word1.length !== word2.length) {
            return word2.length - word1.length;
        } else {
            return word1.localeCompare(word2);
        }
    })
    console.log(arrDic)
	let numMaxLen = 0
	for (let i = 0; i < arrDic.length; i++) {
		if (funcHelper(strParam, arrDic[i])) return arrDic[i]
	}
	return ''
};

function funcHelper(str1, str2) {
	let numIndex = 0
	for (let i = 0; i < str2.length; i++) {
		let strTmp = str2[i]
		str1 = str1.slice(numIndex)
		let numTmp = str1.indexOf(strTmp)
		if (numTmp === -1) return false
		numIndex = numTmp + 1
	}
	return true
}

console.log(findLongestWord("abpcplea", ["ale","apple","monkey","plea", "abpcplaaa","abpcllllll","abccclllpppeeaaaa"]))