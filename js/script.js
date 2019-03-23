var modal = document.querySelector(".modal");
var popup = document.querySelector(".send-us-popup-button");
var close = modal.querySelector(".modal-close");
var myName = modal.querySelector("[name=send-us-name]");

popup.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
    myName.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
});