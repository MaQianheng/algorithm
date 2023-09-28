function processData(input) {
    const arr = input.split('\n')
    for (let i=1;i<arr.length;i++) {
        let num = parseInt(arr[i])
        let sequence = 1
        if (num!==1) {
        	do {
        		if (num%2===0) {
        			num = num/2
	                sequence++
	            } else {
	                num = 3*num+1
	                sequence++
	            }
	        } while(num!==1)
        }
        console.log(`${i} ${arr[i]} ${sequence}`)
    }
}

processData(`4
1
3
9999
100000`)