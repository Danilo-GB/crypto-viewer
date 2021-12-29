const url = "https://coinlore-cryptocurrency.p.rapidapi.com/api";

function getCoins(start, end) {
  return fetch(
    `https://coinlore-cryptocurrency.p.rapidapi.com/api/tickers/?start=${start}&limit=${end}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coinlore-cryptocurrency.p.rapidapi.com",
        "x-rapidapi-key": "2bb11848demsha4bf7d07c97be5fp158204jsna5d9b3c4ed0f"
      }
    }
  )
    .then(response => response.json())
    .then(response => response.data);
}

function getStats() {
  return fetch(`${url}/global/`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "coinlore-cryptocurrency.p.rapidapi.com",
      "x-rapidapi-key": "2bb11848demsha4bf7d07c97be5fp158204jsna5d9b3c4ed0f"
    }
  }).then(response => response.json());
}

function getCoin(id) {
  return fetch(`${url}/ticker/?id=${id}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "coinlore-cryptocurrency.p.rapidapi.com",
      "x-rapidapi-key": "2bb11848demsha4bf7d07c97be5fp158204jsna5d9b3c4ed0f"
    }
  }).then(response => response.json());
}

function getMarkets(id) {
  return fetch(`${url}/coin/markets/?id=${id}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "coinlore-cryptocurrency.p.rapidapi.com",
      "x-rapidapi-key": "2bb11848demsha4bf7d07c97be5fp158204jsna5d9b3c4ed0f"
    }
  }).then(response => response.json());
}

export default {
  getCoins,
  getStats,
  getCoin,
  getMarkets
};
