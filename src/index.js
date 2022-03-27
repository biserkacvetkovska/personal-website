var array = ["a woman", "a consultant manager", "a software engineer", "Biserka"];
var i = 0;

function rotate() {
        setTimeout(() => {
            if (i === 4)
                i = 0;
            if (i < 5) {
                document.getElementById("text-rotate").innerText = array[i];

                rotate();
            }
                
            i++;
                
        }, 1000);
    }

window.addEventListener('DOMContentLoaded', (event) => {
    rotate();
});