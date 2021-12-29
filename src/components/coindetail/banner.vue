<template>
  <div class="list">
    <div class="rank-banner">
      <div class="flag">
        <div class="top-flag"></div>
        <div>{{ coin.rank }}</div>
        <div class="label">RANK</div>
      </div>
    </div>
    <div class="main-data">
      <div>{{ coin.name }} ({{ coin.symbol }})</div>
      <div>
        ${{ coin.price_usd | qty }}
        <span
          :class="
            coin.percent_change_24h.includes('-') ? 'down-change' : 'up-change'
          "
        >
          {{ coin.percent_change_24h }}%
          <b-icon-caret-down-fill
            v-if="coin.percent_change_24h.includes('-')"
          />
          <b-icon-caret-up-fill v-else />
        </span>
      </div>
    </div>
    <div class="extra-data">
      <div class="label">Market Cap</div>
      <div class="description">${{ coin.market_cap_usd | qty }}</div>
    </div>
    <div class="extra-data">
      <div class="label">Volume (24Hr)</div>
      <div class="description">${{ coin.volume24 | qty }}</div>
    </div>
    <div class="extra-data">
      <div class="label">Supply</div>
      <div class="description">{{ coin.tsupply | qty }} {{ coin.symbol }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coin: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 50px 10px;
  padding: 3em 0 3em 0;
  background: rgb(255, 255, 255)
    linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) repeat
    scroll;
  text-align: left;
  color: #fff;
}
@media (max-width: 1039px) {
  .list {
    text-align: center;
  }
}
.rank-banner {
  flex-grow: 1;
}
.flag {
  background: #18c683;
  margin: 0 auto;
  width: 60px;
  height: 100px;
  border-radius: 5px 5px 20px 20px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
}
.top-flag {
  background: #18c683;
  margin-bottom: 10px;
  width: 80px;
  height: 10px;
  border-radius: 20px;
  transform: translateX(-10px);
}
.label {
  font-size: 0.8rem;
  font-weight: 500;
}
.description {
  font-size: 1.5rem;
  font-weight: 600;
}
.main-data {
  flex-grow: 3;
  font-size: 1.5rem;
  font-weight: 700;
}
.extra-data {
  flex-grow: 1;
}
.list > div {
  width: 200px;
}
.down-change {
  color: #ef9a9a;
}
.up-change {
  color: #18c683;
}
.up-change,
.down-change {
  font-size: 1.1rem;
  font-weight: 500;
}
</style>
