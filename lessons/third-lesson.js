let switchThemeButton = document.getElementById('switch-theme');

let countSwitches = 0;

switchThemeButton.addEventListener('click', function () {
    countClicks(); 

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

// Display greeting
function displayGreeting() {
    console.log('Hello, world!');
}

displayGreeting();

// Count clicks
function countClicks() {
    countSwitches = countSwitches + 1;

    document.getElementById("count-clicks").textContent = countSwitches;

    console.log("You clicked the button!");
}


