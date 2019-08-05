<template>
  <div v-if="portfolio.length === 0">
    <h1>Your Portfolio is empty</h1>
  </div>
  <div v-else class="row">
    <div v-for="(holding, index) in portfolio" :key="index" class="col-sm-6 mb-5">
      <div class="card">
        <div class="card-header text-left bg-light-blue">
          <h4 class="font-weight-bold d-inline-block mr-2">{{ holding.name }}</h4>
          <span>(Price: {{ holding.price }} | Quantity: {{ holding.quantity }})</span>
        </div>
        <div class="card-body">
          <form class="form-inline justify-content-between">
            <label class="sr-only" for="quantity">Quantity to sell</label>
            <input
              type="text"
              class="form-control mb-2 mr-sm-2"
              id="quantity"
              placeholder="Quantity"
            />
            <button type="submit" class="btn btn-danger mb-2 float-right">Sell</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("userFunds", {
      portfolio: "getPortfolio"
    }),
  }
};
</script>

<style scoped>
.bg-light-blue {
  background-color: lightblue;
}
</style>
