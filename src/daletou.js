// 数据来源 https://datachart.500.com/dlt/history/history.shtml
// 整个表格
let allTR = document.querySelectorAll('#tdata tr');
// 所有数据
let data = [];
allTR.forEach((tr, trKey) => {
    let allTD = tr.querySelectorAll('td');
    let lottery = {};
    lottery.no = parseInt(allTD[0].innerText, 10);
    lottery.front1 = parseInt(allTD[1].innerText, 10);
    lottery.front2 = parseInt(allTD[2].innerText, 10);
    lottery.front3 = parseInt(allTD[3].innerText, 10);
    lottery.front4 = parseInt(allTD[4].innerText, 10);
    lottery.front5 = parseInt(allTD[5].innerText, 10);
    lottery.behind1 = parseInt(allTD[6].innerText, 10);
    lottery.behind2 = parseInt(allTD[7].innerText, 10);
    lottery.allMoney = parseInt(allTD[8].innerText.replace(/,/g, ''), 10);
    lottery.prize1Mount = parseInt(allTD[9].innerText, 10);
    lottery.prize1Money = parseInt(allTD[10].innerText.replace(/,/g, ''), 10);
    lottery.prize2Mount = parseInt(allTD[11].innerText, 10);
    lottery.prize2Money = parseInt(allTD[12].innerText.replace(/,/g, ''), 10);
    lottery.input = parseInt(allTD[13].innerText.replace(/,/g, ''), 10);
    lottery.date = new Date(allTD[14].innerText);
    data.push(lottery);
});
// 按时间排序
data = data.reverse();
// 频次排序
// 前排还是后排
// 最近XX期
// 从XX期到XX期
let frontFrequency = (position, numbers, section) => {
    let front = new Array(35).fill(0);
    let behind = new Array(12).fill(0);
    data.forEach((item, key) => {
        front[item.front1 - 1]++;
        front[item.front2 - 1]++;
        front[item.front3 - 1]++;
        front[item.front4 - 1]++;
        front[item.front5 - 1]++;
        behind[item.behind1 - 1]++;
        behind[item.behind2 - 1]++;
    });
};
let maxArr = (array) => {
    // 球号排序
    let sortArray = [];
    for (let i = 0; i < array.length; i++) {
        sortArray[i] = i + 1;
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] > array[j]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                [sortArray[j], sortArray[j + 1]] = [sortArray[j + 1], sortArray[j]];
            }
        }
    }
    let res = [];
    for (let i = 0; i < array.length; i++) {
        res.push({"no": sortArray[i], "times": array[i]});
    }
    console.log(res);
};