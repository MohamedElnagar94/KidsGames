<template>
  <section class="comingSoonBg">
    <div class="comingTitle">
      <img src="img/logo.png" alt="image" />
    </div>
    <section class="comingContent">
      <h1>We are comming soon</h1>
      <p>We will be here soon. Please stay in touch</p>
      <div class="count-down clearfix">
        <div id="simple_timer"></div>
      </div>
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          aria-describedby="basic-addon2"
          placeholder="Enter email for information"
        />
        <button type="submit" class="input-group-addon" id="basic-addon2">
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
      <ul class="list-inline">
        <li>
          <a href="#" class="bg-color-1"
            ><i class="fa fa-facebook" aria-hidden="true"></i
          ></a>
        </li>
        <li>
          <a href="#" class="bg-color-2"
            ><i class="fa fa-google-plus" aria-hidden="true"></i
          ></a>
        </li>
        <li>
          <a href="#" class="bg-color-3"
            ><i class="fa fa-twitter" aria-hidden="true"></i
          ></a>
        </li>
        <li>
          <a href="#" class="bg-color-4"
            ><i class="fa fa-linkedin" aria-hidden="true"></i
          ></a>
        </li>
        <li>
          <a href="#" class="bg-color-5"
            ><i class="fa fa-instagram" aria-hidden="true"></i
          ></a>
        </li>
        <li>
          <a href="#" class="bg-color-6"
            ><i class="fa fa-pinterest-p" aria-hidden="true"></i
          ></a>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
// import Header from "@/components/HeaderComponent.vue";
export default {
  name: "ComingSoon",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    // Header
  }
};
</script>
