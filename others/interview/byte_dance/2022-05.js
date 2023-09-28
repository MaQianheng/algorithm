// import {SingleLinkedList} from "../../../0402LinkedList/SingleLinkedList.js";

// function findSLKLenNode(sl) {
//     const ll = new SingleLinkedList([1,2,3,4,5,6,7,8,9])
//     ll.reverse().print()
// }

// findSLKLenNode()

function func(str, obj) {
    let strRes = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '$' && str[i + 1] === '{') {
            i += 1
            let key = ''
            while (true) {
                i += 1
                if (str[i] === '}') break
                key += str[i]
            }
            strRes += obj[key]
        } else strRes += str[i]
    }
    return strRes
}

// console.log(func("hello ${name}  hello1 ${name1}", {name :"123", name1: "hhh"}))

function func1(arrPromises) {
    const arrRes = []
    let numTmp = arrPromises.length
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arrPromises.length; i++) {
            arrPromises[i].then(res => {
                numTmp -= 1
                arrRes[i] = res + '!!!'
                if (!numTmp) resolve(arrRes)
            }).catch(err => {
                reject(err)
            })
        }
    })
}

// const arr = []
// for (let i = 1; i < 5; i++) {
//     arr.push(new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(i)
//         }, i * 1000)
//     }))
// }
// func1(arr).then(res => {
//     console.log(res)
// })


function func2(nums1, m, nums2, n) {
    let pM = 0, pN = 0
    const tmp = [], numLen = m + n
    for (let i = 0; i < numLen; i++) {
        const num1 = nums1[pM], num2 = nums2[pN]
        if (num1 === undefined) {
            tmp.push(num2)
            pN += 1
            continue
        }
        if (num2 === undefined) {
            tmp.push(num1)
            pM += 1
            continue
        }
        if (pM < m && (num1 <= num2)) {
            tmp.push(num1)
            pM += 1
        } else {
            tmp.push(num2)
            pN += 1
        }
    }
    for (let i = 0; i < numLen; i++) {
        nums1[i] = tmp[i]
    }
    console.log(nums1)
}

// [1,2,2,3,5,6]
// func2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)

async function async1() {
    async function async1() {
        console.log('async1 start');//2
        await async2();//
        console.log('async1 end');//6
    }

    async function async2() {
        console.log('async2');//3
    }

    console.log('illegalscript start');//1
    setTimeout(function () {
        console.log('setTimeout');//8
    }, 0);
    async1();
    new Promise(function (resolve) {
        console.log('promise1');//4
        resolve();
    }).then(function () {
        console.log('promise2');//7
    });
    console.log('illegalscript end');
}

/**
 * illegalscript start
 * async1 start
 * async2
 * promise1
 * illegalscript end
 * async1 end
 * promise2
 * setTimeout
 */
// async1()

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const num = arr[0];
    let left = [], right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= num) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return quickSort(left).concat([num], quickSort(right));
}

// console.log(quickSort([1,4,7,7,7,87,44,32,566,32,12,56,7,8,9,34]))

function func3(arr) {
    let numMax = 0
    for (let i = 0; i < arr.length; i++) {
        numMax += arr[i].m
    }
    const numRandom = Math.random() * numMax
    let numTmp = 0
    for (let i = 0; i < arr.length; i++) {
        numTmp += arr[i].m
        if (numTmp > numRandom) return arr[i].name
    }
}

// console.log(func3([
//     {name: 'a', m: 10},
//     {name: 'b', m: 1},
//     {name: 'c', m: 100},
//     {name: 'd', m: 500},
// ]))

// var a = 10;
// (function () {
//     var a;
//     console.log(window.a)
//     console.log(a)
//     a = 20
//     console.log(a)
// })()
//
// var b = {
//     a,
//     c: b
// }

function BTree(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
}

/**
 *      1
 *  2       3
 * 3       5
 *4 5     1 2
 */
// 对于给定的二叉树，判断是否存在一条完整路径（从根节点开始，到叶节点结束的连线），其路径上结点的值之和为 target， 输出布尔值
const root = new BTree(1, new BTree(2, new BTree(3, new BTree(4), new BTree(5))), new BTree(3, new BTree(5, new BTree(1), new BTree(2))))

function func4(root, target, obj = {res: false, path: []}) {
    if (!root || obj.res) return
    obj.path.push(root.val)
    if (obj.path.reduce((pre, cur) => pre += cur) === target) {
        obj.res = true
        return obj.res
    }
    func4(root.left, target, obj)
    func4(root.right, target, obj)
    obj.path.pop()
    return obj.res
}

console.log(func4(root, 11))

function deepClone(any, mapTmp = new Map()) {
    if (mapTmp.has(any)) return mapTmp.get(any)
    switch (Object.prototype.toString.call(any)) {
        case '[object Array]': {
            const tmp = deepCloneArr(any, mapTmp)
            mapTmp.set(any, tmp)
            return tmp
        }
        case '[object Object]': {
            const tmp = deepCloneObj(any, mapTmp)
            mapTmp.set(any, tmp)
            return tmp
        }
        default:
            return any
    }
}

function deepCloneArr(arr, mapTmp) {
    const arrRes = []
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(deepClone(arr[i], mapTmp))
    }
    return arrRes
}

function deepCloneObj(obj, mapTmp) {
    console.log(obj)
    const objRes = {}
    Object.keys(obj).forEach((strKey) => {
        objRes[strKey] = deepClone(obj[strKey], mapTmp)
    })
    return objRes
}

const a = {b: 1, c: 2}
const target = {a: a, d: a, e: [1, [2, null]], f: null}
const tmp = deepClone(target)
console.log(tmp.a === tmp.d)

















