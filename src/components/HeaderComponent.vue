<template>
  <!-- PAGE TITLE SECTION-->
  <section class="pageTitleSection">
    <div class="container">
      <div class="pageTitleInfo">
        <h2>{{ header }}</h2>
        <ol class="breadcrumb d-flex justify-content-center align-items-center">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="active">{{ header }}</li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
export default {
  props: ["header"],
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {}
};
</script>
<style scoped>
.pageTitleSection {
  background: linear-gradient(
    90deg,
    rgba(225, 35, 54, 1) 0%,
    rgba(34, 72, 149, 1) 25%,
    rgba(0, 138, 79, 1) 50%,
    rgba(246, 150, 2, 1) 75%
  );
  padding: 45px 0;
}
</style>
