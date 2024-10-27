/* Functions specifically for the contact page (contact.html) */

const firstNameInput = document.getElementById("fname-input");
const lastNameInput = document.getElementById("lname-input");
const phoneNumberInput = document.getElementById("phone-input");
const reasoningInput = document.getElementById("reasoning-input");
const messageInput = document.getElementById("message-input");

const sendBtn = document.getElementById("send-button");

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

        } 
        
        // if required input is empty, alert user
        else {
            alert("Please fill in all required input fields!");
        }
});