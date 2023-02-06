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

document.addEventListener("click", handleAddClick)

function handleAddClick(e) {
    console.log(e.target.id)
    if (document.getElementById(e.target.id).className === "addBtn") {
        // alert("withinAdd")
        // alert(e.target.id)
        // console.log(chosenItemsContainer.style.display)
        // console.log(chosenItemsContainer)
        chosenItemsArray.push(e.target.id)
        chosenItemsContainer.style.display = "block"
        render()
    }
    else if (document.getElementById(e.target.id).className === "removeBtn"){
        // alert("withinRemove")
        //Doesn't work coz the id is remove-itemName, can't use that in the array 
        //Could probably remove that using some string manipulation but will try with data attributes instead
        console.log(chosenItemsArray, e.target.id)
        const index = chosenItemsArray.indexOf(e.target.id)
        chosenItemsArray.splice(index, 1)
        console.log(chosenItemsArray)
        render()
    }
}

function render() {
    chosenItemsString = ""
    sum = 0
    // console.log("hello")
    for (let item of menuArray) {
        // console.log(item.name)
        let itemArray = chosenItemsArray.filter(chosen => chosen === item.name)
        // console.log(itemArray.length)
        sum += item.price * itemArray.length
        console.log(sum)
        if (itemArray.length)
            chosenItemsString += `<div>${itemArray.length} ${item.name} <button class="removeBtn" id="remove-${item.name}">remove</button>$${item.price * itemArray.length}</div>`

    }
    for (let item of chosenItemsArray) {
    }
    chosenItemsContainer.innerHTML = chosenItemsString + `<div>Total: $${sum}</div>`
}

// object, menu items: count
// item is pushed into array, for of - filter, length 

// --extras: using indexOf and splice instead, maybe there's something called join but former seems better
// let itemArray = chosenItemsArray.filter(chosen => chosen === e.target.id)
// let itemRemainingArray = chosenItemsArray.filter(chosen => chosen !== e.target.id)
// itemArray.pop()