function timeConversion(s) {
	let m = s.substring(8,10)
	if (m==='AM') {
        return s.substring(2,8)
    }
    let hour = s.substring(0,2)
    hour = parseInt(hour)+12
    if (hour===24) {
        hour = '00'
    }
    return hour+s.substring(2,8)
}

console.log(timeConversion('12:45:54PM'))