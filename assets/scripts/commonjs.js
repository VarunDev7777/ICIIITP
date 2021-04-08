import polyfill from "./smoothscroll.js"
polyfill();

let hamopenstate = false
let hamburger = document.querySelector(".ham_container")
let linkcontainer = document.querySelector(".mob_main_header .link_container")
hamburger.addEventListener("click", function () {
    if (!hamopenstate) {
        hamopenstate = !hamopenstate
        linkcontainer.style.cssText = `
        opacity: 1;
        top: 0;
        visibility: visible`
        hamburger.style.cssText = "z-index: 101"
        hamburger.children[0].style.cssText = "background-color: #fff; transform: rotate(45deg) translateY(9px) translateX(5px)"
        hamburger.children[1].style.cssText = "background-color: #fff; transform: scale(0)"
        hamburger.children[2].style.cssText = "background-color: #fff; transform: rotate(-45deg) translateY(-9px) translateX(5px)"
        return
    } else {
        hamopenstate = !hamopenstate
        linkcontainer.removeAttribute("style")
        for (let i = 0; i < hamburger.children.length; i++) {
            hamburger.children[i].removeAttribute("style")
        }
    }
})