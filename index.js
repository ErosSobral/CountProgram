const decreased = document.getElementById("decreased");
const reset = document.getElementById("reset");
const increased = document.getElementById("increased");
const countlabel = document.getElementById("count");
let count = 0;



increased.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreased.onclick = function (){
    count--;
    countlabel.textContent = count;
}
reset.onclick = function(){
    count =0;
    countlabel.textContent = count;
}