//未及格同学统计
var list = document.querySelectorAll('tr');
//科目名字
var lession = [];

for (let i = 2; i < 21; i++){
    let lessionName = document.querySelector('tr').querySelectorAll('th')[i].innerText;
    lession[lessionName] = [];
    list.forEach(function(tr,index){
        if (index === 0) {
            return;
        }
        let number = i + 1;
        let td = tr.querySelector('td:nth-child(' + number + ')');
        if (td) {
            let score = td.innerText;
            if (score) {
                switch (score) {
                    case '免修':
                        break;
                    case '缺考':
                        lession[lessionName].push(tr.querySelector('td').innerText);
                        break;
                    default:
                        score = parseInt(score, 10);
                        if(score < 60) {
                            lession[lessionName].push(tr.querySelector('td').innerText);
                        }
                }
            }
        }
    })
}

// 总分排行
let scores = [];
list.forEach((tr, index) => {
    if (index === 0) {
        return;
    }
    let td = tr.querySelector('td:nth-child(25)');
    if (td) {
        scores.push({
            name: tr.querySelector('td').innerText,
            score: td.innerText,
            id: tr.querySelector('td:nth-child(2)').innerText
        });
    }
});
let compare = propertyName => {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        return value2 - value1;
    };
};

scores.sort(compare('score'));
console.log(scores);


// 输出所有科目需要补考的同学
var output = '';
for (let i in lession) {
    if (lession[i].length !== 0) {
        output += i + '：' + lession[i].length + '人\n';
        let names = '';
        for (let j = 0; j < lession[i].length; j++) {
            names += lession[i][j] + ' ';
        }
        output += names + '\n';
    }
}
console.log(output);
