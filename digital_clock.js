var time = document.getElementById("time");
// console.log(time);
var hour = document.getElementById("hour");
//console.log(hour);
var minute = document.getElementById("minute");
// console.log(minute);
var second = document.getElementById("second");
//console.log(second);

var calender = document.getElementById("calender");
//console.log(calender);

var date = document.getElementById("date");
//console.log(date);
var month = document.getElementById("month");
//console.log(month);
var year = document.getElementById("year");
// console.log(year);


var secFunction = function () {
    var currentTime = new Date();

    var currentHour = currentTime.getHours();
    if (currentHour > 12)
    {
        currentHour=currentHour-12;
    }
    else if(currentHour==0)
    {
        currentHour=12;
        
    }

        hour.innerHTML = currentHour;

    var currentMinute = currentTime.getMinutes();
    minute.innerHTML = currentMinute;

    var currentSecond = currentTime.getSeconds();
    second.innerHTML = currentSecond;

    var currrentDate = currentTime.getDate();
    date.innerHTML = currrentDate;

    var currentMonth = currentTime.getMonth();
    month.innerHTML = currentMonth + 1;

    var currentYear = currentTime.getFullYear();
    year.innerHTML = currentYear;



}
setInterval(secFunction, 1000);







