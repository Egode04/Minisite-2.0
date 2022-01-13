// DOM Elements

const themify = document.getElementById('themify');
const navbar = document.getElementById('navbar-light');
const body = document.body;

// Switch

var toggleDarkmode = false;


// Button Event Handlers

themify.onclick = () => {
    if (toggleDarkmode == false){
        toggleDarkmode = true;
        body.classList.replace('light', 'dark');
        navbar.style.background = "var(--text-secondary)";
    }
    else{
        toggleDarkmode = false;
        body.classList.replace('dark', 'light');
        navbar.style.background = "var(--bg-primary)";
    }
};