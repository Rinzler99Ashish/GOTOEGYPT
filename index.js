let check_box=document.getElementById("readcheckbox-1");
let cat_check_box=document.getElementById("readcheck-2");
let n1=0,n2=0,n3=0;

function show_op(){
    n1++;
    if(n1%2!=0)
    {
        if(n2%2!=0)
        {
            read_khamun();
        }
        if(n3%2!=0)
        {
            read_cat();
        }
        document.getElementById("show-more").style.translate="32vw 98vw";
        document.getElementById("show-more-para").textContent="SHOW LESS";
        document.getElementById("show-more-arrows").style.rotate="180deg";
        document.getElementById("readme-3").style.height="40vw";
        document.getElementById("left-b").style.height="354.8vw";
        document.getElementById("right-b").style.height="359.8vw";
        document.getElementById("buttom-stretch").style.translate="0vw 49.8vw";
        document.getElementById("bg-second-div").style.height="210vw";
        document.getElementById("push-push").style.translate="0vw 110vw";
    }
    else
    {
        document.getElementById("show-more").style.translate="32vw 65vw";
        document.getElementById("show-more-para").textContent="SHOW MORE";
        document.getElementById("show-more-arrows").style.rotate="0deg";
        document.getElementById("readme-3").style.height="0vw";
        document.getElementById("left-b").style.height="322.8vw";
        document.getElementById("right-b").style.height="327.8vw";
        document.getElementById("buttom-stretch").style.translate="0vw 17.8vw";
        document.getElementById("bg-second-div").style.height="190vw";
        document.getElementById("push-push").style.translate="0vw 78vw";
    }
}

function read_khamun(){
    n2++;
    if(n2%2!=0)
    {
        if(n1%2!=0)
        {
            show_op();
        }
        if(n3%2!=0)
        {
            read_cat();
        }
        document.getElementById("readmore-1").textContent="Read Less";//
        document.getElementById("khamun-para").style.height="60vw";//
        document.getElementById("readmore-1").style.translate="8vw 56vw";//
        document.getElementById("buttom-stretch").style.translate="0vw 52.8vw";//
        document.getElementById("bg-second-div").style.height="210vw";//
        document.getElementById("left-b").style.height="357.8vw";//
        document.getElementById("right-b").style.height="362.8vw";//
        document.getElementById("readme-2").style.translate="0vw 35vw";//
        document.getElementById("push-down").style.translate="0vw 35vw";//
    }
    else
    {
        console.log("poo");
        document.getElementById("readmore-1").textContent="Read More";//
        document.getElementById("khamun-para").style.height="17.5vw";//
        document.getElementById("readmore-1").style.translate="8vw 23vw";//
        document.getElementById("buttom-stretch").style.translate="0vw 17.75vw";//
        document.getElementById("bg-second-div").style.height="250vw";//
        document.getElementById("left-b").style.height="322.8vw";//
        document.getElementById("right-b").style.height="327.8vw";//
        document.getElementById("readme-2").style.translate="0vw 0vw";//
        document.getElementById("push-down").style.translate="0vw 0vw";//
    }
}

function read_cat(){
    n3++;
    if(n3%2!=0)
    {
        if(n1%2!=0)
        {
            show_op();
        }
        if(n2%2!=0)
        {
            read_khamun();
        }
        document.getElementById("readmore-2").textContent="Read Less";
        document.getElementById("cat-para").style.height="29vw";
        document.getElementById("readmore-2").style.translate="40vw 55vw";
        document.getElementById("buttom-stretch").style.translate="0vw 29.8vw";
        document.getElementById("bg-second-div").style.height="210vw";
        document.getElementById("left-b").style.height="334.8vw";
        document.getElementById("right-b").style.height="339.8vw";
        document.getElementById("push-down").style.translate="0vw 12vw";
    }
    else
    {
        document.getElementById("readmore-2").textContent="Read More";//
        document.getElementById("cat-para").style.height="12vw";//
        document.getElementById("readmore-2").style.translate="40vw 38vw";//
        document.getElementById("buttom-stretch").style.translate="0vw 17.75vw";
        document.getElementById("bg-second-div").style.height="200vw";
        document.getElementById("left-b").style.height="322.8vw";//
        document.getElementById("right-b").style.height="327.8vw";//
        document.getElementById("push-down").style.translate="0vw 0vw";//
    }
}

document.getElementById("readmore-2").onclick=function(){
    read_cat();
}
document.getElementById("show-more").onclick=function(){
    show_op();
}
document.getElementById("readmore-1").onclick=function(){
    read_khamun();
}

let sliderr=document.getElementById("nav-checkbox");
document.getElementById("slider-menu").style.translate="0vw 35vw";
let n=0,g=0;
setInterval(()=>
    {
        if(sliderr.checked==false && n<10 &&g==1)
        {   
            let v=String(1-((++n)/10));
            document.getElementById("slider-menu").style.opacity=`${v}`;
            if(v==0)
            setTimeout(()=>
            {
                document.getElementById("slider-menu").style.translate="0vw 35vw";

            },150) 
        }
        else if(sliderr.checked==true){
            document.getElementById("slider-menu").style.opacity="1";
            document.getElementById("slider-menu").style.translate="0vw -3.7vw";
            g=1;
            n=0;
        }
    } ,30);    

    
