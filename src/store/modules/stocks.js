const state = {
    /*
    stocks is an array of objects of all stocks available to buy / sell
    that has the form
    {
        ticker: 'XYZ',
        name: 'companyName,
        currentPrice: someNumber
    }
    */
   stocks: [
       {
           ticker: 'BMW',
           name: 'BMW',
           price: 110.12
       },
       {
        ticker: 'Goog',
        name: 'Google',
        price: 88.14
    },
    {
        ticker: 'AAPL',
        name: 'Apple',
        price: 92.25
    },
    {
        ticker: 'TWTR',
        name: 'Twitter',
        price: 16.88
    }
   ]
}

const getters = {
    getStocks: (state) => {
        return state.stocks;
    }
    // getTickers: (state) => {
    //     return state.stocks.map(stock => stock.ticker);
    // },
    // getCompanies: (state) => {
    //     return state.stocks.map(stock => stock.name);
    // }
}

export default {
    state,
    getters
}