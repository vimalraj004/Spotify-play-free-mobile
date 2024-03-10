let a1=document.querySelector('.A1')
let a2=document.querySelector('.A2')
let a3=document.querySelector('.A3')
let a4=document.querySelector('.A4')


function blink1(){
    a1.style.border='3px solid white'

}
function blink2(){
    a2.style.border='3px solid white'

}
function blink3(){
    a3.style.border='3px solid white'

}
function blink4(){
    a4.style.border='3px solid white'

}
let btn=document.getElementById("btn")
let eyeclose=document.getElementById("eyeclose")
let eyeopen=document.getElementById("eyeopen")
let pass=document.getElementById("password")

btn.addEventListener("click",()=>{
    console.log("hii");
    if(pass.type=="password"){
       pass.type="text"
       eyeclose.style.display="none"
       eyeopen.style.display="block"
    }
    else{
        pass.type="password"
        eyeclose.style.display="block"
        eyeopen.style.display="none"
    }
  
})

let bcircle=document.getElementById("bcircle")
let scircle=document.getElementById("scircle")

bcircle.addEventListener("click",(e)=>{
    console.log("hii");
    
    if(scircle.style.marginLeft==="3px"){
        
        scircle.style.marginLeft="20px"
        scircle.style.transition="0.5s"
        bcircle.style.backgroundColor="rgb(30,215,96)"
        bcircle.style.border="3px solid white"
        
    }
    else{
        scircle.style.marginLeft="3px"
        scircle.style.transition="0.5s"
        bcircle.style.backgroundColor="rgb(114,114,114)"
        bcircle.style.border="3px solid white"
    }
   
})
document.body.addEventListener("click",()=>{
    bcircle.style.border="none"
})