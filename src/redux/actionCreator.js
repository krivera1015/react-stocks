
//this defines each action and what will happen on each action!
export const initStocks = (stocks) => {
    return {
        type: "INITIALIZE_STATE",
        payload: stocks
    }
}

export const buyStock = (stock) => {
    return {
        type: "BUY_STOCK",
        payload: stock
    }
}