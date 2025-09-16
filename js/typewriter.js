document.addEventListener('DOMContentLoaded',()=>{
  const el = document.getElementById('typewriter-name');
  if(!el) return;
  const full = el.getAttribute('data-full-text') || el.textContent.trim();
  // Clear initial content for JS-based typing
  el.textContent='';
  // Wait until preloader gone (script.js hides with class 'hidden')
  const start = ()=>{
    if(typeof Typed==='undefined'){ el.textContent=full; return; }
    new Typed('#typewriter-name', {
      strings:[full],
      typeSpeed:70,
      startDelay:100,
      showCursor:true,
      cursorChar:'|',
      onComplete: (self)=>{ self.cursor.remove(); }
    });
  };
  // Poll for preloader removal
  const check=()=>{ const pl=document.querySelector('.preloader'); if(!pl || pl.classList.contains('hidden')) { start(); } else { requestAnimationFrame(check); } };
  check();
});
