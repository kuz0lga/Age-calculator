const monthName = ['January', 'February', 'March',
                    'April', 'May', 'June', 'July',
                    'August', 'September', 'October',
                    'November', 'December'];
const birthMonth = document.querySelector('.birth-month');
const nowMonth = document.querySelector('.now-month');
const birthDay = document.querySelector('.birth-day');
const nowDay = document.querySelector('.now-day');
const today = new Date();
const yearNOW = today.getFullYear();
const birthYear = document.querySelector('.birth-year');
const nowYear = document.querySelector('.now-year');
const btnResult = document.querySelector('.btn-result');
const btnReset = document.querySelector('.btn-reset');
const textResult = document.querySelector('#text-result')

function createMonth(event) {
    for (let i = 0; i < monthName.length; i++) {
        const month = document.createElement('option');
        month.classList.add('month');
        event.append(month);
        month.innerHTML = monthName[i];
    }
}

createMonth(birthMonth);
createMonth(nowMonth);

function createDay(event) {
    for (let i = 1; i <= 31; i++) {
        const day = document.createElement('option');
        day.classList.add('day');
        event.append(day);
        day.innerHTML = i;
    }
}

createDay(birthDay);
createDay(nowDay);

function createYear(event) {
    for (let i = 1900; i <= yearNOW; i++) {
        const year = document.createElement('option');
        year.classList.add('year');
        event.append(year);
        year.innerHTML = i;
    }
}

createYear(birthYear);
createYear(nowYear);

const months = document.querySelectorAll('.month');


btnResult.addEventListener('click', () => {
   
    diferentDate()  
   


})

function diferentDate() {
    let year1 = document.querySelector('.birth-year').value
    let month1 = document.querySelector('.birth-month').value
    let day1 = document.querySelector('.birth-day').value

    let year2 = document.querySelector('.now-year').value
    let month2 = document.querySelector('.now-month').value
    let day2 = document.querySelector('.now-day').value
 
    
    let data01 = new Date(`${year1}-${month1}-${day1}`)
    console.log(data01)

    let data02 = new Date(`${year2}-${month2}-${day2}`)
    console.log(data02)

    let diferentTime = data02.getTime() - data01.getTime()
    console.log(diferentTime)

    let year = Math.floor(diferentTime / (1000 * 60 * 60 * 24 * 365))
    let month = Math.floor(diferentTime / (1000 * 60 * 60 * 24 * 29.5))
    let day = Math.floor(diferentTime / (1000 * 60 * 60 * 24))
    let min = Math.floor(diferentTime / (1000 * 60 * 60))
    let sec = Math.floor(diferentTime / (1000 * 60))
    console.log(year, month, day, min, sec)


    textResult.innerHTML = `Вам сейчас ${year} лет или ${month} месяцев или ${day} дней или ${min} минут или ${sec} секунд`
}





    
    

