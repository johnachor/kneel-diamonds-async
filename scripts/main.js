import { getMetals, getOrders, getSizes, getStyles } from "./database.js"
import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML();

document.addEventListener('stateChanged', () => renderAllHTML());
