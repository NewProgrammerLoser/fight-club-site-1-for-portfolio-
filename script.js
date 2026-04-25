document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    const chaosBtn = document.getElementById('chaosBtn');

    // курсор
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX - 9}px`;
        cursor.style.top = `${e.clientY - 9}px`;
    });

    // хаос
    chaosBtn.addEventListener('click', () => {
        const videoPath = 'photos/fcfin.mp4';
        window.open(videoPath, '_blank');
    });

    // мигание
    function triggerSubliminal() {
        const subImg = document.getElementById('subliminal-img');
        subImg.classList.remove('active');
        void subImg.offsetWidth;
        subImg.classList.add('active');
    }

    setInterval(() => {
        if (Math.random() > 0.85) triggerSubliminal();
    }, 5000);

    // пасхалка
    console.log('%c FIGHT CLUB ', 'background: #e94560; color: #000; font-size: 22px; font-weight: bold; padding: 5px;');
    console.log('%c First rule: you do not talk about Fight Club. ', 'color: #666;');
});
