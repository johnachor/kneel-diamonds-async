import { appState } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") appState.currentOrder.sizeId = parseInt(event.target.value);
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = appState.sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
