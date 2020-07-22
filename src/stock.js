// 可转债
//http://data.10jqka.com.cn/ipo/xgsgyzq/order
$.ajax({
  url: "http://data.10jqka.com.cn/ipo/xgsgyzq/order/desc/ajax/1/free/1/",
}).done((html) => {
  console.log(html);
});

var request = new XMLHttpRequest();
request.open(
  "GET",
  "http://data.10jqka.com.cn/ipo/xgsgyzq/order/desc/ajax/1/free/1/",
  true
);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var resp = request.responseText;
    console.log(resp);
  } else {
    // We reached our target server, but it returned an error
  }
};
request.send();
