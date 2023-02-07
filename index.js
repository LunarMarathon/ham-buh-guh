import { menuArray } from "./data.js"

const menuContainer = document.getElementById("menuContainer")
const chosenItemsContainer = document.getElementById("chosenItemsContainer")
const orderContainer = document.getElementById("orderContainer")

let menuString = ""
let chosenItemsArray = []
let chosenItemsString = ""
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
        <button class="addBtn" data-add="${item.name}">+</button>
    </div>
    <hr>`

}
menuContainer.innerHTML = menuString

document.addEventListener("click", handleAddClick)

function handleAddClick(e) {
    if (e.target.dataset.add) {
        //  alert(e.target.dataset.add)
        chosenItemsArray.push(e.target.dataset.add)
        orderContainer.style.display = "block"
        render()
    }
    else if (e.target.dataset.remove) {
        // alert(e.target.dataset.remove)
        let itemIndex = chosenItemsArray.indexOf(e.target.dataset.remove)
        chosenItemsArray.splice(itemIndex, 1)
        render()
    }

}

function render() {
    chosenItemsString = ""
    sum = 0
    for (let item of menuArray) {
        let itemArray = chosenItemsArray.filter(chosen => chosen === item.name)
        sum += item.price * itemArray.length
        console.log(sum)
        if (itemArray.length)
            chosenItemsString += `<div>${itemArray.length} ${item.name} <button class="removeBtn" data-remove=${item.name}>remove</button>$${item.price * itemArray.length}</div>`
    }
    chosenItemsContainer.innerHTML = chosenItemsString + `<div>Total: $${sum}</div>`
    
    if (!sum)
        orderContainer.style.display = "none"
}