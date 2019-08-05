const state = {
  funds: 10000,
  portfolio: [
    /*
    each item in the list shall be an object of the form
    {
        ticker: 'symbol',
        name: 'companyName',
        quantity: number,
        price: number
    }
    */
    { //fake entry for testing
      ticker: 'AAPL',
      name: 'Apple',
      quantity: 200,
      price: 112
    }
  ]
}

const getters = {
  getFunds: (state) => {
    let dollarFunds = state.funds.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let stringFunds = `$${dollarFunds}`
    return stringFunds;
  },
  getPortfolio: (state) => {
    return state.portfolio;
  }
}

const mutations = {
  changeFunds: (state, payload) => {
    state.funds -= payload.changeAmount;
  },
  buyStock: (state, payload) => {
    for (let holding of state.portfolio) {
      // if we already had the stock in portfolio
      if (holding.ticker === payload.ticker) {
        let oldQuantity = Number(holding.quantity);
        let newQuantity = Number(holding.quantity) + Number(payload.quantity);
        // new average price
        let newAverage = (((oldQuantity) * Number((holding.price))) +
          ((Number(payload.quantity)) * (Number(payload.price)))) /
          (newQuantity);

        holding.quantity = newQuantity;
        holding.price = newAverage;
        // we return empty so as to not push duplicate onto the array
        return;
      }
    }
    // payload should be an object matching those in portfolio array
    state.portfolio.push(payload);
  }
}
const actions = {
  buyStock: (context, payload) => {
    context.commit('buyStock', payload);
  }
}

export default {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}