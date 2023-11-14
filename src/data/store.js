import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  apiUrlArchetypes: "https://db.ygoprodeck.com/api/v7/archetypes.php",
  endPoint: {
    firstEnd: "?num=20&offset=0",
  },
  cardList: [],
  cardArchetypes: [],
  flag: true,
});
