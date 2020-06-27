<template>
  <!-- BANNER -->
  <section class="bannercontainer bannercontainerV1">
    <div class="fullscreenbanner-container">
      <div class="fullscreenbanner">
        <ul>
          <li
            data-transition="fade"
            data-slotamount="5"
            data-masterspeed="700"
            data-title="Slide 1"
          >
            <img
              src="img/home/slider/slider-1.jpg"
              alt="slidebg1"
              data-bgfit="cover"
              data-bgposition="center center"
              data-bgrepeat="no-repeat"
            />
          </li>
          <li
            data-transition="fade"
            data-slotamount="5"
            data-masterspeed="1000"
            data-title="Slide 2"
          >
            <img
              src="img/home/slider/slider-2.jpg"
              alt="slidebg1"
              data-bgfit="cover"
              data-bgposition="center center"
              data-bgrepeat="no-repeat"
            />
          </li>
          <li
            data-transition="fade"
            data-slotamount="5"
            data-masterspeed="700"
            data-title="Slide 3"
          >
            <img
              src="img/home/slider/slider-3.jpg"
              alt="slidebg1"
              data-bgfit="cover"
              data-bgposition="center center"
              data-bgrepeat="no-repeat"
            />
          </li>
          <li
            data-transition="fade"
            data-slotamount="5"
            data-masterspeed="1000"
            data-title="Slide 2"
          >
            <img
              src="img/home/slider/slider-4.jpg"
              alt="slidebg1"
              data-bgfit="cover"
              data-bgposition="center center"
              data-bgrepeat="no-repeat"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
// import "@/assets/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js";
// import $ from 'jquery/dist/jquery.min'
export default {
  name: "Slider",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  created() {
    // $('.bannercontainerV1 .fullscreenbanner').revolution({
    //   delay: 5000,
    //   startwidth: 1170,
    //   startheight: 560,
    //   fullWidth: "on",
    //   fullScreen: "off",
    //   hideCaptionAtLimit: "",
    //   dottedOverlay: "twoxtwo",
    //   navigationStyle: "preview4",
    //   fullScreenOffsetContainer: "",
    //   hideTimerBar:"on",
    //
    // });
  }
};
</script>

<style scoped></style>
