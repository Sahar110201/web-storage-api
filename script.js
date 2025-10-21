const displayName = document.getElementById("display-name");
const nameInput = document.getElementById("username");
const saveButton = document.getElementById("save-btn");
const clearButton = document.getElementById("clear-btn");

window.addEventListener("DOMContentLoaded", nameSaved);

function nameSaved() {
if (typeof(Storage) !== "undefined") {
const nameSaved = localStorage.getItem("username");
if (nameSaved) {
console.log(`Name: ${nameSaved}`);
displayName.textContent = `Your name "${nameSaved}" was saved successfully!`;
} else {
    console.log("Please enter your name first!");
    displayName.textContent = "Please enter your name first to save!";
}}}

function saveName() {
    let name = nameInput.value.trim();
    if (name !== "") {
    localStorage.setItem("username",name);
    console.log(`Saved: ${name}`);
    displayName.textContent = `Your name "${name}" was saved successfully!`;
    } else {
        console.log("Please enter your name first");
        displayName.textContent = "Please enter your name first to save!";
}}    
saveButton.addEventListener("click", saveName);


function clearName() {
localStorage.removeItem("username");
nameInput.value = "";
console.log("No name saved!")
displayName.textContent = "No name was saved!";
}
clearButton.addEventListener("click", clearName);

//for this assignment, I learned how to make a web storage API and store or save values within the browser.
//At first, it was a bit complicated because I didn't know how to start, I watched the previous lecture and also looked at w3School and MDM for more clarity.
//I also made use of If and Else statments to add conditions for different inputs such as save and clear button when they are clicked.
//This showed me how values are saved on browser when we enter them on a website such as a contact form or shipping information. I can't wait to make a more proper form with different inputs.  