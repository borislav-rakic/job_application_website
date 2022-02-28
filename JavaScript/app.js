'use strict';

// When the window loads, this checks, if the user previously turned on dark/light mode
window.onload = function() {
    if (window.localStorage.getItem(0) != "null" && window.localStorage.getItem(1) != "null") {
        document.body.className = window.localStorage.getItem(0);
        document.getElementById("btn_image").src = window.localStorage.getItem(1);
    }
    else {
        document.body.className = "dark-theme";
        document.getElementById("btn_image").src = "images/sun-fill.png";
    }

    if (document.body.classList.contains("null") || 
    (document.body.classList.contains("dark-theme") && document.body.classList.contains("light-theme"))) {
        document.body.className = "dark-theme";
        document.getElementById("btn_image").src = "images/sun-fill.png";
    }
}

// This function toggles dark/light mode
function dark_to_light() {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    window.localStorage.clear();
    window.localStorage.setItem(0, document.body.className);

    var button = document.getElementById("dark_light_btn");
    var button_image = document.getElementById("btn_image");

    var className = document.body.className;
    if (className == "light-theme") {
        button_image.src = "images/moon-clear-fill.png";
        window.localStorage.setItem(1, "images/moon-clear-fill.png");
    }
    else {
        button_image.src = "images/sun-fill.png";
        window.localStorage.setItem(1, "images/sun-fill.png");
    }
}

// This function brings the user to a random page (index.html not included)
function go_to_random_page() {
    var randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
        case 0:
            window.location.replace("about_me.html");
            break;
        case 1:
            window.location.replace("defend_humanity.html");
            break;
        case 2:
            window.location.replace("javascript.html");
            break;
    }
}