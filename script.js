document.addEventListener("DOMContentLoaded", () => {
    const promoInput = document.querySelector("#promo-code");

    // Display a message when a promo code is entered
    promoInput.addEventListener("input", () => {
        const message = promoInput.value
            ? `Promo code "${promoInput.value}" applied!`
            : "";
        alert(message);
    });

    // Button interaction
    document.querySelectorAll(".btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            alert("Button clicked!");
        });
    });
});
