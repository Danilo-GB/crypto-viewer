<template>
  <div v-if="markets.length > 0">
    <cv-banner-detail :coin="coin" />
    <cv-market-list :markets="markets" />
  </div>
  <cv-loader v-else />
</template>

<script>
import CoinLoreAPI from "../services/CoinLoreAPI.js";
import CvBannerDetail from "../components/coindetail/banner.vue";
import CvMarketList from "../components/coindetail/marketList.vue";
import CvLoader from "../components/layout/loader.vue";
export default {
  name: "CoinDetail",
  components: { CvBannerDetail, CvMarketList, CvLoader },
  data() {
    return {
      coin: {},
      markets: []
    };
  },
  methods: {
    getCoin() {
      const id = this.$route.params.id;
      CoinLoreAPI.getCoin(id).then(coin => (this.coin = coin[0]));
      CoinLoreAPI.getMarkets(id).then(markets => (this.markets = markets));
    }
  },

  created() {
    this.getCoin();
    this.getMarkets();
  }
};
</script>

<style></style>
