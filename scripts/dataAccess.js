const API_URL = 'http://localhost:8080/',
    STYLES_ENDPOINT = 'styles',
    SIZES_ENDPOINT = 'sizes',
    METALS_ENDPOINT = 'metals',
    CUSTOM_ORDERS_ENDPOINT = 'customOrders',
    DEFAULT_ORDER = {
        metalId: 0,
        sizeId: 0,
        styleId: 0
    };

const orderToPostBody = (order) => ({
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
});

export const appState = {
    styles: [],
    sizes: [],
    metals: [],
    orders: [],
    currentOrder: { ...DEFAULT_ORDER }
};

const responseToJson = (res) => res.json();

export const setStyles = (styles = []) => { appState.styles = styles },
    setSizes = (sizes = []) => { appState.sizes = sizes },
    setMetals = (metals = []) => { appState.metals = metals },
    setOrders = (orders = []) => { appState.orders = orders };

export const getStyles = () => fetch(API_URL + STYLES_ENDPOINT).then(responseToJson).then(setStyles),
    getSizes = () => fetch(API_URL + SIZES_ENDPOINT).then(responseToJson).then(setSizes),
    getOrders = () => fetch(API_URL + CUSTOM_ORDERS_ENDPOINT).then(responseToJson).then(setOrders),
    getMetals = () => fetch(API_URL + METALS_ENDPOINT).then(responseToJson).then(setMetals);

export const getAllData = () => Promise.all([getMetals(), getOrders(), getSizes(), getStyles()]);

export const postOrder = (order) => fetch(
    API_URL + CUSTOM_ORDERS_ENDPOINT,
    orderToPostBody(order)
).then(() => {
    appState.currentOrder = { ...DEFAULT_ORDER };
    getOrders().then(() => document.dispatchEvent(new CustomEvent('stateChanged')));
});
