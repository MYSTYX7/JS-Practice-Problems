const count = document.querySelector(".count");

const addBtn = document.querySelector(".add");

const subBtn = document.querySelector(".subtract");

const resetBtn = document.querySelector(".reset");

addBtn.addEventListener("click", function() {
    console.log("Adding");
    count.innerHTML++;
    setColor(); 

})

subBtn.addEventListener("click", function() {
    count.innerHTML--;
    setColor();


})

resetBtn.addEventListener("click", function() {
    count.innerHTML = 0;
    setColor();
})

function setColor() {
if(count.innerHTML>0){
    count.style.color = "green";
   
} else if(count.innerHTML<0) {
    count.style.color = "red";
} else {
    count.style.color = "black";
}
}