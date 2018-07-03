let url = 'https://oilcard.m.jd.com/sinopec/tosubmit.action?cardNo=1000113200019038816&userName=%E6%9A%82%E6%97%A0%E6%95%B0%E6%8D%AE%EF%BC%88%E8%AF%B7%E6%82%A8%E4%BB%94%E7%BB%86%E6%A0%B8%E5%AF%B9%E5%8A%A0%E6%B2%B9%E5%8D%A1%E5%8F%B7%EF%BC%89&cardNoEn=****8816';
var start = +new Date();
var timer = setInterval(function(){
    
    var xhr = new XMLHttpRequest();          
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
            console.clear();
            var now = +new Date();
            var time = now - start;
            var seconds = parseInt(time/1000, 10);
            var hour = parseInt(seconds/3600, 10);
            var minute = parseInt((seconds - (hour * 3600))/60, 10);
            var second = parseInt((seconds - (hour * 3600) - (minute * 60)), 10);
            console.log(new Date().toLocaleString() + '\n' + '已运行' + hour + '小时' + minute + '分钟' + second + '秒');
            let html = document.createElement('div');
            html.innerHTML = xhr.responseText;
            let nodeList = html.querySelectorAll('.sales-item span');
            for (let i = 0; i < nodeList.length; i++) {
                let item = nodeList[i];
                let price = item.getAttribute('data-promomtionprice');
                if (price === '') {
                    price = 0;
                }
                price = parseInt(price, 10);
                if (price === 993) {
                    new Notification("JD可以充油了");
                        console.log("JD可以充油了");
                }
                console.log(price + '\n');
            }
        }
    };
    xhr.send();
}, 1000);