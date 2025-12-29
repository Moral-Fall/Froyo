const allowedFlavors = ["Chocolate", "Vanilla", "Strawberry", "Coffee "]
const userInput = prompt ("Choose your favorite flavor(s) (comma separated): Chocolate, Vanilla, Strawberry, Coffee");
// Note: going to be adding flavorList to HTML for looks
const flavorList = userInput.split(",").map(item => item.trim().toLowerCase());

// NTS: the submit event belongs to form for JS, not the button itself
const form = document.getElementById("flavorBox")
// this is logging user input from HTML
const logOutPut = document.getElementById("ticketOutBox")
// NTS: This function is adding the Event(submit) to the form
form.addEventListener("submit", function(event)){
// NTS: This function is to stop the page from refreshing
    event.preventDefault();
}
if (userInput === null){
    logOutPut.textContent = "Order canceled. Nothing was logged";
} else {
    const flavorList = userInput
        .split(",")
        .map(item => item.trim().toLowerCase());
}


for (let flavor of flavorList){
    if (allowedFlavors.includes(flavor));
        console.log(flavor);

}

