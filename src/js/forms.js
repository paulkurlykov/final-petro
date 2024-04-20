const forms = document.querySelectorAll("form");
const url = "https://httpbin.org/post";

const uploadData = async (url, form) => {
    try {
        const formData = new FormData(form);
        console.log(formData);
        const res = await fetch(url, {
            method: "POST",
            body: formData,
        });

        if (!res.ok) throw new Error(`Could't submit data, status: ${res.ok}`);

        const data = await res.json();
        console.log(data);
        renderSuccessMessage(form);
    } catch (err) {
        console.log("error");
        console.error(err);
        renderErrorMessage(form);
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
    console.log("resetting error");
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

const renderSuccessMessage = (parentEl) => {
    parentEl.innerHTML = "";
    const markup = `<div class="message">
    <img src="./assets/img/main/blue_tick.svg.png" alt="#" class="message__icon">
    <p class="message__text">Благодарим вас за оставленную заявку, скот.</p>
  </div>`;
    parentEl.insertAdjacentHTML("beforeend", markup);
};

const renderErrorMessage = (parentEl) => {
    parentEl.innerHTML = "";
    const markup = `<div class="message">
    <img src="./assets/img/main/error-icon-4.png" alt="#" class="message__icon">
    <p class="message__text">Что-то явно пошло не так, скот.</p>
  </div>`;
    parentEl.insertAdjacentHTML("beforeend", markup);
};
