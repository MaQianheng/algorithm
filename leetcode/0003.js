function lengthOfLongestSubstring(s) {
    let numLeftP = 0, strCur = s.slice(0, 1), numMaxLen = strCur.length
    for (let i = 1; i < s.length; i++) {
    	let numTmp = strCur.indexOf(s[i])
        if (numTmp !== -1) numLeftP += numTmp + 1
	    console.log(strCur, s[i], s.slice(numLeftP, i + 1), numTmp, numLeftP)
        strCur = s.slice(numLeftP, i + 1)
        numMaxLen = Math.max(strCur.length, numMaxLen)
    }
    return numMaxLen
};

console.log(lengthOfLongestSubstring('abcdaacdferthh'))