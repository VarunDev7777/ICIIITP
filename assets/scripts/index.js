import * as CORE from "./gsap-public/src/all.js"
import polyfill from "./smoothscroll.js"
polyfill();

let gsap = CORE.gsap

let tl = gsap.timeline()
tl.from(".first_headline", {
    autoAlpha: 0,
    y: -200,
    duration: 0.8,
    delay: 0.1
})
tl.from(".second_headline", {
    autoAlpha: 0,
    transform: 'scale(1.2)',
    duration: 0.5,
})
tl.from(".horizontal", {
    autoAlpha: 0,
    duration: 0.3
})
tl.from(".conf_info div", {
    autoAlpha: 0,
    transform: 'scale(1.2)',
    duration: 0.1,
    stagger: 0.2
})
tl.from(".reg_btn", {
    autoAlpha: 0,
    transform: 'scale(1.2)',
    duration: 0.5,
    delay: 0.5
})

let countdownDate = new Date("Aug 28, 2021 00:00:00").getTime();

let countdown = setInterval(function() {
    let now = new Date().getTime();
    let timeleft = countdownDate - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.querySelectorAll(".countdown_box")[0].children[0].innerHTML = days
    document.querySelectorAll(".countdown_box")[1].children[0].innerHTML = hours
    document.querySelectorAll(".countdown_box")[2].children[0].innerHTML = minutes
    document.querySelectorAll(".countdown_box")[3].children[0].innerHTML = seconds

    if (timeleft < 0) {
        clearInterval(countdown);
        document.querySelectorAll(".countdown_box")[0].children[0].innerHTML = "0"
        document.querySelectorAll(".countdown_box")[1].children[0].innerHTML = "0"
        document.querySelectorAll(".countdown_box")[2].children[0].innerHTML = "0"
        document.querySelectorAll(".countdown_box")[3].children[0].innerHTML = "0"
    }
}, 1000)

// slider
let scrollView = document.querySelector(".speaker_card_container")
let _ = document.querySelector(".slide_controller")
let _left = _.children[0]
let _right = _.children[1]

_left.addEventListener("click", function() {
    scrollView.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
_right.addEventListener("click", function() {
    scrollView.scrollTo({
        top: 0,
        left: scrollView.clientWidth,
        behavior: 'smooth'
    })
})