import { menuArray } from "./data.js"

const mainContainer = document.getElementById("mainContainer")
let menuString = ""

for(let item of menuArray){
    menuString += `
    <div class="itemBlock">
        <div class="emoji">${item.emoji}</div>
        <div class="itemTextDiv">
            <h3>${item.name}</h3>
            <p>${item.ingredients}</p>
            <h4>$${item.price}</h4>
        </div>
        <button class="addBtn">+</button>
    </div>
    <hr>`

}
mainContainer.innerHTML = menuString

