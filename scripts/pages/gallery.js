/* Functions specifically for the gallery page (gallery.html) */

const image_files = [
    "phone1-before.jpg", "phone1-after.jpg",
      "laptop1-before.jpg", "laptop1-after.jpg",
        "workshop.jpg",
         "phonerepair1.jpg"
        ]; // list of file names in the /gallery directory
const gallery = document.getElementById("gallery-section");

// function to load the html for the images
const load_images = () => {
    for (const filename of image_files) {
        gallery.innerHTML += `
            <img src="../assets/images/gallery/${filename}" class="gallery-image"/>
        `
    }
}