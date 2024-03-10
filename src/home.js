let q1=document.getElementById("q1")
let q2=document.getElementById("q2")
let q3=document.getElementById("q3")
let q4=document.getElementById("q4")

let a1=document.getElementById("a1")
let a2=document.getElementById("a2")
let a3=document.getElementById("a3")
let a4=document.getElementById("a4")

let s1=document.getElementById("s1")
let s2=document.getElementById("s2")
let s3=document.getElementById("s3")
let s4=document.getElementById("s4")

let forquestion=document.getElementById("for-question")

function a(){
    if(a1.style.display=="block"){
   a1.style.display="none"
   s1.style.transform="rotate(360deg)"
   forquestion.style.height="80%";
   
 

}
else{
   a1.style.display="block"
   s1.style.transform="rotate(180deg)"
   forquestion.style.height="700px";
   
   
}
}
function b(){
    if(a2.style.display=="block"){
   a2.style.display="none"
   s2.style.transform="rotate(360deg)"
   forquestion.style.height="80%";

}
else{
   a2.style.display="block"
   s2.style.transform="rotate(180deg)"
   forquestion.style.height="700px";
   
   
}
}
function c(){
    if(a3.style.display=="block"){
   a3.style.display="none"
   s3.style.transform="rotate(360deg)"
   forquestion.style.height="80%";

}
else{
   a3.style.display="block"
   s3.style.transform="rotate(180deg)"
   forquestion.style.height="700px";
   
   
}
}
function d(){
    if(a4.style.display=="block"){
   a4.style.display="none"
   s4.style.transform="rotate(360deg)"
   forquestion.style.height="80%";

}
else{
   a4.style.display="block"
   s4.style.transform="rotate(180deg)"
   forquestion.style.height="700px";
   
   
}
}