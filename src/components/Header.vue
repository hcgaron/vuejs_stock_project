<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-4 mb-5">
      <span class="navbar-brand" href="#">Stock Trader</span>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link to="/" tag="li" active-class="active" class="nav-item" exact>
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
          <router-link to="/portfolio/" tag="li" class="nav-item" active-class="active">
            <a class="nav-link" href="#">Portfolio</a>
          </router-link>
          <router-link to="/stocks/" tag="li" class="nav-item" active-class="active">
            <a class="nav-link" href="#">Stocks</a>
          </router-link>
        </ul>
        <!-- Right Side of NavBar -->
        <div>
          <button class="btn" @click="updateStockPrices">End Day</button>
        </div>

        <div class="dropdown">
          <!-- dropdown container is very important -->
          <a
            class="nav-link dropdown-toggle text-decoration-none text-reset"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save &amp; Load</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click="saveData">Save</a>
            <a class="dropdown-item" href="#" @click="retrieveData">Load</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item disabled" href="#">Your Data</a>
          </div>
        </div>

        <!-- right aligned in nav -->
        <span class="navbar-brand font-weight-bold">Funds: {{ funds }}</span>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("userFunds", {
      funds: "getFunds"
    }),
    ...mapState("userFunds", {
      fundState: "funds",
      portfolio: "portfolio"
    })
  },
  methods: {
    ...mapActions("stocks", {
      updateStockPrices: "updateStockPrices"
    }),
    ...mapActions("userFunds", {
      loadData: "loadData"
    }),
    saveData() {
      this.$http
        .put("", { funds: this.funds, portfolio: this.portfolio })
        .then(response => {
          console.log(response);
        });
    },
    retrieveData() {
      this.loadData();
    }
  }
};
</script>
