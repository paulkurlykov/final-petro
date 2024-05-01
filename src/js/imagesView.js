class ImagesView {
    constructor() {
        this.parentEl = document.querySelector(".full-image");
        this.imagesContainer = document.querySelector(".works");
        this.addImagesHandler();
    }

    _toggleHidden(el) {
        el.classList.toggle("hidden");
    }

    openImage(e) {
        e.preventDefault();
        const path = e.target.closest("a").href;
        e.target.classList.add("flex-item");
        this.parentEl.innerHTML = "";
        const markup = this._generateMarkUp(path);
        this.parentEl.insertAdjacentHTML("beforeend", markup);
    }

    addImagesHandler() {
        this.imagesContainer.addEventListener("click", (e) => {
            if (e.target.closest(".preview")) {
                this.openImage(e);
                this._toggleHidden(this.parentEl);
            }

            if (e.target.closest(".full-image__cross") || e.target === this.parentEl) {
                this._toggleHidden(this.parentEl);
            }
        });
    }

    // _generateMarkUp(path) {
    //     return `<div class="full-image__wrapper">
    //     <div class="full-image__cross"><strong>&times;</strong></div>
    //     <img class="full-image__image" src="${path}" alt="#" />
    //     </div>`;
    // }

    _generateMarkUp(path) {
        return `<div class="full-image__cross"><strong>&times;</strong></div>
        <img class="full-image__image" src="${path}" alt="#" />`;
    }
}

const imagesView = new ImagesView();
