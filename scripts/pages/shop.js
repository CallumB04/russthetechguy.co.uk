/* Functions specifically for the shop page (shop.html) */

const activeListingsDiv = document.getElementById("active-listings");

// array of items to be shown as active listings in the shop

/* {
    file: "test1.jpg",
    name: "Test Item 1",
    price: "13.99",
    purchaseLink: "https://google.com"
},
{
    file: "test2.jpg",
    name: "Test Item 2",
    price: "19.99",
    purchaseLink: "https://youtube.com"
}
*/

const activeListingItems = [
    
];


// Function to add items into the shop from the array
const addShopItems = () => {

    // Add disclaimer if active listings is empty
    if (!activeListingItems.length) {
        activeListingsDiv.innerHTML += `
            <h2 class="shop-disclaimer">
                There are currently no items available for purchase...
            </h2>
        `
    }

    for (const item of activeListingItems) {
        activeListingsDiv.innerHTML += `
            <div class="shop-item">
                <a href="${item.purchaseLink}" target="_blank">
                    <img src="../assets/images/shop-page/${item.file}"/>
                    <h2 class="item-name">${item.name}</h2>
                    <p class="item-price">£${item.price}</p>
                </a>
            </div>
        `
    }
};