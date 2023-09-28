/*const arr = ['hi', ['hello', 1], 2, [3, [4, [5]]]]

function flat(arr) {
    let arrRes = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) arrRes = arrRes.concat(flat(arr[i]))
        else arrRes.push(arr[i])
    }
    return arrRes
}
console.log(flat(arr))*/

// 有如下结构的树结构，定义一个函数findName，要求输入id，则返回对应的name

// findName(1, tree)，返回“浙江”
// findName(20, tree)，返回“济南”
// findName(212, tree), 返回“烟台2”
const tree = [
    {
        id: 1,
        name: '浙江',
        children: [
            {
                id: 10,
                name: '杭州',
                children: [
                    {
                        id: 100,
                        name: '西湖',
                    },
                    {
                        id: 101,
                        name: '余杭',
                    },
                ],
            },
            {
                id: 11,
                name: '绍兴',
                children: [
                    {
                        id: 111,
                        name: '绍兴1',
                    },
                    {
                        id: 112,
                        name: '绍兴2',
                    },
                ],
            }
        ],
    },
    {
        id: 2,
        name: '山东',
        children: [
            {
                id: 20,
                name: '济南',
                children: [
                    {
                        id: 200,
                        name: '济南1',
                    },
                    {
                        id: 201,
                        name: '济南2',
                    },
                ],
            },
            {
                id: 21,
                name: '烟台',
                children: [
                    {
                        id: 211,
                        name: '烟台1',
                    },
                    {
                        id: 212,
                        name: '烟台2',
                    },
                ],
            }
        ],
    },
    {
        id: 3,
        name: '澳门',
        children: [
            {
                id: 30,
                name: '澳门1'
            },
            {
                id: 31,
                name: '澳门2'
            }
        ],
    }
]

function findName(id, tree) {
    const strId = String(id)
    let objTmp = tree[strId[0] - 1], res = objTmp.name
    objTmp = objTmp.children
    for (let i = 1; i < strId.length; i++) {
        let index = strId[i]
        if (!objTmp[index]) index -= 1
        const {name, children} = objTmp[index]
        objTmp = children
        res = name
    }
    return res
}

// console.log(findName(1, tree))
// console.log(findName(20, tree))
// console.log(findName(212, tree))

const sleep = time => {
    return new Promise(resolve => setTimeout(resolve, time))
}
// sleep(1000).then(() => {
//     console.log(1)
// })

async function func() {
    console.log('hello')
    await sleep(2000)
    console.log('world')
}

// func()

// javascript (async () => { console.log('hello') await sleep(2000) // 等待两秒 console.log('world') })() @param ms
//
// const sleep = (ms) => {
//
// }


function mergeObjectListByKey(oldList, newList, key) {
    const arrRes = [], objRef = {}
    for (let i = 0; i < oldList.length; i++) {
        const list = oldList[i]
        const keyVal = list[key]
        objRef[keyVal] = list
        arrRes.push(list)
    }
    for (let i = 0; i < newList.length; i++) {
        const list = newList[i]
        const keyVal = list[key]
        if (!objRef.hasOwnProperty(keyVal)) arrRes.push(list)
        else {
            /*const objTmp = {
                [key]: keyVal
            }*/
            Object.keys(list).forEach((k) => {
                const oldVal = objRef[keyVal][k], newVal = list[k]
                if (oldVal !== newVal) {
                    if (oldVal) delete objRef[keyVal][k]
                    else objRef[keyVal][k] = newVal
                }
            })
        }
    }
    return arrRes
}
// 测试数据
const team = [
    {id: 1, name: '张三', age: 11},
    {id: 2, name: 'mike', age: 22},
    {id: 3, name: '小李', age: 44},
    {id: 5, name: '李', age: 44, gender: 1},
]
const newTeam = [
    {id: 2, name: 'mike', age: 99},
    {id: 3, name: '小李', tel: 18899998888},
    {id: 4, name: 'jay'},
    {id: 5, name: '李', age: 44, gender: 0, tel: 12312312312},
]

const mergedTeam = mergeObjectListByKey(team, newTeam, 'id').sort((a, b) => a.id - b.id)
console.log(mergedTeam)
