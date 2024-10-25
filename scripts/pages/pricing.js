/* Functions specifically for the pricing page (pricing.html) */

const pricelistItems = document.getElementsByClassName("pricelist-item");
const pricelistImages = document.getElementsByClassName("pricelist-item-image");

// Hover fading animation on pricelist images
for (let i = 0; i < pricelistItems.length; i++) {
    pricelistItems[i].addEventListener("mouseover", () => {
        pricelistImages[i].style.opacity = "0";
    });
    pricelistItems[i].addEventListener("mouseout", () => {
        pricelistImages[i].style.opacity = "1";
    });
}