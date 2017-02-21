sessionStorage.setItem('loggedIn', false);
var startTimer;
var isRunning = false;
var seconds = 0;
var minutes = 0;
var minText = "00";
var secText = "00";

function connectToFacebook(){
	localStorage.setItem('loggedIn', true);
	document.getElementById('LogIn').style.display = "none";
	document.getElementById('LogOut').style.display = "block";
}

function disconnect(){
	localStorage.setItem('loggedIn', false);
	document.getElementById('LogIn').style.display = "block";
	document.getElementById('LogOut').style.display = "none";
}


function startStop(){
    if (isRunning){
    clearInterval(startTimer);
    isRunning = false;
    }
    else{
    startTimer = setInterval(runTimer, 1000);
    isRunning = true;
    }
}

function runTimer(){
    seconds++;
    if (seconds > 59)  {
        seconds = 0;
        minutes++;}
    if (seconds < 10){
        secText = "0" + seconds;}
    else{
        secText = seconds;}
    if (minutes < 10){
        minText = "0" + minutes;}
    else{
        minText = minutes;}
    document.getElementById('showerTimer').innerHTML = minText + ":" + secText;
}

function clearTimer(){
    clearInterval(startTimer);
    minutes = 0;
    seconds = 0;
    document.getElementById('showerTimer').innerHTML = "00:00";
}

function saveTime(){
    clearInterval(startTimer);
    document.getElementById('showerTimer').innerHTML = "Saved!";
    setTimeout(clearSave, 3000);
}

function clearSave(){
    document.getElementById('showerTimer').innerHTML = minText + ":" + secText;
}