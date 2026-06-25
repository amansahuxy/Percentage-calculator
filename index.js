const obtainInput=document.getElementById("input-obtain");
const totalInput=document.getElementById("input-total");
const calc=document.getElementById("calculate");
const rslt=document.getElementById("result");
const grad=document.getElementById("grade");

calc.addEventListener("click",()=>{
    let obtain=Number(obtainInput.value);
    let total=Number(totalInput.value);
    let percent=(obtain*100)/total;
     rslt.innerText=percent;
    
   if (percent >= 90 && percent <= 100) {
    grad.innerText = "A+";
}
else if (percent >= 80 && percent < 90) {
    grad.innerText = "A";
}
else if (percent >= 70 && percent < 80) {
    grad.innerText = "B+";
}
else if (percent >= 60 && percent < 70) {
    grad.innerText = "B";
}
else if (percent >= 50 && percent < 60) {
    grad.innerText = "C+";
}
else if (percent >= 40 && percent < 50) {
    grad.innerText = "C";
}
else if (percent < 40) {
    grad.innerText = "Fail";
}
else {
    grad.innerText = "Error";
}


})