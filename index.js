const flavorList = ["chocolate", "vanilla", "strawberry", "coffee"]
const allowedFlavors = ["chocolate", "vanilla", "strawberry", "coffee"]
let flavorCount = 0

function orderCount() {
for ( let flavor of flavorList) {
    if (allowedFlavors.includes(flavor)) {
        flavorCount[flavor] = (flavorCount[flavor] || 0 ) + 1; 
        }      
 return flavorCount;
}
   
}

function storedResults() {
    if (userInput === null) {
        logOutPut.textContent = "Nothing logged. Order cancled" 
    } else {
        return flavorList = userInput
                            .split(",")
                            .map(item => item.trim().toLowerCase());
    }
}
 console.log(flavorList)


const app = document.getElementById("app")

let welcome = document.createElement("div");
welcome.id = "welcome"
let h1 = document.createElement("h1")
h1.textContent = "Welcome to the Baddie Froyo Shop!"
let flavorBox = document.createElement("div")
flavorBox.id = "flavorbox"
let h2 = document.createElement("h2")
let ticketOutBox = document.createElement("form")
ticketOutBox.id = "ticketOutBox"
let orderInput = document.createElement("textarea")
orderInput.id = "orderInput"
let label = document.createElement("label")
label.textContent = "Submit Your Order"
let textarea = document.createElement("textarea")
textarea.id = "orderInput"
letbutton.textContent = "Submit"
let orderOutPut = document.createElement("pre")
orderOutPut = "orderOutPut"

document.body.appendChild(welcome);
document.body.appendChild(flavorBox);
document.body.appendChild(logOutPut);
document.body.appendChild(ticketOutBox);
document.body.appendChild(orderInput);
document.body.appendChild(orderOutPut); 

const logForm = document.getElementById("ticketOutBox");
const logInput = document.getElementById("orderInput");
const logOutPut = document.getElementById("orderOutPut");
 logForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const userInput = logInput.value.trim();
 }) 


 

// // // NTS: the submit event belongs to form for JS, not the button itself
// const logForm = document.getElementById("ticketOutBox");
// // // NTS: this is logging user input from HTML
// const logInput = document.getElementById("orderInput");
// // // NTS: this is transfer the input to output
// const logOutPut = document.getElementById("orderOutPut");
// // // NTS: This function is adding the Event(submit) to the form
// logForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     // this is grabbing from the textarea in HTML
    
//     // const userInput = logInput.value.trim();

// if (userInput === null){
//     // textContent: grabs from HTML input
//     logOutPut.textContent = "Order canceled. Nothing was logged"; 
// } else {
//     return flavorList = userInput
//         .split(",") 
//         .map(item => item.trim().toLowerCase());
// }
// });
