function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return Array.prototype.filter.call(elements, function (element) {
    return RegExp(text).test(element.textContent);
  });
}
let timer = setInterval(() => {
  if (contains('div[class="operation-item"]', '删除').length === 0) {
    document.querySelectorAll('.work-flow-group .btn-item')[1].click();
    setTimeout(() => {
      document.querySelectorAll('.work-flow-group .btn-item')[0].click();
    }, 200);
  }
  setTimeout(() => {
    contains('div[class="operation-item"]', '删除')[0].click();
    setTimeout(() => {
      document.querySelector('.btn-sure').click();
    }, 100);
  }, 500);
}, 1000);
