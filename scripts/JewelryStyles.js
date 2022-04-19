import { appState } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") appState.currentOrder.styleId = parseInt(event.target.value);
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = appState.styles.map(style => `
        <li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>
    `
    )


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}
