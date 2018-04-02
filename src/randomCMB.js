/**
 * 招行生日10倍积分刷卡计划
 * @param {Number} min 每次最少刷多少
 * @param {Number} max 每次最多刷多少
 */
let randomCMB = function (min = 0, max) {
	let results = [];
	let last = 22240;
	if (!max) {
		max = last;
    }
    let times = 10000;
    switch (min) {
        case 100 < min && min <= 1000:
            times = 1000;
            break;
        case 10 < min && min <= 100:
            times = 100; 
    }
	let ponitsMoney = 0;
	while (ponitsMoney < 22240) {
		let temp = ponitsMoney;
		let pay = parseInt((Math.random() * times), 10);
		if (pay > min && pay < max) {
			ponitsMoney = ponitsMoney + (pay - (pay % 20));
			if (ponitsMoney < 22240) {
				results.push(pay);
				last = last - pay;
			}
			else {
				pay = last + parseInt((20 * Math.random()), 10);
				results.push(pay);
			}
		}
	}
	return results;
}