<template>
  <div v-if="markets.length > 0">
    <b-container fluid="md" class="MarketsTable">
      <table class="table table-hover center-block">
        <thead>
          <tr>
            <th @click="sort('name')">
              Name
              <b-icon-arrow-up
                v-show="currentSort == 'name' && currentSortDir == 'asc'"
              />
              <b-icon-arrow-down
                v-show="currentSort == 'name' && currentSortDir == 'desc'"
              />
            </th>
            <th @click="sort('base')">
              Base
              <b-icon-arrow-up
                v-show="currentSort == 'base' && currentSortDir == 'asc'"
              />
              <b-icon-arrow-down
                v-show="currentSort == 'base' && currentSortDir == 'desc'"
              />
            </th>
            <th @click="sort('quote')">
              Quote
              <b-icon-arrow-up
                v-show="currentSort == 'quote' && currentSortDir == 'asc'"
              />
              <b-icon-arrow-down
                v-show="currentSort == 'quote' && currentSortDir == 'desc'"
              />
            </th>
            <th @click="sort('price_usd')">
              Market Cap
              <b-icon-arrow-up
                v-show="currentSort == 'price_usd' && currentSortDir == 'asc'"
              />
              <b-icon-arrow-down
                v-show="currentSort == 'price_usd' && currentSortDir == 'desc'"
              />
            </th>
            <th @click="sort('volume_usd')">
              Volume USD
              <b-icon-arrow-up
                v-show="currentSort == 'volume_usd' && currentSortDir == 'asc'"
              />
              <b-icon-arrow-down
                v-show="currentSort == 'volume_usd' && currentSortDir == 'desc'"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="m in sortedMarkets" :key="m.id">
            <td>
              <a
                :href="`https://www.google.com/search?q=${m.name}`"
                target="blank"
                >{{ m.name }}</a
              >
            </td>
            <td>{{ m.base }}</td>
            <td>{{ m.quote }}</td>
            <td>${{ m.price_usd | qty }}</td>
            <td>${{ m.volume_usd | qty }}</td>
          </tr>
        </tbody>
      </table>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    markets: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentSort: "volume_usd",
      currentSortDir: "desc"
    };
  },
  methods: {
    sort: function(s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    }
  },
  computed: {
    //return markets list sorted
    sortedMarkets: function() {
      return this.markets.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    }
  }
};
</script>

<style scoped>
.MarketsTable {
  margin-top: 2em;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
}
th {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.8rem;
  font-weight: 500;
}
</style>
