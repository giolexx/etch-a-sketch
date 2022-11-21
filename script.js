const container=document.querySelector(".container");
const squaresArray=[];
let apasare=0;
let arrayLength=5;
let color="black";
let size=5;
let rainbow=1;
//const arrayLength=+prompt('baga un numar',' ');
function patrat(){
//arrayLength=size;
arrayLength=size;
// arrayLength=+prompt('baga un numar',' ');
for(let i=1;i<=arrayLength;i++)
{
    
    const linie= document.createElement('div');
   // linie.textContent=`1`;
    linie.style.cssText='display:flex;  flex-grow:1; '
    for(let j=1;j<=arrayLength;j++)
    {
        const contlinie=document.querySelector(".linie");
        const coloana = document.createElement('div');
      //  coloana.textContent=`${j}`;
      

        coloana.style.cssText='display:flex; flex-grow:1;   '
        coloana.addEventListener('mouseover', (event) => {coloana.style.backgroundColor=color;})
        linie.appendChild(coloana);
    }
  //  for(let j=1;j<=arrayLength;j++){
  //  squaresArray[i]=document.createElement('div');
   // squaresArray[i].textContent=`${i}`;
   // linie.appendChild(squaresArray[i]);
    //}
   // linie.style.color='red';
    container.appendChild(linie);
} 
   // apasare++;
}
patrat();
const buttonred=document.querySelector(".red-color");
buttonred.addEventListener('click',(e) => {
    color="red";
  //  alert("merge");
});
const buttonblue=document.querySelector(".blue-color");
buttonblue.addEventListener('click',(e) => {
    color="blue";
});
const buttonyellow=document.querySelector(".yellow-color");
buttonyellow.addEventListener('click', (e) => {
    color="yellow";
});
const buttonerase=document.querySelector(".erase");
buttonerase.addEventListener('click',(e) => {
   color="";
  
});
const buttonsize=document.querySelector(".size");
buttonsize.addEventListener('click',(e) => {
    let userSize = +prompt("ce marime vr bos",' ');
    container.innerHTML="";
    color="black";
   // alert(userSize);
   size=userSize;
    patrat();
});
const buttonclear= document.querySelector(".clear-board");
buttonclear.addEventListener('click',(e) => { 
    container.innerHTML="";
    color="black";
    patrat();
});
const buttonrandom=document.querySelector(".random-color");
buttonrandom.addEventListener('click',(e) => { 
   // while(color!="black" || color!="red" || color!="yellow" || color!="blue")
    color= '#' + Math.floor(Math.random()*16777215).toString(16);
 
});