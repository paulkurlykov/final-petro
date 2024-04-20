const callEngineerBtn = document.querySelector(".popup_engineer_btn");
const callEngineerModal = document.querySelector(".popup_engineer");
const generalModal = document.querySelector(".popup");
const doc = document.querySelector("body");

const toggleHidden = (el) => el.classList.toggle("hidden");

doc.addEventListener("click", (e) => {
    e.target.closest(".popup_engineer_btn") ? toggleHidden(callEngineerModal) : "";
    e.target.closest(".phone_link") ? toggleHidden(generalModal) : "";
});

[callEngineerModal, generalModal].forEach((modal) => {
    modal.addEventListener("click", (e) => (e.target.closest(".popup_close") ? toggleHidden(e.currentTarget) : ""));
});
