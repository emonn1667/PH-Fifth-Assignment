let sum = 0;    
function clickme (){
  
    const firstwork = document.getElementById ('countt');
    sum += 1;
    firstwork.innerText = sum;

}


const minusBtn = document.getElementById ('minusbtn');
minusBtn.addEventListener ("click", function(){
    const firstwork = document.getElementById ('countt');
    sum -= 1;
    firstwork.innerText = sum;

})