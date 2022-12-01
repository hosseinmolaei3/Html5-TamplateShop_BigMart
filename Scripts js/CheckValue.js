var divpass=document.getElementById("divpass");
var inputpass=document.getElementById("ipass");
var divuser=document.getElementById("divuser");
var inputuser=document.getElementById("iuser");
function Checkvalue()
{
    if(inputpass.value == ""){
        inputpass.classList.add("is-invalid");
        divpass.classList.add("is-invalid");
    }
    else{
        inputpass.classList.add("is-valid");
        divpass.classList.add("is-valid");
    }
    if(inputuser.value == ""){
        inputuser.classList.add("is-invalid");
        divuser.classList.add("is-invalid");
    }
    else{
        inputuser.classList.add("is-valid");
        divuser.classList.add("is-valid");
    }
}