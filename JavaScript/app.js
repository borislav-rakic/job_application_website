'use strict';

var timer = null;

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

    init();

    if (window.localStorage.getItem(3) == "en") {
        if (window.location.href == "https://borislav.rakic.ch/index.html") {
            window.open("https://borislav.rakic.ch/index_en.html", "_self");
        }
        else if (window.location.href == "https://borislav.rakic.ch/about_me.html") {
            window.open("https://borislav.rakic.ch/about_me_en.html", "_self");
        }
        else if (window.location.href == "https://borislav.rakic.ch/defend_humanity.html") {
            window.open("https://borislav.rakic.ch/defend_humanity_en.html", "_self");
        }
        else if (window.location.href == "https://borislav.rakic.ch/javascript.html") {
            window.open("https://borislav.rakic.ch/javascript_en.html", "_self");
        }
    }
    else {
        if (window.location.href == "https://borislav.rakic.ch/index_en.html") {
            window.open("https://borislav.rakic.ch/index.html", "_self");
        }
        else if (window.location.href == "https://borislav.rakic.ch/about_me_en.html") {
            window.open("https://borislav.rakic.ch/about_me.html", "_self");
        }
        else if (window.location.href == "https://borislav.rakic.ch/defend_humanity_en.html") {
            window.open("https://borislav.rakic.ch/defend_humanity.html", "_self");
        }
        else if (window.location.href == "https://borislav.rakic.ch/javascript_en.html") {
            window.open("https://borislav.rakic.ch/javascript.html", "_self");
        }
    }
}

function init() {
    try {
        document.getElementById("profile_picture").addEventListener("mouseenter", visible_personal_information);
        document.getElementById("profile_picture").addEventListener("mouseleave", hide_personal_information);
    }
    catch {
        TypeError;
    }


    try {
        document.getElementById("random_page").addEventListener("mouseenter", mouse_enter_animation);
        document.getElementById("random_page").addEventListener("mouseleave", mouse_leave_animation);
    }
    catch {
        TypeError;
    }


    try {
        document.getElementById("defend_humanity_link").addEventListener("mouseenter", mouse_enter_animation);
        document.getElementById("defend_humanity_link").addEventListener("mouseleave", mouse_leave_animation);
    }
    catch {
        TypeError;
    }


    try {
        document.getElementById("github_link").addEventListener("mouseenter", mouse_enter_animation);
        document.getElementById("github_link").addEventListener("mouseleave", mouse_leave_animation);
    }
    catch {
        TypeError;
    }


    document.querySelectorAll(".page_links_1").forEach(item => {
        item.addEventListener("mouseenter", mouse_enter_animation);
    });
    document.querySelectorAll(".page_links_1").forEach(item => {
        item.addEventListener("mouseleave", mouse_leave_animation);
    });


    document.querySelectorAll(".page_links_2").forEach(item => {
        item.addEventListener("mouseenter", mouse_enter_animation);
    });
    document.querySelectorAll(".page_links_2").forEach(item => {
        item.addEventListener("mouseleave", mouse_leave_animation);
    });
}

// Makes the personal information visible when the mouse courser hovers over the picture
function visible_personal_information() {
    clearTimeout(timer);

    var info = document.getElementById("personal_information");
    
    info.style.animationName = "personal_information_on_hover_animation";
    info.style.display = "block";
}

// Hides the personal information when the mouse courser leaves the picture
function hide_personal_information() {
    var info = document.getElementById("personal_information");

    info.style.animationName = "personal_information_on_hover_stop_animation";
    
    clearTimeout(timer);

    timer = setTimeout(function() {
        info.style.display = "none";
    }, 500);
}

// Enlargens the button when the mouse courser hovers over the element
function mouse_enter_animation() {
    this.style.animationName = "btn_on_hover_animation";
}

// Makes the button smaller when the mouse courser leaves the element
function mouse_leave_animation() {
    this.style.animationName = "btn_on_hover_stop_animation";
}

// This function toggles dark/light mode
function dark_to_light() {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    window.localStorage.removeItem(0);
    window.localStorage.removeItem(1);
    window.localStorage.setItem(0, document.body.className);

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

function set_german() {
    window.localStorage.removeItem(3);
    location.reload();
}

function set_english() {
    window.localStorage.setItem(3, "en");
    window.location.reload();
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

// Opens the link in a new tab
function go_to_link(link) {
    window.open(link, "_blank");
}