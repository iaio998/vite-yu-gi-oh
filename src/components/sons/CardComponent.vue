<template>
  <div class="card my-card border-0">
    <div><img :src="image" :alt="name" /></div>
    <div class="text-center card-body bg-warning">
      <h5 class="card-title text-black">{{ name }}</h5>
      <h6 class="card-text text-success fst-italic">{{ archetype }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    image: String,
    name: String,
    archetype: String,
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}

.my-card {
  width: calc(100% / 5 - 20px);
}
</style>
