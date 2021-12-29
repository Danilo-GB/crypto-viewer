<template>
  <div v-if="coins.length > 0">
    <b-container fluid="md" class="AssetsTable">
      <table class="table table-hover center-block">
        <thead>
          <tr>
            <th @click="sort('rank')">
              Rank
              <b-icon-arrow-up
                v-show="currentSort == 'rank' && currentSortDir == 'asc'"
              />
              <b-icon-arrow-down
                v-show="currentSort == 'rank' && currentSortDir == 'desc'"
              />
            </th>
            <th @click="sort('name')">
              Name
              <b-icon-arrow-up
                v-show="currentSort == 'name' && currentSortDir == 'asc'"
              />
              <b-icon-arrow-down
                v-show="currentSort == 'name' && currentSortDir == 'desc'"
              />
            </th>
            <th @click="sort('price_usd')">
              Price
              <b-icon-arrow-up
                v-show="currentSort == 'price_usd' && currentSortDir == 'asc'"
              />
              <b-icon-arrow-down
                v-show="currentSort == 'price_usd' && currentSortDir == 'desc'"
              />
            </th>
            <th @click="sort('market_cap_usd')">
              Market Cap
              <b-icon-arrow-up
                v-show="
                  currentSort == 'market_cap_usd' && currentSortDir == 'asc'
                "
              />
              <b-icon-arrow-down
                v-show="
                  currentSort == 'market_cap_usd' && currentSortDir == 'desc'
                "
              />
            </th>
            <th @click="sort('csupply')">
              Supply
              <b-icon-arrow-up
                v-show="currentSort == 'csupply' && currentSortDir == 'asc'"
              />
              <b-icon-arrow-down
                v-show="currentSort == 'csupply' && currentSortDir == 'desc'"
              />
            </th>
            <th @click="sort('volume24a')">
              Volume(24Hr)
              <b-icon-arrow-up
                v-show="currentSort == 'volume24a' && currentSortDir == 'asc'"
              />
              <b-icon-arrow-down
                v-show="currentSort == 'volume24a' && currentSortDir == 'desc'"
              />
            </th>
            <th @click="sort('percent_change_24h')">
              Change(24Hr)
              <b-icon-arrow-up
                v-show="
                  currentSort == 'percent_change_24h' && currentSortDir == 'asc'
                "
              />
              <b-icon-arrow-down
                v-show="
                  currentSort == 'percent_change_24h' &&
                    currentSortDir == 'desc'
                "
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="c in sortedCoins"
            :key="c.id"
            :class="
              c.msupply == 1 ? 'flash-green' : c.msupply == 0 ? 'flash-red' : ''
            "
          >
            <td>{{ c.rank }}</td>
            <td>
              <img
                :src="`${coinIcon}/${c.symbol.toLowerCase()}@2x.png`"
                width="30"
              />
              <router-link :to="{ name: 'coindetail', params: { id: c.id } }">
                {{ c.name }}
              </router-link>
            </td>
            <td>${{ c.price_usd }}</td>
            <td>${{ c.market_cap_usd | qty }}</td>
            <td>{{ c.csupply | qty }}</td>
            <td>${{ c.volume24a | qty }}</td>
            <td
              :class="
                c.percent_change_24h.includes('-')
                  ? 'text-danger'
                  : 'text-success'
              "
            >
              {{ c.percent_change_24h | qty }}%
            </td>
          </tr>
        </tbody>
      </table>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "CvAssetsTable",
  props: {
    coins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      coinIcon: "https://assets.coincap.io/assets/icons",
      currentSort: "rank",
      currentSortDir: "asc"
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
    //return coins list sorted
    sortedCoins: function() {
      return this.coins.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    }
  },
  watch: {
    //use msupply field (unused) to append update status
    sortedCoins(newVal, oldVal) {
      for (let index = 0; index < Object.keys(newVal).length; index++) {
        this.sortedCoins[index].msupply =
          newVal[index].price_usd > oldVal[index].price_usd
            ? "1"
            : newVal[index].price_usd < oldVal[index].price_usd
            ? "0"
            : "no-changes";
      }
    }
  }
};
</script>

<style scoped>
.flash-green {
  background-color: rgba(24, 198, 131, 0.19);
}
.flash-red {
  background-color: rgba(244, 67, 54, 0.19);
}
.AssetsTable {
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
