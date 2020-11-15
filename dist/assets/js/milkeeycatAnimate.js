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