let url = 'http://m.01zhuanche.com/touch/home';

var start = +new Date();
document.querySelector('.submit').click();
setInterval(function(){
	if (document.querySelector('#tipp').style.display === 'block') {
		document.querySelector('#tipp a').click();
		document.querySelector('.submit').click();
	}
	console.clear();
	var now = +new Date();
	var time = now - start;
	var seconds = parseInt(time/1000, 10);
	var hour = parseInt(seconds/3600, 10);
	var minute = parseInt((seconds - (hour * 3600))/60, 10);
	var second = parseInt((seconds - (hour * 3600) - (minute * 60)), 10);
    console.log(new Date().toLocaleString() + '\n' + '已运行' + hour + '小时' + minute + '分钟' + second + '秒');
}, 1000);
