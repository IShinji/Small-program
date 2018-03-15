(function(){
	var main = function () {
		var start = +new Date();
		var timer = setInterval(function(){
			var xhr = new XMLHttpRequest();          
	        xhr.open('GET', 'https://lantouzi.com/api/lqjh/home_v2', true);
	        xhr.onreadystatechange = function() {
	            if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
	            	console.clear();
	                var data = JSON.parse(xhr.responseText);
	                var now = +new Date();
					var time = now - start;
					var seconds = parseInt(time/1000, 10);
					var hour = parseInt(seconds/3600, 10);
					var minute = parseInt((seconds - (hour * 3600))/60, 10);
					var second = parseInt((seconds - (hour * 3600) - (minute * 60)), 10);
	                console.log(new Date().toLocaleString() + '\n' + '已运行' + hour + '小时' + minute + '分钟' + second + '秒' + '\n' + "可售份额为" + data.data.total_sell_amount);
	                if (data.data.total_sell_amount != 0){
						new Notification("零钱计划有份额啦");
						clearInterval(timer);
					}
	            }
	        };
	        xhr.send();
	    }, 1000);
	}
	if (!("Notification" in window)) {
	    alert("当前浏览器不支持桌面通知");
	}
	else if (Notification.permission === "granted"){
		main();
	}
	else if (Notification.permission !== 'denied') {
		Notification.requestPermission(function (permission) {
	      if (permission === "granted") {
	        main();
	      }
	    });
	}
})();
