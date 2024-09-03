const pimples = document.querySelectorAll('.pimple');
let initialDistances = {};
let squeezed = { pimple1: false, pimple2: false, pimple3: false };

function calculateDistance(touches) {
    const [touch1, touch2] = touches;
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

pimples.forEach((pimple, index) => {
    pimple.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
            initialDistances[`pimple${index + 1}`] = calculateDistance(e.touches);
        }
    });

    pimple.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2) {
            const currentDistance = calculateDistance(e.touches);
            if (currentDistance < initialDistances[`pimple${index + 1}`] / 2 && !squeezed[`pimple${index + 1}`]) {
                squeezed[`pimple${index + 1}`] = true;
                pimple.style.transform = 'scale(0.1)';
                pimple.style.backgroundColor = '#ff9999';
            }
        }
    });
});

document.getElementById('reset').addEventListener('click', () => {
    pimples.forEach((pimple, index) => {
        pimple.style.transform = 'scale(1)';
        pimple.style.backgroundColor = '#ff4d4d';
        squeezed[`pimple${index + 1}`] = false;
    });
});
