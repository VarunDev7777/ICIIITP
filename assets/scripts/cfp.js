import * as CORE from "./gsap-public/src/all.js"
let gsap = CORE.gsap;

let tl = gsap.timeline();
tl.from(".topic_heading", {
    autoAlpha: 0,
    x: -200,
    transform: "scale(1.2)",
    duration: 1,
    delay: 0.2,
    stagger: 0.1
})
tl.from(".call_topic ul li", {
    autoAlpha: 0,
    transform: "scale(1.1)",
    stagger: 0.1
})