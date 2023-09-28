function func1() {
    let numRes = 0
    let funcInner = function (num) {
        if (num) {
            numRes += num
            return funcInner
        }
        return numRes
    }
    return funcInner
}

let sum = func1()
// console.log(sum(1)(2)(3)())

// Output:
function func2() {
    let sNodes = [{id: "1-1", pid: 1, name: '第一节'}, {id: "1", pid: 0, name: '第一章'}, {id: "2-1", pid: 2, name: '第一节'}, {id: "2", pid: 0, name: '第二章'}]
}

let outPut =  [{
    id:"1",pid:0, name:'第一章',
    children: [
        {id:"1-1",pid:1,name:'第一节'}]
}, {
    id:"2",pid:0, name:'第二章',
    children: [
        {id:"2-1",pid:2,name:'第一节'}]
} ]
