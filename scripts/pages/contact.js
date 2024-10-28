/* Functions specifically for the contact page (contact.html) */

const emptyFieldsWarning = document.getElementById("empty-fields-warning");

const firstNameInput = document.getElementById("fname-input");
const lastNameInput = document.getElementById("lname-input");
const phoneNumberInput = document.getElementById("phone-input");
const reasoningInput = document.getElementById("reasoning-input");
const messageInput = document.getElementById("message-input");

const sendBtn = document.getElementById("send-button");

// function to capitalise first letter of a string
const capitalize = (value) => String(value[0]).toUpperCase() + String(value).slice(1);

// function to get offset of element respective to the page
const getVerticalOffset = (element) => {
    let rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
};

sendBtn.addEventListener("click", 
    () => {
        
        // Array for all inputs that need an entered value
        let requiredInputFields = [
            firstNameInput, 
            lastNameInput, 
            reasoningInput, 
            messageInput
        ];

        // reset all input field styling values
        requiredInputFields.forEach(
            (inputField) => {
                inputField.style.border = "1px solid black";
            }
        )

        // hiding empty fields warning incase contact form is now viable
        emptyFieldsWarning.style.display = "none";

        // array for all required inputs that are empty 
        let emptyRequiredInputs = requiredInputFields.filter(
            (inputField) => inputField.value === ""
        ); 
            
        // ensuring no required inputs are empty
        if (emptyRequiredInputs.length === 0) {

            // storing capitalised names together, since its used in subject and body
            let fullName = `${capitalize(firstNameInput.value)} ${capitalize(lastNameInput.value)}`;

            // Subject for the automated Email
            let emailSubject = `
                Website form - 
                ${fullName} - 
                ${reasoningInput.value !== "other" ? capitalize(reasoningInput.value) : "Unknown"} Inquiry
            `;

            // Body for the automated Email.
            // Contains all the info provided by the user, in a professional structure.
            let emailBody = `
                Hi Russell,%0A
                %0A
                I am contacting you regarding ${
                    reasoningInput.value !== "other" 
                    ? `a ${reasoningInput.value}` 
                    : "<specify contact reasoning here>"
                },%0A
                %0A
                ${capitalize(messageInput.value)}%0A

                ${phoneNumberInput.value !== "" ? `%0AMy phone number: ${phoneNumberInput.value.replace("+", "%2b")}%0A` : ""}
                %0A
                Thank you in advance,%0A
                ${fullName}.
            `;

            // Create email with given subject and body, and open in a new tab
            // Use regex to prevent: more than one space at a time; and space at start of strings
            window.open(
                `mailto:plumbbusiness101@gmail.com?subject=${
                    emailSubject
                    .replace(/\s+/g, " ")
                    .replace(/^\s/, "")
                }&body=${
                    emailBody
                    .replace(/\s{2,}/g, "")
                    .replace(/^\s/, "")
                }`
                , "_blank"
            );
        } 
        
        // notify user of all empty required input fields and display warning
        else {
            emptyRequiredInputs.forEach(
                (inputField) => {
                    inputField.style.border = "1px solid #ff3131";
                }
            );

            emptyFieldsWarning.style.display = "block";

            /* scroll warning into view */

            // PC - scrolls to top of page
            if (window.matchMedia("(orientation: landscape)").matches){
                window.scroll(0, 0); 
            } 
            // Phone - scrolls to slightly above warning message
            else {
                window.scroll(0, getVerticalOffset(emptyFieldsWarning) - 75)
            }
        }
});