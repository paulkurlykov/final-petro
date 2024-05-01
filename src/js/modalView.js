// Toggle hidden class on modals (part of the Open Modal func)
export const toggleHidden = (el) => el.classList.toggle("hidden");

class modalsView {
    constructor(btnClass, modalClass, crossClass = undefined) {
        this.btns = document.querySelectorAll(`.${btnClass}`);
        this.modal = document.querySelector(`.${modalClass}`);
        this.crosses = crossClass ? crossClass : document.querySelectorAll(".popup_close");
        this.addModalsHandler();
        this.addCloseModalHandler();
    }

    _toggleHidden(el) {
        el.classList.toggle("hidden");
    }

    addCloseModalHandler() {
        this.modal.addEventListener("click", (e) => {
            e.target === this.modal ? this._toggleHidden(this.modal) : "";
            e.target.closest(".popup_close") ? this._toggleHidden(this.modal) : "";
        });
    }

    addModalsHandler(fn = undefined) {
        this.btns.forEach((btn) =>
            btn.addEventListener("click", (e) => {
                fn ? fn(e) : "";
                this._toggleHidden(this.modal);
            })
        );
    }
}

const popupModals = new modalsView("phone_link", "popup");
const engineerModals = new modalsView("popup_engineer_btn", "popup_engineer");
