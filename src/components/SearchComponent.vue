<template>
  <div class="bg-warning py-4">
    <div class="container">
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
};
</script>

<style lang="scss" scoped>
.form-select {
  width: 30% !important;
}
</style>
