document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const description = card.querySelector(".description");
        if (description) {
            card.addEventListener("mouseenter", () => {
                description.style.display = "flex";
                setTimeout(() => {
                    description.classList.add("show");
                }, 10);
            });
            card.addEventListener("mouseleave", () => {
                description.classList.remove("show");
                setTimeout(() => {
                    description.style.display = "none";
                }, 300);
            });
        }
    });
});
