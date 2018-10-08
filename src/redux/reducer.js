//this will create our store initializing our state in store
const initState = {
    stocks: [],
    portfolioStocks: [] 
}


//this is updating our store with a state and action, each action leads to something different so we 
//have case statement
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "INITIALIZE_STATE": 
            return {...state, stocks: action.payload}
        case "BUY_STOCK":
            console.log(action.payload)
            const portfolio = [...state.portfolioStocks, action.payload]
            return {...state, portfolioStocks: portfolio}
        default:
            return state
            break;
    }
}

export default reducer