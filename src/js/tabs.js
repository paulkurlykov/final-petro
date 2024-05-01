export class Tabs {
    constructor(tabContainerClassName, tabsClassName, contentClassName) {
        this.tabContainer = document.querySelector(`.${tabContainerClassName}`);
        this.tabs = document.querySelectorAll(`.${tabsClassName}`);
        this.tabsContent = document.querySelectorAll(`.${contentClassName}`);
        this.tabsClassName = tabsClassName;
        this.contentClassName = contentClassName;
        this.activeClass = "active";
        this.tabMarkers = this.tabContainer.querySelectorAll(".tabmarker");
        this._init();
    }

    _init() {
        this.addClickHandler(this.tabContainer);
    }

    _setActiveClass(elems, i, className) {
        elems.forEach((el) => el.classList.remove(className));
        elems[i].classList.add(className);
    }

    addClickHandler() {
        this.tabContainer.addEventListener("click", (e) => {
            const elem = e.target.closest(`.${this.tabsClassName}`);
            if (!elem) return;
            this.tabs.forEach((tab, index) => {
                if (elem === tab) {
                    this._setActiveClass(this.tabs, index, `${this.tabsClassName}--${this.activeClass}`);
                    this._setActiveClass(this.tabsContent, index, `${this.contentClassName}--${this.activeClass}`);
                    this.tabMarkers.length > 0 ? this._setActiveClass(this.tabMarkers, index, this.activeClass) : "";
                }
            });
        });
    }
}

const contentTabs = new Tabs("glazing_slider", "glazing_block", "glazing_content");
const decorationTabs = new Tabs("decoration_slider", "decoration_item", "decoration_content__item");
