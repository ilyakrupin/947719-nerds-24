var modal = document.querySelector(".modal");
var open = document.querySelector(".send-us-popup-button");
var close = document.querySelector(".modal-close");

open.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
});