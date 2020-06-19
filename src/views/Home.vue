<template>
  <section>
    <Slider></Slider>
    <MainContent></MainContent>
  </section>
</template>

<script>
// import $ from "jquery/dist/jquery.min";
// @ is an alias to /src
import Slider from "@/views/Includes/Slider.vue";
import MainContent from "@/views/Includes/MainContent.vue";
export default {
  name: "Home",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  methods: {},
  components: {
    Slider,
    MainContent
  },
  mounted() {
    // location.reload()
    // console.log($(".fullscreenbanner").html());
  }
};
</script>
