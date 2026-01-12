const allowedFlavors = ["chocolate", "vanilla", "strawberry", "coffee"]
const flavorCount = {
    chocolate: 0,
    vanilla: 0,
    strawberry: 0,
    coffee: 0,
}
// using the OR logic since this makes more sense to me. Hope that is okay :)
flavorCount[flavors] = (flavorCount[flavors] || 0 ) + 1

// // NTS: the submit event belongs to form for JS, not the button itself
const logForm = document.getElementById("ticketOutBox");
// // NTS: this is logging user input from HTML
const logInput = document.getElementById("orderInput");
// // NTS: this is transfer the input to output
const logOutPut = document.getElementById("orderOutPut");
// // NTS: This function is adding the Event(submit) to the form
logForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // this is grabbing from the textarea in HTML
const userInput = logInput.value.trim();
if (userInput === null){
    // textContent: grabs from HTML input
    logOutPut.textContent = "Order canceled. Nothing was logged"; 
} else {
    const flavorList = userInput
        .split(",") 
        .map(item => item.trim().toLowerCase());
}
});

