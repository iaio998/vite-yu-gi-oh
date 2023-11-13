import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  endPoint: {
    firstEnd: "?num=20&offset=0",
  },
  cardList: [],
});
