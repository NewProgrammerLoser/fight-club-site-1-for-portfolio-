document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    const chaosBtn = document.getElementById('chaosBtn');

    // Кастомный курсор
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX - 9}px`;
        cursor.style.top = `${e.clientY - 9}px`;
    });

    // Кнопка "Начать хаос" -> открывает новую вкладку
    chaosBtn.addEventListener('click', () => {
        // Укажите точный путь к файлу относительно HTML-файла
        const videoPath = 'photos/fcfin.mp4'; 
        
        // Открываем файл в новой вкладке
        window.open(videoPath, '_blank');
    });



    // Редкие сублиминальные вспышки "TYLER"
    function triggerSubliminal() {
        const flash = document.createElement('div');
        flash.className = 'subliminal-flash';
        flash.textContent = 'TYLER';
        document.body.appendChild(flash);
        setTimeout(() => flash.remove(), 120);
    }

    // Вспышка раз в 5-10 секунд случайно
    setInterval(() => {
        if (Math.random() > 0.85) triggerSubliminal();
    }, 5000);

    // Пасхалка в консоли
    console.log('%c FIGHT CLUB ', 'background: #e94560; color: #000; font-size: 22px; font-weight: bold; padding: 5px;');
    console.log('%c First rule: you do not talk about Fight Club. ', 'color: #666;');
});