'use strict';

function dark_to_light() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    var button = document.getElementById('dark_light_btn');
    var button_image = document.getElementById('btn_image');

    var className = document.body.className;
    if (className == "light-theme") {
        button_image.src = "images/moon-clear-fill.png";
    }
    else {
        button_image.src = "images/sun-fill.png";
    }
}

function go_to_random_page() {
    var randomNumber = Math.floor(Math.random() * 4);

    switch(randomNumber) {
        case 0:
            window.location.replace("index.html");
            break;
        case 1:
            window.location.replace("about_me.html");
            break;
        case 2:
            window.location.replace("defend_humanity.html");
            break;
        case 3:
            window.location.replace("javascript.html");
            break;
    }
}