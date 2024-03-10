let mailinput=document.getElementById("input")
let reason=document.getElementById("status")
let press=document.getElementById("press")
let border=document.getElementById("border")
var regex = /.+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

 

press.addEventListener("click",()=>{
    console.log("hii");
    if(mailinput.value==""){
       reason.innerHTML="please enter the mail address"
       reason.style.color="#FF0000"
       border.style.border="1px solid red "
    }
   
    else if(regex.test(mailinput.value)){
        reason.innerHTML=" valid mail address"
        reason.style.color="#1ED760"
        border.style.border="1px solid green"
    }
    else{
        reason.innerHTML="please enter the valid mail address"
        reason.style.color="#FF0000"
        border.style.border="1px solid red"
    }

})



