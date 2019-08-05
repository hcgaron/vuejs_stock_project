<template>
  <div class="jumbotron pb-4">
    <h1 class="display-5 text-left font-weight-bold">Trade or view your portfolio</h1>
    <p class="text-left">You may Save &amp; Load your Data.</p>
    <p class="text-left">Click on 'End Day' to begin a new Day!</p>
    <hr class="my-4" />
    <p class="lead font-weight-bold text-left">Your Funds: {{ fundsAvailable }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
      ...mapGetters('userFunds', {
        fundsAvailable: 'getFunds'
      })
    }
}
</script>
