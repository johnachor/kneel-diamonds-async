import { appState } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") appState.currentOrder.metalId = parseInt(event.target.value);
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of appState.metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}
