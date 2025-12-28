const allowedFlavors = ["Chocolate", "Vanilla", "Strawberry", "Coffee "]
const userInput = prompt ("Choose your favorite flavor(s) (comma separated): Chocolate, Vanilla, Strawberry, Coffee");
// Note: going to be adding flavorList to HTML for looks
const flavorList = userInput.split(",").map(item => item.trim().toLowerCase());

const logOutPut = document.getElementById("ticketOutBox")
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

