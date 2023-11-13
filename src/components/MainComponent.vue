<template>
  <div>
    <div class="container">
      <div class="row">
        <CardComponent />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "./sons/CardComponent.vue";
export default {
  name: "MainComponent",
  components: { CardComponent },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
