const txt=document.querySelector('.loading-txt');
const bg=document.querySelector('.bg');
let int =setInterval(loading,30);
let val=0;
function loading(){
    val++;
    txt.innerHTML=`${val}%`;
    bg.style.filter=`blur(${map(val)}px)`;
    if(val==100){
        clearInterval(int);
    }
}
function map(val){
var res=(30-(val*0.3));
return res;
}