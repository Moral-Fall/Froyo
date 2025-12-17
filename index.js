const allowFlavors = ("chocolate", "vanilla", "strawberry", "coffee")
const userInput = prompt ("Choose your favorite flavor(s) (comma separated): Chocolate, Vanilla, Strawberry, Coffee");
// Note: going to be adding flavorList to HTML for looks
const flavorList = userInput.split(",")
                            .map(item => item.trim().toLowerCase());
const flavorCount = {
    vanilla: 0,
    chocolate: 0,
    strawberry: 0,
    coffee: 0,
};

const logOutPut = document.getElementById("flavorResults")
if (userInput === null){
    logOutPut.textContent = "You canceled. Nothing was logged"
}

for (let flavor of flavorList) {
    console.log(flavor);

}

