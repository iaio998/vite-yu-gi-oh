<template>
  <div class="col-3">
    <div>
      <div><img :src="image" :alt="name" /></div>
      <div class="text-center py-2">
        <h5>{{ name }}</h5>
        <h6>{{ archetype }}</h6>
      </div>
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
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
