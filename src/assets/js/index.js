import {Slider} from "./slider.js";

//= milkeeycatAnimate

Animate.init();

const slider = new Slider({
    slider: ".content__slider",
    transitionDuration: "1s",
    defaultTranslateX: "-100%",
    maxTranslateX: "-200%"
});


const multipleSlider = new Slider({
    slider: ".content__multiple-slider",
    transitionDuration: "1s",
    defaultTranslateX: "-25%",
    maxTranslateX: "-50%"
});

window.addEventListener("load", function (e) {
    slider.run();
    multipleSlider.run();
});
