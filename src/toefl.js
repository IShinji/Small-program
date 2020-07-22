let cityDOMS = document.querySelectorAll('select')[0].options;
for (let i = 1; i < cityDOMS.length; i++) {
    cityDOMS[i].selected = true;
    let dateDOMS = document.querySelectorAll('select')[1].options;
    for (let j = 0; j < dateDOMS.length; j++) {
        dateDOMS[j].selected = true;
        document.querySelector('#btnQuerySeat').click();
    }
}

const showSeat = (data) => {

};

const checkCity = (city = 'BEIJING', index = 1) => {
    document.querySelectorAll('select')[0].options[2].selected = true;
    const dateDOMS = document.querySelectorAll('select')[1].options;
    dateDOMS[index].selected = true;
    const date = dateDOMS[index].text;
    document.querySelector('#btnQuerySeat').click();
    let timer = setInterval(() => {
        if (document.querySelectorAll('thead tr')[0] && document.querySelectorAll('thead tr')[0].innerText.match(date)) {
            let flag = false;
            clearInterval(timer);
            const trDOMS =document.querySelectorAll('tbody tr');
            const day = {time: date, seats: []};
            for (let i = 0; i < trDOMS.length; i++) {
                const element = trDOMS[i];
                if (element.querySelectorAll('td')[3].innerText !== '名额暂满') {
                    flag = true;
                }
            }
            if (index < dateDOMS.length && !flag) {
                setTimeout(() => {
                    checkCity(city, ++index);
                }, 10000);
            }
        }
    }, 200);
};

const timer = setInterval(() => {
    if (document.querySelectorAll('thead tr')[0]) {
        const trDOMS =document.querySelectorAll('tbody tr');;
        for (let i = 0; i < trDOMS.length; i++) {
            const element = trDOMS[i];
            if (element.querySelectorAll('td')[3].innerText !== '名额暂满') {
                console.log('有座位');
                clearInterval(timer);
            }
        }
    }
}, 200);

