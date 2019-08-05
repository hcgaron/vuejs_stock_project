const state = {
    funds: 10000,
    portfolio: [
        /*
        each item in the list shall be an object of the form
        {
            ticker: 'symbol',
            quantity: number,
            averagePrice: number
        }
        */
    ]
}

const getters = {
    getFunds: (state) => {
        let dollarFunds = state.funds.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let stringFunds = `$${dollarFunds}`
        return stringFunds;
    }
}

const mutations = {
    changeFunds: (state, payload) => {
        let newFunds = state.funds - payload.changeAmount 
    }
}

export default {
    state,
    mutations,
    // actions,
    getters    
}