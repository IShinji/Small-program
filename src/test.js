let change = (array) => {
    let getResult = (array) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] instanceof Array) {
                array[i] = getResult(array[i]);
            }
        }
        let res = "";
        for (let i = 0; i < array.length; i++) {
            if (array[i].match('OR') == null) {
                res += "\"" + array[i] + "\"";
                if (i !== array.length - 1) {
                    res += " OR ";
                }
            }
            else {
                if (i !== 0) {
                    res += " AND ";
                }
                res += array[i];
            }
        }
        res = "(" + res + ")";
        return res;
    }
    let answer = getResult(array);
    answer = answer.replace(/^\(/, '').replace(/\)$/, '');
    return answer;
}
let res = change([[['a','b'],['c','d']],['e','f']]);
console.log(res);