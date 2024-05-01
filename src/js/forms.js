const forms = document.querySelectorAll("form");
export const url = "https://httpbin.org/post";

export const uploadData = async (url, form, obj = undefined) => {
    try {
        let formData;

        if (obj) {
            formData = new FormData(form);
            for (let key in obj) {
                formData.append(key, obj[key]);
            }
        } else {
            formData = new FormData(form);
        }

        renderSpinner(form);

        const res = await fetch(url, {
            method: "POST",
            body: formData,
        });

        if (!res.ok) throw new Error(`Could't submit data, status: ${res.ok}`);

        const data = await res.json();
        console.log(data);

        renderUpdateMessage(form, `Благодарим вас за оставленную заявку, скот.`);
    } catch (err) {
        console.error(err);
        renderUpdateMessage(form, `Что-то явно пошло не так, скот.`, err);
    }
};

const setError = (elem, msg = "is not correct") => {
    elem.parentElement.classList.add("error");
    elem.nextElementSibling.innerText = `${msg}`;
};

const isValidPhone = (phone) => {
    const reg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return reg.test(String(phone));
};

const resetError = (input) => {
    input.parentElement.classList.remove("error");
    input.nextElementSibling.innerText = "";
};

const formValidation = (inputs) => {
    let res = true;
    inputs.forEach((input) => {
        if (input.value === "") {
            setError(input, "Поле не должно быть пустым");
            res = false;
            return;
        } else if (input.name === "user_phone") {
            if (!isValidPhone(input.value)) {
                setError(input, "Номер введен неверно");
                res = false;
                return;
            }
        }

        resetError(input);
    });

    return res;
};

forms.forEach((f) => {
    f.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputs = f.querySelectorAll("input");
        if (!formValidation(inputs)) return;
        uploadData(url, f);
    });
});

const renderUpdateMessage = (parentEl, msg, err = undefined) => {
    parentEl.innerHTML = "";
    const markup = `<div class="message">
    <img src="./assets/img/main/${!err ? "blue_tick.svg.png" : "error-icon-4.png"}" alt="#" class="message__icon">
    <p class="message__text">${msg}</p>
  </div>`;
    parentEl.insertAdjacentHTML("beforeend", markup);
};

function renderSpinner(parentEl) {
    parentEl.innerHTML = "";
    const markup = `<div class="swapping-squares-spinner" :style="spinnerStyle">
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
  </div>`;
    parentEl.insertAdjacentHTML("beforeend", markup);
}
