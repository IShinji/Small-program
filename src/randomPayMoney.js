/**
 * 刷卡计划
 * @param {Number} totolMoney 总共需要刷多少钱
 * @param {Number} min 每次最少刷多少，默认为0
 * @param {Number} max 每次最多刷多少
 */

let getPayMoney = (totolMoney, min = 0, max) => {
	let results = [];
	totolMoney = totolMoney + parseInt((Math.random() * 10), 10);
	let sum = 0;
	if (!max) {
		max = totolMoney;
	}
    let leftMoney;
    let times = 10000;
    switch (min) {
        case 100 < min && min <= 1000:
            times = 1000;
            break;
        case 10 < min && min <= 100:
            times = 100; 
    }
	while (totolMoney > sum) {
		leftMoney = totolMoney - sum;
		let pay = parseInt((Math.random() * times), 10);
		if (pay > min && pay < max) {
			sum = sum + pay;
			if (sum < totolMoney) {
				results.push(pay);
			}
		}
	}
    results.push(leftMoney);
    /**
     * 拿当前月份的天数
     */
    let getMonthDays = () => {
        let currentTime = new Date();
        let year = currentTime.getFullYear();
        let month = currentTime.getMonth() + 1;
        let days = new Date(year, month, 0).getDate();
        return days;
    };

    let randomDay = () => {
        let payDays = [];
        let days = getMonthDays();
        for (let i = 0; i < results.length; i++) {
            let day = parseInt((Math.random() * days), 10);
            payDays.push(day);
        }
        payDays.sort(function(a, b){
            return a - b;
        });
        for (let i = 0; i < results.length; i++) {
            console.log(payDays[i] + 1 + '日：' + results[i] + '\n');
        }
    };
    randomDay();
}