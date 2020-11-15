import {Slider} from "./slider.js";

export class Animate {

    static run() {
        const animationElements = document.querySelectorAll("[data-mc]");

        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("mc-animate");
                }
            });
        });

        Array.from(animationElements).forEach(element => {
            element.classList.add("mc-init");
            observer.observe(element);
        })

    }

    static init() {
        this.run();
    }

}

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