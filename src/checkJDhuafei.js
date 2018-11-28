/**
 * @file 查看最近抽奖中奖时间
 * @author icanghai@foxmail.com
 */

 /**
 * 清除页面里的滚动特效
 */
let clearAllInterval = () => {
    let end = setTimeout(() => {}, 1);
    let start = (end - 100) > 0 ? end - 100 : 0;
    for (let i = start; i <= end; i++) {
        clearInterval(i);
    }
};
clearAllInterval();

/**
 * 快速排序
 */
let swap = (array, a, b) => {
    [array[a], array[b]] = [array[b], array[a]];
}

let quick = (array, left, right) => {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right);
        if (left < index - 1) {
            quick(array, left, index - 1);
        }
        if (index < right) {
            quick(array, index, right);
        }
    }
    return array;
};
let quickSort = array => {
    return quick(array, 0, array.length - 1);
};
// 划分操作函数
let partition = (array, left, right) => {
    // 用index取中间值而非splice
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (compare(array[i], pivot) === -1) {
            i++;
        }
        while (compare(array[j], pivot) === 1) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
};

// 比较函数
let compare = (a, b) => {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1;
};

let NodeList = document.querySelector('#zjdtul').querySelectorAll('.showtime');
let times = [];
NodeList.forEach(element => {
    times.push(new Date(element.innerText));
});
times = quickSort(times);
console.log(`上次中奖时间在${times[0].toLocaleTimeString()}到${times[times.length - 1].toLocaleTimeString()}之间`);
