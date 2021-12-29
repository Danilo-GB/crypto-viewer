<template>
  <div class="list">
    <div class="statistic">
      <div class="label">
        Market Cap
      </div>
      <div class="value">${{ stats.total_mcap | qty }}</div>
    </div>
    <div class="statistic">
      <div class="label">
        Exchange Vol
      </div>
      <div class="value">${{ stats.total_volume | qty }}</div>
    </div>
    <div class="statistic">
      <div class="label">
        Coins
      </div>
      <div class="value">
        {{ stats.coins_count | qty }}
      </div>
    </div>
    <div class="statistic">
      <div class="label">
        avg change
      </div>
      <div class="value">{{ stats.avg_change_percent }}%</div>
    </div>
    <div class="statistic">
      <div class="label">
        Markets
      </div>
      <div class="value">
        {{ stats.active_markets | qty }}
      </div>
    </div>
    <div class="statistic">
      <div class="label">
        BTC Dom Index
      </div>
      <div class="value">{{ stats.btc_d }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CvStatsList",
  props: {
    stats: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped>
* {
  font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif;
}
.list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 50px 50px;
  padding: 28px 0 7em 0;
  margin-bottom: -6em;
  background: rgb(255, 255, 255)
    linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) repeat
    scroll;
}
.statistics {
  display: inline-flex;
  margin: 10px;
  padding: 10px;
}
.statistics,
.label,
.value {
  text-align: center;
  color: #fff;
  font-size: 1.1em;
  font-weight: 500;
}
</style>
