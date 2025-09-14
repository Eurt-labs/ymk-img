// Fireworks effect
function triggerFireworks() {
    const fwCanvas = document.createElement('canvas');
    fwCanvas.id = 'fireworks-canvas';
    fwCanvas.style.position = 'fixed';
    fwCanvas.style.top = '0';
    fwCanvas.style.left = '0';
    fwCanvas.style.width = '100vw';
    fwCanvas.style.height = '100vh';
    fwCanvas.style.zIndex = 99999;
    fwCanvas.style.pointerEvents = 'none';
    document.body.appendChild(fwCanvas);
    fwCanvas.width = window.innerWidth;
    fwCanvas.height = window.innerHeight;
    const ctx = fwCanvas.getContext('2d');
    let particles = [];
    let colors = ['#ff5252','#ffd700','#00e676','#40c4ff','#ff69b4','#fff'];
    function Firework(x, y) {
        let count = 60 + Math.random()*30;
        for (let i = 0; i < count; i++) {
            let angle = (Math.PI * 2 * i) / count;
            let speed = 2 + Math.random() * 2.5;
            particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                alpha: 1,
                color: colors[Math.floor(Math.random()*colors.length)]
            });
        }
    }
    // Launch 5 fireworks at random positions
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            Firework(
                Math.random() * fwCanvas.width * 0.8 + fwCanvas.width * 0.1,
                Math.random() * fwCanvas.height * 0.5 + fwCanvas.height * 0.2
            );
        }, i * 400);
    }
    let frame = 0;
    function animate() {
        ctx.clearRect(0,0,fwCanvas.width,fwCanvas.height);
        particles.forEach(p => {
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3.5, 0, 2 * Math.PI);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.97;
            p.vy *= 0.97;
            p.vy += 0.03;
            p.alpha -= 0.012;
        });
        particles = particles.filter(p => p.alpha > 0.05);
        frame++;
        if (particles.length > 0 && frame < 220) {
            requestAnimationFrame(animate);
        } else {
            fwCanvas.remove();
        }
    }
    animate();
}

// To trigger fireworks, call triggerFireworks() from another script or event.
