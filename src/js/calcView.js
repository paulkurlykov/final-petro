import { firstCalcMarkUp, secondCalcMarkUp, finalCalcMarkUp } from "./markup";
import { uploadData, url } from "./forms";
import { Tabs } from "./tabs";
import { toggleHidden } from "./modalView";

class Calcview {
    constructor() {
        this.parentEl = document.querySelector(".popup_calc_container");
        this.inputs = "";
        this.init();
        this.data = {
            sizes: {},
        };
    }

    init() {
        this.addCalcModalHandler();
        this.addOpenCalcModalBtnHandler();
    }

    render(mrkp) {
        const markup = mrkp;
        this._clean();

        this.parentEl.insertAdjacentHTML("afterbegin", markup);
    }

    _clean() {
        this.parentEl.innerHTML = "";
    }

    _renderUpdateMessage(msg, err = undefined) {
        const markup = `<div class="message">
        <img src="./assets/img/main/${!err ? "blue_tick.svg.png" : "error-icon-4.png"}" alt="#" class="message__icon">
        <p class="message__text">${msg}</p>
      </div>`;
        this.parentEl.insertAdjacentHTML("beforeend", markup);
    }

    _setCalcError(msg) {
        const calcErrorBox = this.parentEl.querySelector("div[class=error]");
        calcErrorBox.innerHTML = `${msg}`;
    }

    _isValidNumberInput(value) {
        const regex = /^\d+$/;
        return regex.test(String(value));
    }

    _isValidInput() {
        let res = false;
        this.inputs.forEach((inp) => {
            if (inp.value === "") {
                res = false;
            } else {
                res = true;
            }
        });

        console.log(res);

        return res;
    }

    addSelectListHandler() {
        const select = this.parentEl.querySelector("select");
        select.addEventListener("change", (e) => {
            console.log(this.data);
            this.data.glazingType = e.currentTarget.value;
        });
        this.data.glazingType = select.value;
    }

    addCheckBoxHandler() {
        const checkboxes = this.parentEl.querySelectorAll("input[class=checkbox]");
        checkboxes.forEach((chkbx) => {
            chkbx.addEventListener("change", (e) => {
                this._toggleCheckBoxes(e.currentTarget, checkboxes);
            });
        });
    }

    _toggleCheckBoxes(input, checkboxes) {
        checkboxes.forEach((chk) => (chk.checked = false));
        input.checked = true;
        this.data.climatType = input.nextElementSibling.id;
    }

    _openCalcModal() {
        toggleHidden(this.parentEl);
        openFirstCalcModal.render(firstCalcMarkUp);
        const calcModalImagesTabs = new Tabs("balcon_icons", "balcon_icons_img", "balcon_big_image");
        this.inputs = this.parentEl.querySelectorAll("input");
        this.inputs.forEach((inp) =>
            inp.addEventListener("input", () => {
                inp.value = inp.value.replace(/\D/, "");
                inp.id === "width" ? (this.data.sizes.width = inp.value) : inp.id === "height" ? (this.data.sizes.height = inp.value) : "";
                console.log(this.data);
            })
        );
    }

    addOpenCalcModalBtnHandler() {
        document.addEventListener("click", (e) => {
            e.target.closest(".popup_calc_btn") ? this._openCalcModal() : "";
        });
    }

    addCalcModalHandler() {
        this.parentEl.addEventListener("click", (e) => {
            if (e.target.closest(".popup_calc_button")) {
                this.data.type = document.querySelector(".balcon_icons_img--active").children[0].alt;
                if (!this._isValidInput()) return;
                this.render(secondCalcMarkUp);
                this.addSelectListHandler();
                this.addCheckBoxHandler();
                console.log(this.inputs);
            }

            if (e.target.closest(".popup_calc_profile_button")) {
                console.log(this.data);
                this.render(finalCalcMarkUp);
            }

            if (e.target.closest("[name=submit]")) {
                e.preventDefault();
                const form = this.parentEl.querySelector("form");
                uploadData(url, form, this.data);
            }

            if (e.target.closest(".popup_close")) {
                toggleHidden(this.parentEl);
                this._clean();
            }
        });
    }
}

export const openFirstCalcModal = new Calcview();
