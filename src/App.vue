<template>
  <LoaderComponent v-if="store.flag" />
  <div v-else>
    <HeaderComponent />
    <SearchComponent @filter-archetype="filterArchetypes" />
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
      params: null,
    };
  },
  methods: {
    // getCards() {
    //   const url = this.store.apiUrl;
    //   axios.get(url, { params: this.params }).then((response) => {
    //     console.log(response.data.data);
    //     store.cardList = response.data.data;
    //     store.flag = false;
    //   });
    // },
    // getArchetypes() {
    //   const url = this.store.apiUrlArchetypes;
    //   axios.get(url).then((response) => {
    //     console.log(response.data);
    //     store.cardArchetypes = response.data;
    //     console.log(store.cardArchetypes);
    //   });
    // },
    filterArchetypes(value) {
      console.log(value);
      if (value) {
        this.params = {
          archetype: value,
        };
      } else {
        this.params = null;
      }
      this.getCards();
    },
  },
  created() {
    function getCards() {
      const url = store.apiUrl;
      return axios.get(url);
    }
    function getArchetypes() {
      const url = store.apiUrlArchetypes;
      return axios.get(url);
    }
    Promise.all([getCards(), getArchetypes()]).then(function (results) {
      store.cardList = results[0].data;
      const acct2 = results[1].data;
      console.log(store.cardList, acct2);
      store.flag = false;
    });

    // this.getCards();
    // this.getArchetypes();
  },
};
</script>

<style lang="scss" scoped></style>
