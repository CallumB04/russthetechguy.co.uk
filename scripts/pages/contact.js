/* Functions specifically for the contact page (contact.html) */

const firstNameInput = document.getElementById("fname-input");
const lastNameInput = document.getElementById("lname-input");
const phoneNumberInput = document.getElementById("phone-input");
const reasoningInput = document.getElementById("reasoning-input");
const messageInput = document.getElementById("message-input");

const sendBtn = document.getElementById("send-button");

// function to capitalise first letter of a string
const capitalize = (value) => String(value[0]).toUpperCase() + String(value).slice(1);

sendBtn.addEventListener("click", 
    () => {
        
        // Array for all inputs that need an entered value
        let requiredInputValues = [
            firstNameInput.value, 
            lastNameInput.value, 
            reasoningInput.value, 
            messageInput.value
        ];

        // ensuring no required inputs are empty
        if (requiredInputValues.every(value => value !== "")) {

            // Subject for the automated Email
            let emailSubject = `
                Website form - 
                ${capitalize(firstNameInput.value)} ${capitalize(lastNameInput.value)} - 
                ${reasoningInput.value !== "other" ? capitalize(reasoningInput.value) : "Unknown"} Inquiry
            `;

            // Body for the automated Email.
            // Contains all the info provided by the user, in a professional structure.
            let emailBody = ``;

            // Create email with given subject and body, and open in a new tab
            // Use regex to prevent: more than one space at a time; space at start of subject
            window.open(
                `mailto:plumbbusiness101@gmail.com?subject=${
                    emailSubject
                    .replace(/\s+/g, " ")
                    .replace(/^\s/, "")
                }&body=${emailBody}`
                , "_blank"
            );
        } 
        
        // if required input is empty, alert user
        else {
            alert("Please fill in all required input fields!");
        }
});