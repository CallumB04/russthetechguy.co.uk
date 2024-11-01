/* Functions specifically for the gallery page (gallery.html) */

// list of file names in the /gallery directory
const image_files = [
    "laptop-1.jpg", "motherboard-1.jpg", "phonerepair-1.jpg", "workshop-1.jpg", 
    "laptop-2.jpg", "motherboard-3.jpg", "pc-1.jpg", "pc-2.jpg", "pc-3.jpg", 
    "pc-4.jpg", "ps4-1.jpg","motherboard-2.jpg"
]; 

const gallery = document.getElementById("gallery-section");

// function to load the html for the images
const load_images = () => {
    for (const filename of image_files) {
        gallery.innerHTML += `
            <img src="../assets/images/gallery/${filename}" class="gallery-image"/>
        `
    }
}