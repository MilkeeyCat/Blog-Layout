import {swipe} from "./swipe.js";

export const transitionDuration = ".7s";

export class Slider {
    moving = false;
    transitionDuration;
    slider;
    elements = {};

    constructor(conf) {
        this.slider = conf["slider"];
        this.transitionDuration = conf.transitionDuration;
        this.translate = {"default": conf.defaultTranslateX, "max": conf.maxTranslateX};
        this.updateVariablesValue(conf);
    }

    updateVariablesValue() {
        const slider = document.querySelector(this.slider);

        this.elements.nextBtn = slider.querySelector(".slider__next-btn");
        this.elements.prevBtn = slider.querySelector(".slider__prev-btn");
        this.elements.slides = slider.querySelectorAll(".slider__slide");
        this.elements.slidesContainer = slider.querySelector(".slider__slides");
    }

    nexSlide() {
        if (!this.moving) {
            this.moving = true;
            this.elements.slidesContainer.style.transitionDuration = this.transitionDuration;
            this.elements.slidesContainer.style.transform = `translateX(${this.translate.max})`;

            const handler = () => {
                this.elements.slidesContainer.style.transitionDuration = "0ms";
                this.elements.slidesContainer.style.transform = `translateX(${this.translate.default})`;

                const slide = this.elements.slides[0];
                slide.parentNode.appendChild(slide);

                this.elements.slidesContainer.removeEventListener("transitionend", handler);
                this.moving = false;
            }

            this.elements.slidesContainer.addEventListener("transitionend", handler);
            this.updateVariablesValue();
        }
    }

    prevSlide() {
        if (!this.moving) {

            this.moving = true;
            this.elements.slidesContainer.style.transitionDuration = this.transitionDuration;
            this.elements.slidesContainer.style.transform = `translateX(0)`;
            const handler = () => {
                this.elements.slidesContainer.style.transitionDuration = "0ms";
                this.elements.slidesContainer.style.transform = `translateX(${this.translate.default})`;

                const slide = this.elements.slides[this.elements.slides.length - 1];
                slide.parentNode.insertBefore(slide, this.elements.slides[0]);

                this.elements.slidesContainer.removeEventListener("transitionend", handler);
                this.moving = false;
            }

            this.elements.slidesContainer.addEventListener("transitionend", handler);
            this.updateVariablesValue();
        }
    }

    run() {
        swipe(this.elements.slidesContainer, {minTime: 50});
        this.elements.slidesContainer.addEventListener("swipe", (e) => {
            console.log(e.detail);
            if (e.detail.dir == "left") this.nexSlide();
            else if (e.detail.dir == "right") this.prevSlide();
        });
        this.elements.nextBtn.onclick = () => {
            this.nexSlide();
        }

        this.elements.prevBtn.onclick = () => {
            this.prevSlide();

        }
    }
}