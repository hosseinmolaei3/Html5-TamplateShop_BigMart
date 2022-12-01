var inputpass=document.getElementById("ipass");
var open_eye=document.getElementById("oeye");
var close_eye=document.getElementById("ceye");
function btnshow(){
    if(inputpass.type == "text"){
        inputpass.type="password";
        open_eye.classList.add("d-none");
        close_eye.classList.remove("d-none");
    }
    else{
        inputpass.type="text";
        open_eye.classList.remove("d-none");
        close_eye.classList.add("d-none");
    } 
}