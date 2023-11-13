<template>
  <div></div>
</template>

<script>
import { cards } from "./data/store";
import axios from "axios";

export default {
  name: "App",
  componets: {},
  data() {
    return {
      cards,
    };
  },
  methods: {
    getCards() {
      const url = this.cards.apiUrl;
      axios.get(url).then((response) => {
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
