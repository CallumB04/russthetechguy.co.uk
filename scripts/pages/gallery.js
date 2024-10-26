/* Functions specifically for the gallery page (gallery.html) */

const image_files = []; // list of file names in the /gallery directory
const gallery = document.getElementById("gallery-section");

// function to load the html for the images
const load_images = () => {
    for (const filename of image_files) {
        gallery.innerHTML += `
            <img src="../assets/images/gallery/${filename}" class="gallery-image"/>
        `
    }
}