document.getElementById("show-more").onmouseover=function()
{
    document.getElementById("show-more").style.borderRadius="40px";
}
document.getElementById("show-more").onmouseout=function()
{
    document.getElementById("show-more").style.borderRadius="5px";
    document.getElementById("show-more").style.border="0.2vw #603716 solid";
}


document.getElementById("back-slide").onmouseover=function(){
    document.getElementById("pencil").style.borderRadius="20px";
    document.getElementById("pencil").style.border="0.1vw #603716 solid";
}
document.getElementById("back-slide").onmouseout=function(){
    document.getElementById("pencil").style.border="0vw #603716 solid";
}

document.getElementById("next-slide").onmouseover=function(){
    document.getElementById("cutter").style.borderRadius="20px";
    document.getElementById("cutter").style.border="0.1vw #603716 solid";
}
document.getElementById("next-slide").onmouseout=function(){
    document.getElementById("cutter").style.border="0vw #603716 solid";
}



let fr=0,fc=0;

function back_stab()
{
    fc=3-1-(fr%3);
    fr++;
    if(fr%3==1)
    {
        document.getElementById("valley-frame").style.zIndex="2";
        document.getElementById("red-frame").style.translate="49vw 8vw";
        document.getElementById("red-frame").style.zIndex="-1";
        document.getElementById("cairo-frame").style.translate="12.5vw 8vw";
        document.getElementById("cairo-frame").style.scale="0.8";
        document.getElementById("cairo-frame").style.zIndex="-1";
        document.getElementById("valley-frame").style.translate="28.5vw 5vw";
        document.getElementById("valley-frame").style.scale="1";
    }
    else if(fr%3==2)
    {
        document.getElementById("red-frame").style.zIndex="2";
        document.getElementById("cairo-frame").style.translate="49vw 8vw";
        document.getElementById("cairo-frame").style.zIndex="-1";
        document.getElementById("valley-frame").style.translate="12.5vw 8vw";
        document.getElementById("valley-frame").style.zIndex="-1";
        document.getElementById("valley-frame").style.scale="0.8";
        document.getElementById("red-frame").style.translate="28.5vw 5vw";
        document.getElementById("red-frame").style.scale="1";
    }
    else 
    {
        document.getElementById("cairo-frame").style.zIndex="2";
        document.getElementById("valley-frame").style.translate="49vw 8vw";
        document.getElementById("valley-frame").style.zIndex="-2";
        document.getElementById("red-frame").style.translate="12.5vw 8vw";
        document.getElementById("red-frame").style.zIndex="0";
        document.getElementById("red-frame").style.scale="0.8";
        document.getElementById("cairo-frame").style.translate="28.5vw 5vw";
        document.getElementById("cairo-frame").style.scale="1";
    }
}

function next_stab()
{
    fr=3-1-(fc%3);
    fc++;
    
    if(fc%3==1)
    { 
        document.getElementById("cairo-frame").style.zIndex="1";
        document.getElementById("red-frame").style.zIndex="2";
        document.getElementById("valley-frame").style.translate="12.5vw 8vw";
        document.getElementById("valley-frame").style.zIndex="-2";
        document.getElementById("cairo-frame").style.translate="49vw 8vw";
        document.getElementById("cairo-frame").style.scale="0.8";
        document.getElementById("red-frame").style.translate="28.5vw 5vw";
        document.getElementById("red-frame").style.scale="1";
    }
    else if(fc%3==2)
    {
        document.getElementById("cairo-frame").style.zIndex="-2";
        document.getElementById("valley-frame").style.zIndex="2";
        document.getElementById("cairo-frame").style.translate="12.5vw 8vw";
        document.getElementById("red-frame").style.translate="49vw 8vw";
        document.getElementById("red-frame").style.zIndex="0";
        document.getElementById("red-frame").style.scale="0.8";
        document.getElementById("valley-frame").style.translate="28.5vw 5vw";
        document.getElementById("valley-frame").style.scale="1";
    }
    else 
    {
        document.getElementById("cairo-frame").style.zIndex="2";
        document.getElementById("red-frame").style.translate="12.5vw 8vw";
        document.getElementById("red-frame").style.zIndex="-1";
        document.getElementById("valley-frame").style.translate="49vw 8vw";
        document.getElementById("valley-frame").style.zIndex="-1";
        document.getElementById("valley-frame").style.scale="0.8";
        document.getElementById("cairo-frame").style.translate="28.5vw 5vw";
        document.getElementById("cairo-frame").style.scale="1";
    }
}

let timer1=setInterval(next_stab,5000);

document.getElementById("back-slide").onclick=function()
{
    back_stab();
    clearInterval(timer1);
    timer1=setInterval(next_stab,5000);
}

document.getElementById("next-slide").onclick=function()
{
    next_stab();
    clearInterval(timer1);
    timer1=setInterval(next_stab,5000);
}

function explore(){
    document.getElementById("first-head").scrollIntoView();
}
function articles(){
    document.getElementById("articlo").scrollIntoView();
}
function galries(){
    document.getElementById("second-line").scrollIntoView();
}
function contact(){
    document.getElementById("contact-me").scrollIntoView();
}
