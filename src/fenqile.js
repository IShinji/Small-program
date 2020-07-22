let orders = [];
let shouldDelOrders = [];
let getOrders = (offset) => {
    fetch("https://order.m.fenqile.com/route0001/order/getOrderInfoDetail.json", {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7",
        "cache-control": "no-cache",
        "content-type": "application/json;charset=UTF-8",
        "pragma": "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
    },
    "referrer": "https://order.m.fenqile.com/index.html",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": `{"system":{"controller":""},"data":{"state_filter":"","offset":${offset},"limit":4}}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        if (data.data.result === 0 && data.data.result_rows.length) {
            console.log(data.data.result_rows);
            orders = orders.concat(data.data.result_rows);
            setTimeout(() => {
                getOrders(++offset);
            }, 1000);
        }
        else {
            // todo: 筛选出订单
            // 未支付已关闭订单
            orders.forEach((order, index) => {
                if (order.template_content[0].state_info.state_desc === '已关闭') {
                    shouldDelOrders.push(order);
                }
            });
            setTimeout(() => {
                delOrder(0);
            }, 1000);
        }
    });
};
getOrders(0);

let delOrder = (index) => {
    fetch("https://order.m.fenqile.com/route0001/order/orderDel.json", {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7",
        "cache-control": "no-cache",
        "content-type": "application/json;charset=UTF-8",
        "pragma": "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
    },
    "referrer": "https://order.m.fenqile.com/index.html",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": `{"system":{"controller":""},"data":{"order_id":"${shouldDelOrders[index].order_info.order_id}"}}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
    })
    .then(()=>{
        if (index < shouldDelOrders.length) {
            setTimeout(() => {
                delOrder(++index);
            }, 3000);
        }
    });
}
