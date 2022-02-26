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