import { appState } from "./database.js"

const buildOrderListItem = (order) => {
    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
    </li>`
}

export const Orders = () => {


    let html = "<ul>"

    const listItems = appState.orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
