// main.js
<<<<<<< HEAD

const titleEffect = "<PORTFOLIO>" 
const headerTitle = document.querySelector('.header_title')
let index = 0;

function typing() {
    headerTitle.textContent += titleEffect[index++];
    if(index > titleEffect.length) {
        headerTitle.textContent = '';
        index = 0;
    }
}

setInterval(typing, 350)

=======
>>>>>>> a5419b0b62b0c2a8e3ced3a25941637849483502
