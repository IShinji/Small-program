let getOrder = (number) => {
    let timer = setInterval(()=>{
        let iframe = document.querySelector('iframe');
        iframe.contentDocument.querySelector('.title a').click();
        let list = iframe.contentDocument.querySelectorAll('a');
        list.forEach(function(value, index){
            let text = value.innerText;
            if (text === '获取' + number + '元订单') {
                value.click();
                clearInterval(timer);
            }
        });
    }, 1000);
}
