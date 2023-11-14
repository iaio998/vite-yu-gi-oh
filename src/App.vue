<template>
  <LoaderComponent v-if="store.flag" />
  <div v-else>
    <HeaderComponent />
    <SearchComponent />
    <MainComponent />
  </div>
</template>

<script>
import { store } from "./data/store";
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import SearchComponent from "./components/SearchComponent.vue";
import LoaderComponent from "./components/sons/LoaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    SearchComponent,
    LoaderComponent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getCards() {
      const url = this.store.apiUrl;
      axios.get(url + store.endPoint.firstEnd).then((response) => {
        console.log(response.data.data);
        store.cardList = response.data.data;
        store.flag = false;
      });
    },
    getArchetypes() {
      const url = this.store.apiUrlArchetypes;
      axios.get(url).then((response) => {
        console.log(response.data);
        store.cardArchetypes = response.data;
        console.log(store.cardArchetypes);
      });
    },
  },
  created() {
    this.getCards();
    this.getArchetypes();
  },
};
</script>

<style lang="scss" scoped></style>
