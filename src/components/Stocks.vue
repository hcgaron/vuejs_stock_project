<template>
  <div class="row">
    <div v-for="(stock, index) in stocks" :key="index" class="col-sm-6 mb-5">
      <div class="card">
        <div class="card-header bg-light-green text-left">
          <h4 class="font-weight-bold d-inline-block mr-2">{{ stock.name }}</h4>
          <span>(Price: {{ stock.price }})</span>
        </div>
        <div class="card-body">
          <form class="form-inline justify-content-between">
            <label class="sr-only" for="quantity">Quantity to buy</label>
            <input
              type="text"
              class="form-control mb-2 mr-sm-2"
              :id="`${stock.name}Quantity`"
              placeholder="Quantity"
            />
            <button
              type="submit"
              class="btn btn-success mb-2 float-right"
              @click.prevent="preparePurchase({ticker: stock.ticker, name: stock.name, price: stock.price}, $event)"
            >Buy</button>
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
  data() {
    return {
      // quantity:
    };
  },
  computed: {
    ...mapGetters("stocks", {
      stocks: "getStocks"
    })
  },
  methods: {
    ...mapActions("userFunds", {
      buyStock: "buyStock"
    }),
    preparePurchase(purchaseOrder, event) {
      let purchaseBox = document.getElementById(`${purchaseOrder.name}Quantity`);
      let numShares = purchaseBox.value;
      
      // do nothing if no quantity was entered
      if (numShares === '') {
        return;
      }

      // console.log(numShares);
      let purchaseDetails = {
        ticker: purchaseOrder.ticker,
        name: purchaseOrder.name,
        quantity: numShares,
        price: purchaseOrder.price
      };
      this.buyStock(purchaseDetails);
    }
  }
};
</script>

<style scoped>
.bg-light-green {
  background-color: lightgreen !important;
}
</style>
