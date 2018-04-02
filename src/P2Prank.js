/**
 * 年化计算器，PS：懒投资
 * @param {Number} totalMoney 投资金额
 * @param {Number} ticket 券减免多少
 * @param {Number} rank 年化率
 * @param {Number} days 投资时长
 * @param {Number} back 其他返利百分比，默认懒投资的0.1
 */
let getRank = function (totalMoney, ticket = 0, rank, days, back = 0.1) {
	rank = rank / 100;
	// 得到的利润
	let oldGetMoney = ((totalMoney * rank) / 365) * days;
	// 利润和券减免的钱
	let newGetMoney = oldGetMoney + ticket;
	// 实际投资用的钱
    let newPayMoney = totalMoney - ticket;
    // 如果有额外的返利
	newPayMoney += (back / 100) * newPayMoney;
	// 利率计算
	let result = ((newGetMoney / days) * 365) / newPayMoney;
	result = result * 100;
	return result
}