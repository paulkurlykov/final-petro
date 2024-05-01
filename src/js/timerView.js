class TimerView {
    constructor() {
        this.days = document.querySelector("#days");
        this.hours = document.querySelector("#hours");
        this.minutes = document.querySelector("#minutes");
        this.seconds = document.querySelector("#seconds");
        this.dif = 48 * 60 * 60 * 1000;
        this.activateTimer();
        this.activate = setInterval(this.activateTimer.bind(this), 1000);
    }

    _formatTime(num) {
        return num < 10 ? `0${num}` : num;
    }

    renderTime(stamp) {
        this.days.innerHTML = this._formatTime(Math.round(stamp / (1000 * 60 * 60 * 24)));
        this.hours.innerHTML = this._formatTime(Math.floor((stamp / (1000 * 60 * 60)) % 24));
        this.minutes.innerHTML = this._formatTime(Math.floor((stamp / (1000 * 60)) % 60));
        this.seconds.innerHTML = this._formatTime(Math.floor((stamp / 1000) % 60));
    }

    activateTimer() {
        if (this.dif > 0) {
            this.dif -= 1000;
            this.renderTime(this.dif);
        } else clearInterval(this.activate);
    }
}

export default new TimerView();
