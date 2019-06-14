let music = new Audio;
music.loop = true;
music.src = 'http://www.ytmp3.cn/down/73212.mp3';
let timer = setInterval(() => {
    fetch("//m.mi.com/v1/miproduct/view", {
        "credentials":"omit",
        "headers":{
            "accept":"application/json, text/plain, */*",
            "content-type":"application/x-www-form-urlencoded",
            "x-requested-with":"XMLHttpRequest"
        },
        "referrer":"https://m.mi.com/commodity/detail/9372",
        "referrerPolicy":"no-referrer-when-downgrade",
        "body":"client_id=180100031051&channel_id=0&webp=1&commodity_id=9372&pid=9372","method":"POST","mode":"cors"
    })
    .then(res => {
        let resdata = res.json();
        return resdata;
    })
    .then(res => {
        if (res.data.goods_info[0].is_stock) {
            music.play();
            clearInterval(timer);
        }
    });
}, 60000);