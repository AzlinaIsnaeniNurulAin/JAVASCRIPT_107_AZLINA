const navbarnav = document.querySelector ('.nav');
document.querySelector('#menu-icon').
onclick = () => {
    navbarnav.classList.toggle('active');
};

const hamburger = document.querySelector ('#menu-icon');
document.addEventListener('click', function (e) {
    if(!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});