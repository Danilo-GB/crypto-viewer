<template>
  <div>
    <div class="home" v-if="coins.length > 0">
      <cv-stats-list :stats="stats" />
      <cv-assets-table :coins="coins" />
      <b-button @click="viewMoreCoins" pill class="MoreButton">
        <span v-show="!isLoading">View More</span>
        <b-spinner v-show="isLoading" small></b-spinner>
      </b-button>
    </div>
    <cv-loader v-else />
  </div>
</template>

<script>
import CoinLoreAPI from "../services/CoinLoreAPI.js";
import CvStatsList from "../components/home/CvStatsList.vue";
import CvAssetsTable from "../components/home/CvAssetsTable.vue";
import CvLoader from "../components/layout/loader.vue";
export default {
  components: {
    CvStatsList,
    CvAssetsTable,
    CvLoader
  },
  data() {
    return {
      coins: [],
      stats: {},
      startQuery: 0,
      endQuery: 10,
      isLoading: false
    };
  },
  methods: {
    getCoins() {
      setInterval(() => {
        CoinLoreAPI.getCoins(this.startQuery, this.endQuery).then(
          coins => (this.coins = coins)
        );
        this.isLoading = false;
      }, 1000);
    },
    viewMoreCoins() {
      this.isLoading = true;
      this.endQuery += 10;
    },
    getStats() {
      CoinLoreAPI.getStats().then(stats => (this.stats = stats[0]));
    }
  },
  created() {
    this.getCoins();
    this.getStats();
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.MoreButton {
  min-width: 10%;
  font-weight: 600;
  border-radius: 10em;
  border: 1px solid rgb(24, 198, 131);
  padding: 0.4em;
  color: #fff;
  align-self: center;
  background: rgb(24, 198, 131) none repeat scroll 0% 0% !important;
  transition: transform 0.2s ease 0s;
  box-shadow: 0px 0px 10px 0px rgba(24, 198, 131, 0.5);
  margin: 1em 0;
}
</style>
