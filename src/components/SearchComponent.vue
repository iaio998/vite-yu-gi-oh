<template>
  <div class="bg-warning py-4">
    <div class="container">
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="filterValue"
        @change="search"
      >
        <option value="">All cards</option>
        <option
          v-for="(el, index) in store.cardArchetypes"
          :value="el.archetype_name"
        >
          {{ el.archetype_name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
export default {
  name: "SearchComponent",
  data() {
    return {
      store,
      filterValue: "",
    };
  },
  methods: {
    search() {
      this.$emit("filterArchetype", this.filterValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-select {
  width: 30% !important;
}
</style>
