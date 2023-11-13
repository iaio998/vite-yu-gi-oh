<template>
  <div class="bg-warning">
    <div class="container bg-white p-5">
      <div class="bg-dark text-white p-4 mb-2">
        <h5 class="fst-italic">We found {{ store.cardList.length }} cards</h5>
      </div>
      <div class="row justify-content-center g-3">
        <CardComponent
          v-for="(el, index) in store.cardList"
          :image="el.card_images[0].image_url"
          :name="el.name"
          :archetype="el.archetype"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "./sons/CardComponent.vue";
import { store } from "../data/store";
export default {
  name: "MainComponent",
  components: { CardComponent },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
