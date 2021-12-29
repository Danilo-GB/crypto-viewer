import Home from "./views/home.vue";
import CoinDetail from "./views/coindetail.vue";
const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/coindetail/:id", component: CoinDetail, name: "coindetail" }
];

export default routes;
