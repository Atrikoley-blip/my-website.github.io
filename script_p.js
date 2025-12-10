/* CONTINUE MUSIC */
const bg = document.getElementById("bgMusic");
const saved = localStorage.getItem("music_time");

if (saved) bg.currentTime = parseFloat(saved);

setInterval(() => {
    localStorage.setItem("music_time", bg.currentTime);
}, 1000);

/* ❤️🌹 DROP ANIMATION */
function dropLove() {
    const el = document.createElement("div");

    if (Math.random() > 0.5) {
        el.className = "heart";
        el.innerHTML = "❤️";
    } else {
        el.className = "flower";
        el.innerHTML = "🌹";
    }

    el.style.left = Math.random() * window.innerWidth + "px";
    el.style.fontSize = (20 + Math.random()*20) + "px";

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
}
setInterval(dropLove, 300);

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let arr = [];
for (let i = 0; i < 80; i++) {
    arr.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random()*3 + 1,
        speedX: Math.random()*0.8 - 0.4,
        speedY: Math.random()*0.8 - 0.4
    });
}

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    arr.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = "#ff0303ff";
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fill();
    });
    requestAnimationFrame(animate);
}
animate();
