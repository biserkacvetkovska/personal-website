let switchThemeButton = document.getElementById('switch-theme');
switchThemeButton.addEventListener('click', function () {
    let className = document.body.className;

    if (className == 'theme-dark') {
        document.body.classList.remove('theme-dark')
        document.body.classList.add('theme-light');
    }
    else {
        document.body.classList.remove('theme-light')
        document.body.classList.add('theme-dark');
    }
});
