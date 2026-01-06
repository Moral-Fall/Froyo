const allowedFlavors = ["chocolate", "vanilla", "strawberry", "coffee"]
const flavorCount = {
    chocolate: 0,
    vanilla: 0,
    strawberry: 0,
    coffee: 0,
}
const userInput = prompt ("Choose your favorite flavor(s) (comma separated): Chocolate, Vanilla, Strawberry, Coffee");

// // NTS: the submit event belongs to form for JS, not the button itself
const logForm = document.getElementById("ticketOutBox");
// // NTS: this is logging user input from HTML
const logInput = document.getElementById("orderInput");
// // NTS: this is transfer the input to output
const logOutPut = document.getElementById("orderOutPut");
// // NTS: This function is adding the Event(submit) to the form
logForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // // NTS: This function is to stop the page from refreshing^
});
if (userInput === null){
    // textContent: grabs from HTML input
    logOutPut.textContent = "Order canceled. Nothing was logged"; 
} else {
    const flavorList = userInput
        .split(",")
        .map(item => item.trim().toLowerCase());
}


for (let flavor of flavorList){
    if (allowedFlavors.includes(flavor));{
        flavorCount[flavor] += 1;
        console.log(flavor);
    }
}

