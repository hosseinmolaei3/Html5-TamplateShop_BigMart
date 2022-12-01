var p=document.getElementById("p");
p.innerHTML="1,600.000 $";
var i=document.querySelectorAll("#plus");
console.log(i);
var inputcount=document.querySelectorAll("#count");
var plusbtn=document.querySelectorAll("#plus");
var minesbtn=document.querySelectorAll("#mines");
for (let i = 0; i < plusbtn.length; i++) {
   
    

plusbtn[i].addEventListener("click",()=>{
  inputcount[i].value=parseInt(1)+parseInt(inputcount[i].value);
});
minesbtn[i].addEventListener("click",()=>{
  if(inputcount[i].value>0){
    inputcount[i].value=parseInt(inputcount[i].value)-parseInt(1);
  }
});
}