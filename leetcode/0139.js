/*
* @Author: 123456
* @Date:   2022-02-22 09:59:33
* @Last Modified by:   123456
* @Last Modified time: 2022-02-22 10:03:44
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    wordDict = new Set(wordDict)
    let numIndex = 0
    for (let i = 1; i < s.length; i++) {
        if (wordDict.has(s.slice(numIndex, i))) numIndex = i
    	if (wordDict.has(s.slice(numIndex))) return true
    }
    return wordDict.has(s.slice(numIndex)) ? true : false
};
console.log(wordBreak("goalspecial", ["go","goal","goals","special"]))