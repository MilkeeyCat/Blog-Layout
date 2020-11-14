import {Slider} from "./slider.js";

//= milkeeycatAnimate

Animate.init();

const slider = new Slider({
    slider: ".content__slider",
    transitionDuration: "1s",
    defaultTranslateX: "-100%",
    maxTranslateX: "-200%"
});

slider.run();

const multipleSlider = new Slider({
    slider: ".content__multiple-slider",
    transitionDuration: "1s",
    defaultTranslateX: "-25%",
    maxTranslateX: "-50%"
});

multipleSlider.run();