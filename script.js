let content=document.querySelector('.content');
let video_player=document.querySelector('.video_player');
let video=document.querySelector('.video');
let play_button=document.querySelector('.play_button');
let trigger_div=document.querySelector('.trigger_div');
let c0=document.querySelector('.c_in');
let c1=document.querySelector('.circle1');
let c2=document.querySelector('.circle2');
let c3=document.querySelector('.circle3');
let c4=document.querySelector('.circle4');
let h=window.innerHeight;
let w=window.innerWidth;
const progress = document.querySelector('.video_progress')
const progressBar = document.querySelector('.video_progress_filled')

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(content, {
    opacity:1,
},
{
    opacity: 0,
    ease: 'power4', 
    scrollTrigger:{
        trigger:trigger_div,
        scrub:1,
    } 
})

window.addEventListener('scroll', function(){
    let var3=window.scrollY;
    let var4=(100*var3)/h - 20;
    let var5=(var4*h)/100;
    if(var4>0){
        video_player.style.clipPath="circle("+var4+"vh at center center)"; 
        c0.style.top=(20-var4)/2+"vh";  
        c1.style.width=80+var4+"vh";
        c1.style.height=80+var4+"vh";
        c2.style.width=60+var4+"vh";
        c2.style.height=60+var4+"vh";
        c3.style.width=32+var4+"vh";
        c3.style.height=32+var4+"vh";
        c4.style.width=20+var4+"vh";
        c4.style.height=20+var4+"vh";
    }else{
        video_player.style.clipPath="circle("+0+"% at center center)"; 
        c0.style.top=10+"vh";
        c1.style.width="80vh";
        c1.style.height="80vh";
        c2.style.width="60vh";
        c2.style.height="60vh";
        c3.style.width="32vh";
        c3.style.height="32vh";
        c4.style.width="20vh";
        c4.style.height="20vh";
    }
})

play_button.addEventListener('click', function(){
    if(video.paused){
      video.play()
      play_button.innerHTML = 
      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 7H8V17H11V7Z" fill="currentColor" /><path d="M13 17H16V7H13V17Z" fill="currentColor" /></svg>`
    } else {
      video.pause()
      play_button.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" fill="currentColor" /></svg>`
    }
  })

video.addEventListener('timeupdate', () =>{
    const percentage = (video.currentTime / video.duration) * 100
    progressBar.style.width = `${percentage}%`
  })

progress.addEventListener('click', (e) =>{
    const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = progressTime
})

