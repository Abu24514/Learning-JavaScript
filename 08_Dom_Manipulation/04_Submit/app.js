// ====== SELECTORS ======
// Select the form element
let form = document.querySelector("form");

// Select all input fields inside the form
let inputs = document.querySelectorAll("input");

// Select the container where profile cards will be added
let main = document.querySelector(".main");


// ====== EVENT LISTENER ======
// Listen for the form's submit event
form.addEventListener("submit", (evt) => {
    evt.preventDefault(); // Stop the form from refreshing the page

    /* ====== CREATE CARD STRUCTURE USING JS ====== */

    // Create main card div
    let card = document.createElement("div");
    card.classList.add("card"); // Add CSS class to style the card

    // Create profile image container
    let profile = document.createElement("div");
    profile.classList.add("profile");

    // Create image element and set 'src' from the first input field
    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);

    // Create h3 for Name (from second input)
    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;
    // Create h5 for Role (from third input)
    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;

    // Create paragraph for Description (from fourth input)
    let p = document.createElement("p");
    p.textContent = inputs[3].value;

    // ====== CREATE DELETE BUTTON ======
    let dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete"; // Button label
    dltBtn.classList.add("dlt-Btn"); // For styling

    // When delete button is clicked → remove the entire card
    dltBtn.addEventListener("click", () => {
        card.remove();
    });

    /* ====== APPEND ELEMENTS IN CORRECT ORDER ====== */
    profile.appendChild(img);      // img inside profile div
    card.appendChild(profile);     // profile inside card
    card.appendChild(h3);          // Name
    card.appendChild(h5);          // Role
    card.appendChild(p);           // Description
    card.appendChild(dltBtn);      // Delete button
    main.appendChild(card);        // Card added to main container

    // ====== CLEAR INPUT FIELDS AFTER SUBMIT ======
    inputs.forEach((inp) => {
        if (inp.type !== "submit") { // Avoid clearing submit button text
            inp.value = '';
        }
    });

});
