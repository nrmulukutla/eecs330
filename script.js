var startTimer;
var isRunning = false;
var centiSec = 0;
var seconds = 0;
var minutes = 0;
var minText = "00";
var secText = "00";
var centiText = "00";
function startStop(){
    if (isRunning){
    clearInterval(startTimer);
    isRunning = false;
    }
    else{
    startTimer = setInterval(runTimer, 10);
    isRunning = true;
    }
}
function runTimer(){
    centiSec++;
    if (centiSec > 99)  {
        centiSec = 0;
        seconds++;}
    if (seconds > 59)  {
        seconds = 0;
        minutes++;}
    if (centiSec < 10){
        centiText = "0" + centiSec;}
    else{
      centiText = centiSec;
    }
    if (seconds < 10){
        secText = "0" + seconds;}
    else{
        secText = seconds;}
    if (minutes < 10){
        minText = "0" + minutes;}
    else{
        minText = minutes;}
    document.getElementById('showerTimer').innerHTML = minText + ":" + secText+ ":" + centiText;
}
function clearTimer(){
    clearInterval(startTimer);
    minutes = 0;
    seconds = 0;
    centiSec = 0;
    document.getElementById('showerTimer').innerHTML = "00:00:00";}
function saveTime(){
    clearInterval(startTimer);
    document.getElementById('showerTimer').innerHTML = "Saved!";
    setTimeout(clearSave, 1000);
}
function clearSave(){
    document.getElementById('showerTimer').innerHTML = minText + ":" + secText + ":" + centiText;
}

function connectToFacebook(){
    document.getElementById('LogIn').style.display = "none";
    document.getElementById('LogOut').style.display = "block";
}

function disconnect(){
    document.getElementById('LogIn').style.display = "block";
    document.getElementById('LogOut').style.display = "none";
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

var d = new Date();
var goalTime = 5;

function updateDate (x){
    d.setDate(d.getDate() - x);
    var month = d.getMonth()+1;
    var day = d.getDate();
    d.setDate(d.getDate() + x);
    return month + "/" + day;
    }

function getRandomInt(min, max){
    return Math.floor(Math.random()*(max - min + 1)+ min)
    } 

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Date', 'Goal', 'Time (mins)'],
        [updateDate(4),  goalTime,      getRandomInt(1,15)],
        [updateDate(3),  goalTime,      getRandomInt(1,15)],
        [updateDate(2),  goalTime,      getRandomInt(1,15)],
        [updateDate(1),  goalTime,      getRandomInt(1,15)],
        [updateDate(0),  goalTime,      getRandomInt(1,15)]
        ]);

    var options = {
        'legend':'bottom'
        };

    var chart = new google.visualization.LineChart(document.getElementById('waterChart'));

    chart.draw(data, options);
      }
