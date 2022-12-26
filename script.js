// console.log("hello ")
let count = 0;
const countEl = document.getElementById("count");
const incrementBtnEl = document.getElementById("increment-btn");
const saveEl = document.getElementById("save-el") ;
 
function increment(){
    count += 1;
    countEl.innerText = count
 }
 function save (){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0;
    countEl.innerText = 0;
 }