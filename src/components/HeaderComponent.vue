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
