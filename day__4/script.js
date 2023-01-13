const modal = document.querySelector(".modal"), btn = document.querySelector(".btn");

btn.addEventListener("click", openModal);

modal.addEventListener("click", (e) => {
    const evt = e.target.classList;
    if (evt.contains("modal") || evt.contains("close")) {
        closeModal();
    }
});

function openModal(e) {
    e.preventDefault();
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}
