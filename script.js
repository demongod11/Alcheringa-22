let var1=document.querySelector('.five');
let var2=document.querySelector('.two');
let var5=document.querySelector('.four');
let c1=document.querySelector('.circle1');
let c2=document.querySelector('.circle2');
let c3=document.querySelector('.circle3');
let c4=document.querySelector('.circle4');
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(var1, {
    opacity:1,
},
{
    opacity: 0,
    ease: 'power4', 
    scrollTrigger:{
        trigger:var5,
        scrub:1,
    } 
})

window.addEventListener('scroll', function(){
    let var3=window.scrollY;
    let var4=(100*var3)/769 - 20;
    if(var4>0){
        var2.style.clipPath="circle("+var4+"% at center center)"; 
        c1.style.width=600+var3+"px";
        c1.style.height=600+var3+"px";
        c2.style.width=450+var3+"px";
        c2.style.height=450+var3+"px";
        c3.style.width=250+var3+"px";
        c3.style.height=250+var3+"px";
        c4.style.width=150+var3+"px";
        c4.style.height=150+var3+"px";
    }else{
        var2.style.clipPath="circle("+0+"% at center center)"; 
        c1.style.width="600px";
        c1.style.height="600px";
        c2.style.width="450px";
        c2.style.height="450px";
        c3.style.width="250px";
        c3.style.height="250px";
        c4.style.width="150px";
        c4.style.height="150px";
    }
})