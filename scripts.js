document.addEventListener('DOMContentLoaded', function () {
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const body = document.body;
    let currentFontSize = 16;

    increaseFontButton.addEventListener('click', function () {
        currentFontSize += 2;
        body.style.fontSize = currentFontSize + 'px';
    });

    decreaseFontButton.addEventListener('click', function () {
        if (currentFontSize > 10) {
            currentFontSize -= 2;
            body.style.fontSize = currentFontSize + 'px';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const themeSwitcherButton = document.getElementById('theme-switcher');
    const body = document.body;

    themeSwitcherButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});