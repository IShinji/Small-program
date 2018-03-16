var string = ``;
var array = string.split('\n');
var cardList = [];
for (var i = 0 ; i < array.length; i++) {
	var temp = array[i].split('	');
	cardList.push(temp[0]);
}
var cardNum = 0;
for (var i = 0; i < cardList.length; i++) {
	(function(i){
		$.ajax({
			url: 'http://bj.189.cn/iframe/local/queryCardInfo.action',
			method: 'POST',
			data: {
				cardNo: cardList[i],
				// verification code
				randCode: ''
			}	
		})
			.done(function(data){
				var index = data.search(/已使用/);
				if (index === -1) {
					console.error(cardList[i] + '：未使用');
				}
				else {
					console.log(cardList[i] + '：已使用');
				}
				cardNum++;
				if (cardNum === cardList.length) {
					console.log('检查完毕');
				}
			});
	})(i);
}
