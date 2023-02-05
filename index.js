import { menuArray } from "./data.js"

const menuContainer = document.getElementById("menuContainer")
const chosenItemsContainer = document.getElementById("chosenItemsContainer")

let menuString = ""
let chosenItemsArray = []
let chosenItemsString = ""
let quantity = {}
let sum = 0

for (let item of menuArray) {
    menuString += `
    <div class="itemBlock">
        <div class="emoji">${item.emoji}</div>
        <div class="itemTextDiv">
            <h3>${item.name}</h3>
            <p>${item.ingredients}</p>
            <h4>$${item.price}</h4>
        </div>
        <button class="addBtn" id="${item.name}">+</button>
    </div>
    <hr>`

}
menuContainer.innerHTML = menuString

menuContainer.addEventListener("click", handleAddClick)

function handleAddClick(e) {
    if (document.getElementById(e.target.id).className === "addBtn") {
        // alert(e.target.id)
        chosenItemsString = ""
        sum = 0
        // console.log(chosenItemsContainer.style.display)
        // console.log(chosenItemsContainer)
        chosenItemsArray.push(e.target.id)
        chosenItemsContainer.style.display = "block"
        for (let item of menuArray) {
            // console.log(item.name)
            let itemArray = chosenItemsArray.filter(chosen => chosen === item.name)
            // console.log(itemArray.length)
            sum += item.price * itemArray.length
            console.log(sum)
            if (itemArray.length)
                chosenItemsString += `<div>${itemArray.length} ${item.name} <button class="removeBtn">remove</button>$${item.price * itemArray.length}</div>`

        }
        for (let item of chosenItemsArray) {
        }
        chosenItemsContainer.innerHTML = chosenItemsString + `<div>Total: $${sum}</div>`
    }
}

// object, menu items: count
// item is pushed into array, for of - filter, length 
