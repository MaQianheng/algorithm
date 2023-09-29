// strNum.length <= 4 （长度固定小于等于4）
const convertSecotor = (strNum: string) => {
  const cnNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  if (strNum.length > 4) {
    throw new Error('the length of input pararmeter must less or equal to 4');
  }
  const ret: Array<string> = [];
  const units = ['千', '百', '十', ''];
  let unitsIndex = units.length - 1;
  for (let i = strNum.length - 1; i > -1; i--) {
    const char = strNum[i];
    const num = Number(char);
    // num === 0
    const unit = units[unitsIndex];
    unitsIndex -= 1;
    let strCn = '';
    if (num === 0) {
      strCn = unit ? '零' : '';
    } else {
      strCn = cnNum[num] + unit;
    }
    // 特殊处理
    if (unit === '十' && num === 1 && strNum[i - 1] === undefined) {
      strCn = '十';
    }
    if (strCn) {
      ret.unshift(strCn);
    }
  }
  // console.log(ret);
  // console.log(ret);
  // 去除连续的 零
  for (let i = 0; i < ret.length; i++) {
    if (ret[i] === '零') {
      if (ret[i + 1] === '零' || (i === ret.length - 1 && ret.length > 1)) {
        ret[i] = '';
      }
    }
  }
  return ret.join('');
};

const main = (num: number) => {
  const strNum: string = String(num);
  const units: Array<string> = ['亿', '万', ''];
  let unitsIndex: number = units.length - 1;
  let tmp: Array<string> = [];
  const ret: Array<string> = [];
  for (let i = strNum.length - 1; i > -1; i--) {
    const char = strNum[i];
    tmp.unshift(char);
    if (tmp.length === 4 || (i === 0 && tmp.length)) {
      // console.log(convertSecotor(tmp.join('')));
      ret.unshift(`${convertSecotor(tmp.join(''))}${units[unitsIndex]}`);
      unitsIndex -= 1;
      tmp = [];
    }
  }
  return ret.join('');
};

console.log(901, main(901));
// 901 九百零一
console.log(9001001, main(9001001));
// 9001001 九百万一千零一
console.log(8901, main(8901));
// 8901 八千九百零一
console.log(1, main(1));
// 1 一
console.log(12, main(12));
// 12 十二
console.log(123, main(123));
// 123 一百二十三
console.log(1234, main(1234));
// 1234 一千二百三十四
console.log(12345, main(12345));
// 12345 一万二千三百四十五
console.log(123456, main(123456));
// 123456 十二万三千四百五十六
console.log(1234567, main(1234567));
// 1234567 一百二十三万四千五百六十七
console.log(12345678, main(12345678));
// 12345678 一千二百三十四万五千六百七十八
console.log(123456789, main(123456789));
// 123456789 一亿二千三百四十五万六千七百八十九
console.log(1234567890, main(1234567890));
// 1234567890 十二亿三千四百五十六万七千八百九十
console.log(12345678901, main(12345678901));
// 12345678901 一百二十三亿四千五百六十七万八千九百零一
console.log(12345678910, main(12345678910));
// 12345678910 一百二十三亿四千五百六十七万八千九百一十
console.log(12345678915, main(12345678915));
// 12345678915 一百二十三亿四千五百六十七万八千九百一十五
