function func(str) {
  // let numLeft = 0, numRes = 0, numIndex = 0
  // for (let i = 0; i < str.length; i++) {
  // 	numIndex = str.slice(numLeft, i).indexOf(str[i])
  // 	numIndex === -1 ? numRes = Math.max(numRes, i + 1 - numLeft) : numLeft += numIndex + 1
  // }
  // return numRes

  let numLeft = 0,
    numLongestLength = 0;
  for (let i = 0; i < str.length; i++) {
    let strLetter = str[i];
    let numIndex = str.slice(numLeft, i).indexOf(strLetter) === -1;
    if (numIndex) {
      numLongestLength = Math.max(numLongestLength, i + 1 - numLeft);
    } else {
      numLeft += numIndex + 1;
    }
  }
  return numLongestLength;
}
console.log(func('abcabcbb'));
