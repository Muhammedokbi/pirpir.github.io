const pimple = document.getElementById('pimple');
let initialDistance = null;
let isPimpleSqueezed = false;

function calculateDistance(touches) {
    const [touch1, touch2] = touches;
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

pimple.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
        initialDistance = calculateDistance(e.touches);
    }
});

pimple.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2 && initialDistance) {
        const currentDistance = calculateDistance(e.touches);
        if (currentDistance < initialDistance / 2 && !isPimpleSqueezed) {
            isPimpleSqueezed = true;
            pimple.style.transform = 'scale(0.1)';
            pimple.style.backgroundColor = '#ff9999';
            setTimeout(() => {
                alert('Sivilceyi sıktın!');
                pimple.style.transform = 'scale(1)';
                pimple.style.backgroundColor = '#ff4d4d';
                isPimpleSqueezed = false;
            }, 500);
        }
    }
});

pimple.addEventListener('touchend', () => {
    initialDistance = null;
});
