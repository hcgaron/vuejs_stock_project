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
        state.funds -= (Number(payload.price) * Number(payload.quantity))
        // we return empty so as to not push duplicate onto the array
        return;
      }
    }
    // payload should be an object matching those in portfolio array
    state.portfolio.push(payload);
    state.funds -= (Number(payload.price) * Number(payload.quantity))
  },
  checkHoldingStatus: (ticker) => {
    let currentShares = state.portfolio.find((t) => { return t.ticker == ticker }).quantity;
    if (currentShares < 1) {
      let idx = state.portfolio.findIndex((t) => { return t.ticker == ticker});
      state.portfolio.splice(idx, 1);
    }
  },
  sellStock: (state, payload) => {
    for (let holding of state.portfolio) {
      // find the stock we want to sell
      if (holding.ticker === payload.ticker) {
        let sellQuantity = Number(payload.quantity);
        let sellPrice = Number(payload.price)

        holding.quantity -= sellQuantity;
        state.funds += (sellQuantity * sellPrice);
        // if holdings are now zero, remove from our portfolio
        mutations.checkHoldingStatus(payload.ticker);
        return;
      }
    }
  }
}
const actions = {
  buyStock: (context, payload) => {
    context.commit('buyStock', payload);
  },
  sellStock: (context, payload) => {
    context.commit('sellStock', payload)
  }
}

export default {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}