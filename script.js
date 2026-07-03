document.addEventListener("DOMContentLoaded", function () {

    const openBtn = document.getElementById("openBtn");
    const hero = document.querySelector(".hero");
    const envelope = document.querySelector(".envelope-page");

    if (openBtn) {
        openBtn.addEventListener("click", function () {
            hero.style.display = "none";
            envelope.classList.remove("hidden");
        });
    }

});
