//input
const Input=document.createElement('input');
document.body.appendChild(Input);
//button
const Button=document.createElement('button');
document.body.appendChild(Button);
Button.innerHTML='Add';
//UL
const UL=document.createElement('ul');
document.body.appendChild(UL);

 Button.addEventListener('click' ,dothis)
var number=0
const Display={}
 function dothis(){
     number++
     const UL=document.querySelector('ul')
     const LI=document.createElement('li');
     UL.appendChild(LI);
     const Delete=document.createElement('button')
     UL.appendChild(Delete)
     Delete.innerHTML="Delete"



     const Input=document.querySelector('input')
     LI.innerHTML=Input.value
     Display[number]=Input.value
     console.log(Display)
     
     Input.value=''
 }