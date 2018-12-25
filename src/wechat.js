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
                document.querySelector('#editArea').innerText = replyText;
                document.querySelector('.btn_send').click();
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
watchWeixin('招行练习场 2个权益 2个名额 会的打6报名', '6');
