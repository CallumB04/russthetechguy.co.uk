/* Common functions used across all pages */

const body = document.getElementById("body");

const navbarDropdownButton = document.getElementById("navbar-dropdown-button");
const dropdownShapeTop = document.getElementById("dropdown-shape-top");
const dropdownShapeMiddle = document.getElementById("dropdown-shape-middle");
const dropdownShapeBottom = document.getElementById("dropdown-shape-bottom");

const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownOptionsWrapper = document.getElementById("dropdown-options-wrapper");

navbarDropdownButton.addEventListener("click", () => {

    // display dropdown menu
    if (dropdownMenu.classList.contains("hidden")) {

        // animate dropdown shape
        dropdownShapeTop.style.transform = "translateY(6px)";
        dropdownShapeBottom.style.transform = "translateY(-6px)";
        setTimeout(() => dropdownShapeMiddle.style.transform = "rotate(45deg)", 250);
        setTimeout(() => dropdownShapeTop.style.transform += "rotate(-45deg)", 250);
        setTimeout(() => dropdownShapeBottom.style.transform += "rotate(-45deg)", 250);

        dropdownMenu.classList.remove("hidden");
        dropdownOptionsWrapper.style.display = "flex";

        // Landscape
        if (window.matchMedia("(orientation: landscape)").matches) {
            dropdownMenu.style.animation = "0.1s dropdown-appear linear";
        } 
        // Portait
        else {
            dropdownMenu.style.animation = "0.2s fade-in linear";
            body.style.overflow = "hidden";
        }
    } else {

        // animate dropdown shape
        dropdownShapeMiddle.style.transform = "rotate(0deg)";
        dropdownShapeTop.style.transform += "rotate(45deg)";
        dropdownShapeBottom.style.transform += "rotate(45deg) ";
        setTimeout(() => {dropdownShapeTop.style.transform = ""}, 250);
        setTimeout(() => {dropdownShapeBottom.style.transform = ""}, 250);
        

        dropdownOptionsWrapper.style.display = "none";
        
        // Landscape
        if (window.matchMedia("(orientation: landscape)").matches) {
            setTimeout(() => {dropdownMenu.classList.add("hidden")}, 90);
            dropdownMenu.style.animation = "0.1s dropdown-disappear linear";
        }
        // Portait
        else {
            setTimeout(() => {dropdownMenu.classList.add("hidden")}, 190);
            dropdownMenu.style.animation = "0.2s fade-out linear";
            body.style.overflow = "scroll";
        }
    }
})