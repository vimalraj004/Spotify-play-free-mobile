let inputtype=document.getElementById("inputtype")
let cancel=document.getElementById("cancel")


function a(){
    if(inputtype.value.length > 0){
        cancel.style.display = "block"
    }
    else{
        cancel.style.display = "none"
    }
}
function b(){
   
       inputtype.value=""
       cancel.style.display = "none"

   
}
// inputtype.addEventListener("input",(x)=>{
//     if(inputtype.value.lenght > 0){
//         cancel.style.display="block"
//     }
//     else{
//         cancel.style.display="none"
//     }
// })