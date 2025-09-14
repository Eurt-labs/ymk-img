// Music play/pause utility in the corner
// Place your music file (e.g., music.mp3) in the project folder

var audio = new Audio('music.mp3'); // Change filename if needed
audio.loop = true;


var btn = document.createElement('button');
btn.id = 'music-btn';
btn.setAttribute('aria-label', 'Play/Pause Music');
btn.style.position = 'fixed';
btn.style.bottom = '24px';
btn.style.right = '24px';
btn.style.zIndex = '10000';
btn.style.padding = '14px 28px';
btn.style.background = '#ff69b4';
btn.style.color = '#fff';
btn.style.border = 'none';
btn.style.borderRadius = '16px';
btn.style.cursor = 'pointer';
btn.style.fontSize = '1.15rem';
btn.style.fontFamily = 'Arial, sans-serif';
btn.style.fontWeight = 'normal';
btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.13)';
btn.style.opacity = '0.97';
btn.style.transition = 'all 0.2s';
btn.textContent = 'Play Music';
document.body.appendChild(btn);

// Responsive for mobile
function updateMusicBtnMobile() {
    if (window.innerWidth < 600) {
        btn.style.bottom = '12px';
        btn.style.right = '12px';
        btn.style.padding = '12px 18px';
        btn.style.fontSize = '1rem';
        btn.style.borderRadius = '12px';
    } else {
        btn.style.bottom = '24px';
        btn.style.right = '24px';
        btn.style.padding = '14px 28px';
        btn.style.fontSize = '1.15rem';
        btn.style.borderRadius = '16px';
    }
}
window.addEventListener('resize', updateMusicBtnMobile);
updateMusicBtnMobile();

var isPlaying = false;
btn.onclick = function() {
    if (isPlaying) {
        audio.pause();
        btn.textContent = 'Play Music';
    } else {
        audio.play();
        btn.textContent = 'Pause Music';
    }
    isPlaying = !isPlaying;
};
