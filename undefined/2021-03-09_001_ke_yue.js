// (abc)de(fg)hi(jklm)n(o) -> cbadegfhimlkjno
// 反转括号内的字符
function func1(str) {
  let arrStack = [];
  let strRes = '';
  let ifIn = false;
  for (let i = 0; i < str.length; i++) {
    let anyTmp = str[i];
    switch (anyTmp) {
      case '(':
        ifIn = true;
        continue;
      case ')':
        ifIn = false;
        strRes += arrStack.reverse().join('');
        arrStack = [];
        continue;
      default:
        ifIn ? arrStack.push(anyTmp) : (strRes += anyTmp);
        break;
    }
  }
  return strRes;
}

// console.log(func1("(abc)de(fg)hi(jklm)n(o)"))

// [1,2,3,6,8,9,11], [3,6,8,11,12,16,23]
// 按从小到大顺序合并两个已排序数组
function func2(arr1, arr2) {
  let arrRes = [];
  let numPointer1 = 0;
  let numPointer2 = 0;
  while (true) {
    let num1 = arr1[numPointer1];
    let num2 = arr2[numPointer2];
    if (!num1) {
      arrRes = arrRes.concat(arr2.slice(numPointer2));
      break;
    }
    if (!num2) {
      arrRes = arrRes.concat(arr1.slice(numPointer1));
      break;
    }
    if (num1 < num2) {
      arrRes.push(num1);
      numPointer1 += 1;
    } else {
      arrRes.push(num2);
      numPointer2 += 1;
    }
  }
  return arrRes;
}

// console.log(func2([1, 2, 3, 6, 8, 9, 11], [3, 6, 8, 11, 12, 16, 23]))
// console.log([1, 2, 3, 6, 8, 9, 11].concat([3, 6, 8, 11, 12, 16, 23]).sort((a, b) => a - b))

function funcFindSmallestValeIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '/') return i;
  }
  return 0;
}

// [[1,2,3,6,8,9,11], [3,6,8,11,12,16,23], [4,6,8,11,14]]
function func3(arrTwoD) {
  let numCounter = 0;

  let arrRes = [];
  let numArrLength = arrTwoD.length;
  let arrPointer = Array(numArrLength).fill(0);

  let arrNumTmp = [];
  let numFinishedQueue = 0;
  while (true) {
    let numSmallest = undefined;
    let numSmallestNumberIndex = 0;
    for (let i = 0; i < numArrLength; i++) {
      numCounter++;
      if (arrNumTmp[i] === '/') continue;
      let arrTmp = arrTwoD[i];
      if (!arrNumTmp[i]) {
        let numPointer = arrPointer[i];
        if (arrTmp[numPointer]) {
          arrNumTmp[i] = arrTmp[numPointer];
        } else {
          arrNumTmp[i] = '/';
          numFinishedQueue++;
          if (numFinishedQueue === numArrLength - 1) {
            let numLastArrIndex = funcFindSmallestValeIndex(arrNumTmp);
            arrRes = arrRes.concat(
              arrTwoD[numLastArrIndex].slice([arrPointer[numLastArrIndex]])
            );
            console.log(numCounter);
            return arrRes;
          }
          continue;
        }
      }
      if (!numSmallest) {
        numSmallest = arrNumTmp[i];
        numSmallestNumberIndex = i;
      } else {
        if (arrNumTmp[i] < numSmallest) {
          numSmallest = arrNumTmp[i];
          numSmallestNumberIndex = i;
        }
      }
    }
    arrNumTmp[numSmallestNumberIndex] = undefined;
    arrPointer[numSmallestNumberIndex]++;
    arrRes.push(numSmallest);
    numSmallest = undefined;
  }
}

// console.log(func3([[1, 2, 3, 6, 8, 9, 11, 13, 15, 23, 25, 27, 29, 34, 43], [3, 6, 8, 11, 12, 16, 23, 24, 34, 56, 66, 67], [4, 6, 8, 11, 14, 21, 24, 34, 35, 36, 41, 46]]))
