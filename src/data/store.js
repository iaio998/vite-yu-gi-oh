import { reactive } from "vue";

export const cards = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0",
  endPoint: {},
  cardList: [],
});
