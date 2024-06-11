let fullNavWidth;
let miniNavWidth;

window.onload = function () {
    const root = document.documentElement;
    const rootStyles = getComputedStyle(root);
    fullNavWidth = rootStyles.getPropertyValue('--full-nav-width').trim();
    miniNavWidth = rootStyles.getPropertyValue('--mini-nav-width').trim();
}

let hamburger = document.getElementById("hamburger");
hamburger.addEventListener('click', (event) => {
    event.preventDefault();
    let miniNav = document.getElementById("mini-nav");
    let fullNav = document.getElementById("full-nav");
    miniNav.classList.toggle('show');
    fullNav.classList.toggle('show');
    toggleMainMarginLeft();
    toggleFilterMarginLeft();
})


function toggleMainMarginLeft() {
    const main = document.getElementById('main');
    if (main.style.marginLeft === "" || main.style.marginLeft === miniNavWidth)
        main.style.marginLeft = fullNavWidth;
    else if (main.style.marginLeft === "" || main.style.marginLeft === fullNavWidth)
        main.style.marginLeft = miniNavWidth;
}

function toggleFilterMarginLeft() {
    const filters = document.getElementById('filters');
    if (filters.style.left === "" || filters.style.left === miniNavWidth)
        filters.style.left = fullNavWidth;
    else if (filters.style.left === "" || filters.style.left === fullNavWidth)
        filters.style.left = miniNavWidth;
}
