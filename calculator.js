const div = document.getElementById('display');

const btnCl = document.getElementById('clean');
btnCl.addEventListener('click',function() {
  div.textContent = '';
})

const btnEq = document.querySelector('.equal-btn');
btnEq.addEventListener('click',function() {
  let expression = div.textContent;
  expression = expression.replaceAll("÷","/").replaceAll("×","*");
  const result= eval(expression);
  div.textContent= result;
})

const btnback = document.getElementById('backSpace');
btnback.addEventListener('click',function(){
   div.textContent= div.textContent.slice(0,-1);

})

const btndot = document.getElementById('dot');
btndot.addEventListener('click', function(){
  const divSplit = div.textContent.split(/[÷ ×\- +]/);
  const divLeg = divSplit [divSplit.length - 1];
  if (divLeg.includes(".")) {
    return;
  }
  else{
 div.textContent += ".";
  }
  
})
const buttons = document.querySelectorAll('.btn');
buttons.forEach(function(button){
  button.addEventListener('click',function(){
    div.textContent += button.textContent;
  })
})