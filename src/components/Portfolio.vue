<template>
  <div v-if="portfolio.length === 0">
    <h1>Your Portfolio is empty</h1>
  </div>
  <div v-else class="row">
    <div v-for="(holding, index) in portfolio" :key="index" class="col-sm-6 mb-5">
      <div class="card">
        <div class="card-header text-left bg-light-blue">
          <h4 class="font-weight-bold d-inline-block mr-2">{{ holding.name }}</h4>
          <span>
            (Avg Price: {{ holding.price }} | Quantity: {{ holding.quantity }} |
            Current Price: {{ (stocks.find((item)=>{ return item.name == holding.name})).price }})
          </span>
        </div>
        <div class="card-body">
          <form class="form-inline justify-content-between">
            <label class="sr-only" for="quantity">Quantity to sell</label>
            <input
              type="text"
              class="form-control mb-2 mr-sm-2"
              :id="`${holding.name}Quantity`"
              placeholder="Quantity"
            />
            <button
              type="submit"
              class="btn btn-danger mb-2 float-right"
              @click.prevent="prepareSale({ticker: holding.ticker, name: holding.name})"
            >Sell</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("userFunds", {
      portfolio: "getPortfolio"
    }),
    ...mapGetters("stocks", {
      stocks: "getStocks"
    })
  },
  methods: {
    ...mapActions("userFunds", {
      sellStock: "sellStock"
    }),
    prepareSale(sellOrder) {
      let sellBox = document.getElementById(`${sellOrder.name}Quantity`);
      let numShares = Number(sellBox.value);
      // find the holding in our portfolio
      let holding = this.portfolio.find(company => {
        return company.ticker == sellOrder.ticker;
      });
      if (numShares > holding.quantity) {
        alert("You do not have enough shares to sell!");
        return;
      }
      let sellPrice = Number(this.stocks.find((t) => {return (t.name == sellOrder.name)}).price)
      let saleTicket = {
        ticker: sellOrder.ticker,
        name: sellOrder.name,
        quantity: numShares,
        price: sellPrice
      };
      this.sellStock(saleTicket);
    }
  }
};
</script>

<style scoped>
.bg-light-blue {
  background-color: lightblue;
}
</style>
