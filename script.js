
const hrhand=document.querySelector("#hour");
const minhand=document.querySelector("#minute");
const sechand=document.querySelector("#second");
const btn=document.querySelector("#clocktype")
const dmbtn=document.querySelector("#darkmode")

var btnsmooth=false;    
var dm=false;

var date=new Date();
let hr= date.getHours();
let min= date.getMinutes();
let sec=date.getSeconds();


let hrpos=(hr*360/12)+(min*(360/60)/12);
let minpos=(min*360/60)+(sec*360/60)/60;
let secpos=sec*360/60;


function clockrun(){
    
    hrpos=hrpos+(1/120);
    minpos=minpos+(1/10);
    secpos=secpos+6;
    
    hrhand.style.transform="rotate("+hrpos+"deg)";
    minhand.style.transform="rotate("+minpos+"deg)";
    sechand.style.transform="rotate("+secpos+"deg)";
}

var clock= setInterval(clockrun,1000);

function clocktypechanged()
{
    if(btnsmooth)
    {
        btnsmooth=false;
        btn.innerHTML="Smooth"
        hrhand.style.transition="";
        minhand.style.transition="";
        sechand.style.transition="";
    }
    else{
        btnsmooth=true;
        btn.innerHTML="Tic Tic"
        hrhand.style.transition="transform .5s ease-in-out";
        minhand.style.transition="transform .5s ease-in-out";
        sechand.style.transition="transform .5s ease-in-out";
    }
}

function changeclockcolor(){
    var clockcolor=document.getElementById("clockcolor").value;
    document.querySelector(".circle").style.stroke=clockcolor;
    document.querySelector(".hour-marks").style.stroke=clockcolor;
}

function changehandcolor(){
    const handcolor=document.getElementById("handcolor").value;
    console.log(handcolor);
    document.querySelector(".mid-circle").style.fill=handcolor;
    document.querySelector(".hour-arm").style.stroke=handcolor;
    document.querySelector(".minute-arm").style.stroke=handcolor;
    document.querySelector(".second-arm").style.stroke=handcolor;
}

function darkmod(){
    if(dm)
    {   
        dm=!dm;
        dmbtn.innerHTML="Dark Theme"        
        document.querySelector("body").style="color: black;background-color:white;"
        document.querySelector(".mid-circle").style.fill="#000";
        document.querySelector(".hour-arm").style.stroke="#000";
        document.querySelector(".minute-arm").style.stroke="#000";
        document.querySelector(".second-arm").style.stroke="#000";
        document.querySelector(".circle").style.stroke="#000";
        document.querySelector(".hour-marks").style.stroke="#000";
    }
    else{
        dm=!dm;
        dmbtn.innerHTML="Light Theme"
        document.querySelector("body").style="color: aquamarine;background-color:#121212;"
        document.querySelector(".mid-circle").style.fill="#46D84B";
        document.querySelector(".hour-arm").style.stroke="#46D84B";
        document.querySelector(".minute-arm").style.stroke="#46D84B";
        document.querySelector(".second-arm").style.stroke="#46D84B";
        document.querySelector(".circle").style.stroke="#31C4B3";
        document.querySelector(".hour-marks").style.stroke="#31C4B3";
    }
}
