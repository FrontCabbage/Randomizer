var num1 = Math.floor(Math.random()*21);
var num2 = Math.floor(Math.random()*21);
var num3 = Math.floor(Math.random()*21);
document.getElementById('num1').innerHTML = num1;
document.getElementById('num2').innerHTML = num2;
document.getElementById('num3').innerHTML = num3;

if (num1>num2 && num1>num3) {
    document.getElementById('big').innerHTML = "Volleyball";
    document.getElementById('amount').innerHTML = num1;
}else if (num2>num1 && num2>num3) {
    document.getElementById('big').innerHTML = "Basketball";
    document.getElementById('amount').innerHTML = num2;
}else {
    document.getElementById('big').innerHTML = "Badminton";
    document.getElementById('amount').innerHTML = num3;
}
document.getElementById('char').innerHTML = ((num1 + 9).toString(36).toUpperCase());

var intime = num1*num2;
var finhour = Math.floor(intime/60);
var finmin = intime%60;

document.getElementById('stat').innerHTML = "("+intime+"min): "+finhour+"hr "+finmin+"min";