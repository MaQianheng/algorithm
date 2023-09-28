const entry = {
    a: {
        b: {
            c: {
                dd: 'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
}

// 要求转换成如下对象
const output = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae'
}

// console.log(func1(entry))

function func1(objParam, arrPath = [], objRes = {}) {
    Object.keys(objParam).forEach((strKey) => {
        arrPath.push(strKey)
        if (Object.prototype.toString.call(objParam[strKey]) === '[object Object]') func1(objParam[strKey], arrPath, objRes)
        else {
            objRes[arrPath.join('.')] = objParam[strKey]
            arrPath.pop()
        }
    })
    arrPath.pop()
    return objRes
}

// 给定一个中文数字，把它转换成Number数字
// 五千四百万六千零一 转换成 54006001
function func2(strParam) {
    const objDic1 = {
        '零': 0,
        '一': 1,
        '二': 2,
        '三': 3,
        '四': 4,
        '五': 5,
        '六': 6,
        '七': 7,
        '八': 8,
        '九': 9
    }
    const objDic2 = {
        '十': 10,
        '百': 100,
        '千': 1000,
        '万': 10000
    }
    const objDic3 = {
        '十万': 100000,
        '百万': 1000000,
        '千万': 10000000
    }
    let numRes = 0, numTmp = 0, numPreMulti = 0
    for (let i = 0; i < strParam.length; i++) {
        let strTmp = strParam.slice(i, i + 2)
        if (strTmp in objDic3) {
            if (numTmp && numPreMulti) numTmp = numTmp * (numPreMulti / 10)
            numRes += numTmp
            numRes *= objDic3[strTmp]
            numTmp = 0
            i += 1
            continue
        }
        const charTmp = strParam[i]
        if (charTmp in objDic1) {
            numTmp = objDic1[charTmp]
            continue
        }
        if (charTmp in objDic2) {
            if (charTmp === '万') {
                if (numTmp && numPreMulti) numRes += (numTmp * (numPreMulti / 10))
                numPreMulti = 0
                numRes *= 10000
            } else {
                numPreMulti = objDic2[charTmp]
                numTmp *= numPreMulti
                numRes += numTmp
                numTmp = 0
            }
        }
    }
    if (numTmp && numPreMulti) numRes += (numTmp * (numPreMulti / 10))
    return numRes
}

// 六千零一
// console.log(func2('五千四百万六千零一'))

// 中文转数字
function ChineseToNumber(chnStr) {
    let rtn = 0
    let section = 0
    let number = 0
    let secUnit = false
    const chnNumChar = {
        '零': 0,
        '一': 1,
        '二': 2,
        '三': 3,
        '四': 4,
        '五': 5,
        '六': 6,
        '七': 7,
        '八': 8,
        '九': 9
    }
    const chnNameValue = {
        '十': {value: 10, secUnit: false},
        '百': {value: 100, secUnit: false},
        '千': {value: 1000, secUnit: false},
        '万': {value: 10000, secUnit: true},
        '亿': {value: 100000000, secUnit: true}
    }
    for (let i = 0; i < chnStr.length; i++) {
        let num = chnNumChar[chnStr[i]]
        if (typeof num !== 'undefined') {
            number = num
            if (i === chnStr.length - 1) section += number
        } else {
            let unit = chnNameValue[chnStr[i]].value
            secUnit = chnNameValue[chnStr[i]].secUnit
            if (secUnit) {
                section = (section + number) * unit
                rtn += section
                section = 0
            } else section += (number * unit)
            number = 0
        }
    }
    return rtn + section
}

// console.log(ChineseToNumber('五千四百万六千零一'))

//函数功能：将多层嵌套的数组扁平化，k为展开的层数
function flat(arr, k) {
    if (k === 0) return arr
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            //注意concat方法是不改变原数组的，所以要重新赋值
            res = res.concat(flat(arr[i], k - 1))
        } else res.push(arr[i])
    }
    return res
}

//测试
// console.log(flat([1, [2, [3, [4]]]], 2));

const inorderTraversal = function (root) {
    const arrRes = [], arrStack = []
    let node = root
    while (node !== null || arrStack.length !== 0) {
        if (node !== null) {
            arrStack.push(node)
            node = node.left
        } else {
            node = arrStack.pop()
            arrRes.push(node.key)
            node = node.right
        }
    }
    return arrRes
}

class Scheduler {
    constructor() {
        this.numTasks = 0
        this.arrQue = []
    }
    add(promiseCreator) {
        if (this.numTasks < 2) {
            this.numTasks += 1
            return this.exe(promiseCreator)
        } else {
            return new Promise(resolve => {
                this.arrQue.push(() => promiseCreator().then(resolve))
            })
        }
    }
    exe(promiseCreator) {
        return promiseCreator().then(() => {
            this.numTasks -= 1
            if (this.arrQue.length) this.exe(this.arrQue.shift())
        })
    }
}

const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})
const scheduler = new Scheduler()
const addTask = (time, order) => {
    scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')

// output: 2 3 1 4
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4
// timeout(100).then(() => console.log(1111))
