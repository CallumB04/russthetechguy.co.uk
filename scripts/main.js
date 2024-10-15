/* Common functions used across all pages */

const navbarDropdownButton = document.getElementById("navbar-dropdown-button");
const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownOptionsWrapper = document.getElementById("dropdown-options-wrapper");

navbarDropdownButton.addEventListener("click", () => {

    if (dropdownMenu.classList.contains("hidden")) {
        dropdownMenu.classList.remove("hidden");
        dropdownOptionsWrapper.style.display = "flex";

        // Landscape
        if (screen.width > screen.height) {
            dropdownMenu.style.animation = "0.1s dropdown-appear linear";
        } 
        // Portait
        else {
            dropdownMenu.style.animation = "0.2s fade-in linear";
        }
    } else {
        dropdownOptionsWrapper.style.display = "none";
        
        // Landscape
        if (screen.width > screen.height) {
            setTimeout(() => {dropdownMenu.classList.add("hidden")}, 90);
            dropdownMenu.style.animation = "0.1s dropdown-disappear linear";
        }
        // Portait
        else {
            setTimeout(() => {dropdownMenu.classList.add("hidden")}, 190);
            dropdownMenu.style.animation = "0.2s fade-out linear";
        }
    }
})