// Tabs
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(const tablink of tablinks){tablink.classList.remove("active-link");}
    for(const tabcontent of tabcontents){tabcontent.classList.remove("active-tab");}
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Video fullscreen
document.querySelectorAll('.work video').forEach(video=>{
    video.addEventListener('click',()=>{
        if(video.requestFullscreen) video.requestFullscreen();
        else if(video.webkitRequestFullscreen) video.webkitRequestFullscreen();
        else if(video.msRequestFullscreen) video.msRequestFullscreen();
        video.play();
    });
});

// Preloader + Typewriter trigger
document.addEventListener("DOMContentLoaded",()=>{
    const preloader=document.querySelector('.preloader');
    const audioElement=document.getElementById('preloader-audio');

    if(audioElement){
        const playAudio=()=>{audioElement.play().catch(()=>{});document.removeEventListener('click',playAudio);};
        document.addEventListener('click',playAudio);playAudio();
    }
    setTimeout(()=>{
        preloader.classList.add('hidden');
    setTimeout(()=>{preloader.style.display='none'; /* typewriter now handled in typewriter.js */},500);
    },1500);
    initTheme();
    setupThemeToggle();
    lazyEnhancements();
});

// Theme toggle
function initTheme(){ const stored=localStorage.getItem('theme'); if(stored==='light') document.body.classList.add('light'); }
function setupThemeToggle(){ const toggle=document.getElementById('onoff'); if(!toggle) return; toggle.checked=document.body.classList.contains('light'); toggle.addEventListener('change',()=>{ document.body.classList.toggle('light'); localStorage.setItem('theme', document.body.classList.contains('light')?'light':'dark');}); }

// Intersection Observer for subtle reveal (performance friendly)
function lazyEnhancements(){ const observer=new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in-view'); observer.unobserve(e.target);} }); },{threshold:0.2}); document.querySelectorAll('.services-list div, .work, .e-card').forEach(el=>observer.observe(el)); }

// Optional accessibility: reduce motion
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){ document.querySelectorAll('.wave').forEach(w=>w.style.animation='none'); }







