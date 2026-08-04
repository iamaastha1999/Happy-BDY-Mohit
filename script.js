const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const start=$("#startBtn"),app=$("#app"),intro=$("#intro"),song=$("#song"),music=$("#musicBtn");
start.onclick=()=>{intro.style.display="none";app.classList.remove("hidden");musicPlay();document.querySelector(".hero").scrollIntoView({behavior:"smooth"});confetti(80)};
function musicPlay(){song.play().then(()=>music.textContent="⏸ Pause our song").catch(()=>music.textContent="🎵 Play our song")}
music.onclick=()=>{if(song.paused)musicPlay();else{song.pause();music.textContent="🎵 Play our song"}};
song.onended=()=>music.textContent="🎵 Play our song";
const modal=$("#modal"),modalTitle=$("#modalTitle"),modalText=$("#modalText");
$$(".gift").forEach(g=>g.onclick=()=>{modalTitle.textContent=g.dataset.title;modalText.textContent=g.dataset.text;modal.classList.add("open");confetti(50)});
$("#closeModal").onclick=()=>modal.classList.remove("open");$("#modalOk").onclick=()=>modal.classList.remove("open");
modal.onclick=e=>{if(e.target===modal)modal.classList.remove("open")};
$("#envelope").onclick=()=>{$("#letter").classList.remove("hidden");$("#envelope").style.display="none";confetti(35)};
const gallery=$("#gallery");
for(let i=1;i<=14;i++){const d=document.createElement("div");d.className="photo";const img=document.createElement("img");img.src=`assets/photos/photo${i}.jpg`;img.alt=`Memory ${i}`;img.onerror=()=>d.remove();d.appendChild(img);d.onclick=()=>{lightboxImg.src=img.src;lightbox.classList.add("open")};gallery.appendChild(d)}
const lightbox=$("#lightbox"),lightboxImg=$("#lightboxImg");
$("#closeLightbox").onclick=()=>lightbox.classList.remove("open");lightbox.onclick=e=>{if(e.target===lightbox)lightbox.classList.remove("open")};
$("#wishBtn").onclick=()=>{$(".flames").style.display="none";$("#wish").textContent="Wish made! May all your dreams come true. Happy Birthday, Mohit! ❤️";confetti(180)};
$("#finalBtn").onclick=()=>{confetti(300);for(let i=0;i<5;i++)setTimeout(()=>confetti(100),i*350);$("#finalBtn").textContent="🎆 I Love You Forever ❤️"};
function confetti(n){for(let i=0;i<n;i++){const x=document.createElement("i");x.textContent=["💗","✨","🎉","💕","⭐"][Math.floor(Math.random()*5)];x.style.position="fixed";x.style.left="50%";x.style.top="45%";x.style.zIndex=200;x.style.pointerEvents="none";x.style.fontSize=(12+Math.random()*20)+"px";x.style.transition="transform 1.5s ease,opacity 1.5s";document.body.appendChild(x);requestAnimationFrame(()=>{x.style.transform=`translate(${(Math.random()-.5)*window.innerWidth}px,${(Math.random()-.5)*window.innerHeight}px) rotate(${Math.random()*720}deg)`;x.style.opacity=0});setTimeout(()=>x.remove(),1600)}}