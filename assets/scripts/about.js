import * as CORE from "./gsap-public/src/all.js"
let gsap = CORE.gsap

let tl = gsap.timeline();

tl.from(".about_conf_container,.about_ipr,.about_patents,.about_uni,.about_universalinovators", {
    x: -400,
    transform: 'rotate(5deg)',
    autoAlpha: 0,
    stagger: 0.5,
    duration: 1
})