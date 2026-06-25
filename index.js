const obtainInput=document.getElementById("input-obtain");
const totalInput=document.getElementById("input-total");
const calc=document.getElementById("calculate");
const rslt=document.getElementById("result");
const grad=document.getElementById("grade");

calc.addEventListener("click",()=>{
    let obtain=Number(obtainInput.value);
    let total=Number(totalInput.value);
    let percent=(obtain*100)/total;
     

})