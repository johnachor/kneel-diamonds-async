import { getAllData } from "./dataAccess.js"
import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML();

document.addEventListener('stateChanged', () => renderAllHTML());

getAllData().then(() => document.dispatchEvent(new CustomEvent('stateChanged')));
