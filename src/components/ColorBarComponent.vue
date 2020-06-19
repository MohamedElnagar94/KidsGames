<template>
  <!-- COLOR BAR -->
  <div class="container-fluid color-bar clearfix" :class="topFixed">
    <div class="row">
      <div class="col-sm-1 col-1 bg-color-1"></div>
      <div class="col-sm-1 col-1 bg-color-2"></div>
      <div class="col-sm-1 col-1 bg-color-3"></div>
      <div class="col-sm-1 col-1 bg-color-4"></div>
      <div class="col-sm-1 col-1 bg-color-5"></div>
      <div class="col-sm-1 col-1 bg-color-6"></div>
      <div class="col-sm-1 col-1 bg-color-1"></div>
      <div class="col-sm-1 col-1 bg-color-2"></div>
      <div class="col-sm-1 col-1 bg-color-3"></div>
      <div class="col-sm-1 col-1 bg-color-4"></div>
      <div class="col-sm-1 col-1 bg-color-5"></div>
      <div class="col-sm-1 col-1 bg-color-6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorBarComponent",
  props: ["topFixed"]
};
</script>

<style scoped></style>
