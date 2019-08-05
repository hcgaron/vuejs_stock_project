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
              id="quantity"
              placeholder="Quantity"
            />
              <button type="submit" class="btn btn-success mb-2 float-right">Buy</button>
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
    ...mapGetters("stocks", {
      stocks: "getStocks"
    })
  }
};
</script>

<style scoped>
.bg-light-green {
  background-color: lightgreen !important;
}
</style>
