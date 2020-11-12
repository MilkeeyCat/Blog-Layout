import {Slider} from "./slider.js";

const slider = new Slider({
    slider: ".content__slider",
    transitionDuration: "1s",
    defaultTranslateX: "-100%",
    maxTranslateX: "-200%"
});

slider.run();