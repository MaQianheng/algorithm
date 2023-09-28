const arrOri = [
    {
        "select": "33",
        "nid": "3581",
        "name": "22",
        "title": "11",
        "tid": "3579"
    },
    {
        "select": "333",
        "nid": "3581",
        "name": "22",
        "title": "11",
        "tid": "3579"
    },
    {
        "select": "123",
        "nid": "3581",
        "name": "22",
        "title": "11",
        "tid": "3579"
    },
    {
        "select": "hjk",
        "nid": "3586",
        "name": "asdf",
        "title": "11",
        "tid": "3579"
    },
    {
        "select": "sdf",
        "nid": "3586",
        "name": "asdf",
        "title": "11",
        "tid": "3579"
    },
    {
        "select": "sg",
        "nid": "3589",
        "name": "smgui",
        "title": "1",
        "tid": "3576"
    },
    {
        "select": "g",
        "nid": "3589",
        "name": "smgui",
        "title": "1",
        "tid": "3576"
    }
]

/**
[
	{
		title: '11',
		tid: '3579',
		contentArr: [
			{
				name: '22',
				nid: '3581',
				select: ['33', '333', '123']
			},
			{
				name: 'asdf',
				nid: '3586',
				select: ['hjk', 'sdf']
			}
		]
	},
	{
		title: '1',
		tid: '3576',
		contentArr: [
			{
				name: 'smgui',
				nid: '3589',
				select: ['sg', 'g']
			}
		]
	}
]
*/
function func(arrOri) {
	const objTid = {}, objNid = {}, arrRes = []
	for (let i = 0; i < arrOri.length; i++) {
		const {select, nid, name, title, tid} = arrOri[i]
		if (nid in objNid) {
			objNid[nid].select.push(select)
			continue
		}
		const objNidTmp = {
			name,
			nid,
			select: [select]
		}
		objNid[nid] = objNidTmp
		if (!(tid in objTid)) {
			const objTidTmp = {
				title,
				tid,
				contentArr: [objNidTmp]
			}
			objTid[tid] = objTidTmp
			arrRes.push(objTidTmp)
		} else objTid[tid].contentArr.push(objNidTmp)
	}
	return arrRes
}

console.log(func(arrOri))

function func1(arr) {
    const res = []
    const dfs = (strTmp, numCurIndex) => {
        if(strTmp.length === arr.length) {
            res.push(strTmp)
            return
        }
        arr[numCurIndex].forEach(char => {
    		dfs(strTmp + char, numCurIndex + 1)
    	})
    }
    dfs("", 0)
    return res
}
console.log(func1([['A', 'B'], ['a', 'b'], ['1', '2'], ['3', '4', '5']]))


//input ["a","b","c","d","e","f","g"]
//output {"a":{"b":{"c":{"d":{"e":{"f":"g"}}}}}}
function func(arr){
	const objRes = {[arr[0]]: {[arr[1]]: {}}}
	let objCur = objRes[arr[0]]
	// {a: 'b'}
	for (let i = 2; i < arr.length; i++) {
		let pre = arr[i - 1]
		if (i === arr.length - 1) {
			objCur[pre] = arr[i]
			return objRes
		}
		objCur[pre] = {[arr[i]]: {}}
		objCur = objCur[pre]
	}
}



























