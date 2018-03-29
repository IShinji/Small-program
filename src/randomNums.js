var getNums = function(number){
	let results = [];
	while (results.length != number) {
		let num = Math.random()*341;
		if (num > 341) {
			num = num / 10;
		}
		num = parseInt(num, 10);
		let flag = false;
		for (let i = 0; i < results.length; i++) {
			if (num === results[i]) {
				flag = true;
				break;
			}
		}
		if (!flag) {
			results.push(num);
		}
	}
	results.sort(function(a,b){
		return a - b;
	});
	return results;
}
