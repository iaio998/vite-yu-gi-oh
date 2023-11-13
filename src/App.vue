<template>
  <div></div>
</template>

<script>
import { store } from "./data/store";
import axios from "axios";

export default {
  name: "App",
  componets: {},
  data() {
    return {
      store,
    };
  },
  methods: {
    getCards() {
      // const url = this.store.apiUrl;
      axios
        .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0")
        .then((response) => {
          console.log(response.data);
          // store.characterList = response.data.results;
        });
    },
    created() {
      this.getCards();
    },
  },
};
</script>

<style lang="scss" scoped></style>
