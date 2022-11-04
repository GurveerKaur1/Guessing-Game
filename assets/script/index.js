'use strict';



//Add event listener
function onEvent(event, selector, callback){
    return selector.addEventListener(event, callback);
}

//Get HTML element by id
function getElement(selector, parent = document){
    return parent.getElementById(selector);
}

//Select HTML element by selector
function select(selector, parent = document){
    return parent.querySelector(selector);
}



const form = document.querySelector('form')
const form1 = select('.form1');
const form2 = select('.form2');
const numberOne = select('.calc');
const numberTwo = select('.output');
const btn1 = select('.game');
const output = select('.output .one');
const output2 = select('.output .two');
const btn= select('.get-result');
const first = select('.first');
const reset = select('.reset');
const rangeLimit= document.getElementById('rangeLimit');
const iterations= document.getElementById('iter')
const msg = select('.msg');



btn1.addEventListener('click', () =>{
    let b= iterations.value;
    if(b== "" || isNaN(b) || b > 10){
        msg.style.display = 'block';
    }else{
    numberOne.classList ='block';
    form1.style.display = 'none';
   
    btn1.style.display="none";
    reset.style.display='block';
    rangeLimit.innerHTML = range.value;

}});


reset.addEventListener('click', ()=>{
    location.reload();
});

function isNumber(str){
 let input = str.trim();
  if(input.length > 0 && !isNaN(input) )
  return true;

  return false;
}


function isNumber(str){
 let input = str.trim();
  if(input.length > 0 && !isNaN(input) )
  return true;

  return false;
}

//Adding an event listener
let number = Math.floor((Math.random() * 20) +1);  
onEvent('click', btn, function(){
   
 let a = first.value;
 --iterations.value;
 if( a == number && isNumber(a) ){
    output.innerText ='';
    output2.innerText = `congratulations you won `; 
    first.value = '';}
else if ( iterations.value < 1
    ) {
    output.innerText = `You are out of chances. My number was ${number}` ;
    first.value ='';

}
 else{
    if(number < a &&  a <25 && isNumber(a) ){
        output.innerText = `Enter lowest number.  ${iterations.value} attempt left` ;
        first.value ='';
        
    }else
    if(number > a && isNumber(a)){
        output.innerText = `Enter greater number. ${iterations.value} attempt left`;
        first.value ='';
    }
    else if( number < a && a > 25 && isNumber(a) ){
        output.innerText = `Enter less than 25. ${iterations.value} attempt left`;
        first.value ='';}
        else{
    output.innerText = `Enter valid numbers. ${iterations.value} attempt left`  ;
    first.value ='';
}

}});






