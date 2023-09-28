const arr = [0,1,2,3,4,5,6,36,46]
const obj = {}
for (let i=0;i<arr.length;i++){
	obj[i] = []
	for (let j=i+2;j<arr.length;j++) {
		obj[i].push(String(j))
    }
}
for (let key in obj) {
	let array = obj[key]
	for (let i =0;i<array.length;i++) {
		let lastDigit = array[i].charAt((array[i].length-1))
		if (lastDigit in obj) {
			for (let j=0;j<obj[lastDigit].length;j++) {
				let newIndex = array[i]+String(obj[lastDigit][j])
				array.push(newIndex)
			}
		}
	}
}
console.log(obj)