/**
 * @file 微信自动抢单
 * @param {string} watchText 监听文本
 * @param {string} replyText 自动回复文本
 */
let watchWeixin = (watchText, replyText) => {
    let startTime = +new Date();
    let watcher = setInterval(() => {
        let NodeList = document.querySelectorAll('#chatArea .chat_bd .ng-scope .message.you');
        let NodeListLength = NodeList.length;
        if (NodeListLength) {
            let lastMessage = NodeList[NodeListLength - 1];
            let lastMessageText = lastMessage.querySelector('.content .js_message_plain').innerText;
            if (lastMessageText === watchText) {
                angular.element('pre:last').scope().editAreaCtn = replyText;
                angular.element('pre:last').scope().sendTextMessage();
                clearInterval(watcher);
            }
        }
        console.clear();
        let now = +new Date();
        let time = now - startTime;
        let seconds = parseInt(time / 1000, 10);
        let hour = parseInt(seconds / 3600, 10);
        let minute = parseInt((seconds - (hour * 3600)) / 60, 10);
        let second = parseInt((seconds - (hour * 3600) - (minute * 60)), 10);
        console.log(new Date().toLocaleString() + '\n' + '已运行' + hour + '小时' + minute + '分钟' + second + '秒');
    }, 500);
};
watchWeixin('招行练习场“扫码”，2个权益、3个名额，会发码的打8报名！按我发的截图里排在前3的直接私聊我发二维码截图+持卡人姓名！！！', '8');
