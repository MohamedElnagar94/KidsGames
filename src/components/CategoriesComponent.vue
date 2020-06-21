<template>
  <!-- CATEGORY SECTION -->
  <section class="mainContent full-width clearfix productSection">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4" v-for="data in allData" :key="data.level">
          <div class="box" :class="data.bgColor">
            <RouterLink :to="data.open === true ? data.href : '#'">
              <div class="box-img text-center p-0" :class="data.border">
                <img
                  :src="'/storage/Images/' + data.img"
                  alt="image"
                  class="img-responsive w-100"
                  style="max-height: none;height:190px"
                />
              </div>
            </RouterLink>
            <div class="box-info">
              <RouterLink
                :to="data.open === true ? data.href : '#'"
                class="btn btn-primary w-100"
                >{{ data.title }}</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      allData: []
    };
  },
  created() {
    let checkCollections = JSON.parse(
      localStorage.getItem("CategoryCollections")
    );
    if (checkCollections === null) {
      let allData = [
        {
          level: 1,
          open: true,
          href: "/numbersLevels",
          img: "numbersLevels.jpg",
          title: "Numbers",
          bgColor: "bg-color-1",
          border: "border-color-1",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
        {
          level: 2,
          open: true,
          href: "/cardsLevels",
          img: "card2-3.png",
          title: "Cards",
          bgColor: "bg-color-2",
          border: "border-color-2",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
        {
          level: 3,
          open: true,
          href: "/sortsLevels",
          img: "sortAlgorithm.png",
          title: "Sort Algorithm",
          bgColor: "bg-color-3",
          border: "border-color-3",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        }
      ];
      localStorage.setItem("CategoryCollections", JSON.stringify(allData));
      this.allData = JSON.parse(localStorage.getItem("CategoryCollections"));
    } else {
      this.allData = JSON.parse(localStorage.getItem("CategoryCollections"));
    }
  }
};
</script>

<style scoped>
.move {
  position: relative;
}
.move img:hover {
  position: absolute;
  /* transition: 1s infinite linear; */
  animation: moveimage 1s infinite linear alternate;
  /* animation-name: moveimage;
    animation-duration: 4s; */
}
@keyframes moveimage {
  0% {
    top: 0px;
  }
  50% {
    top: 20px;
  }
  50% {
    top: -10px;
  }
  100% {
    top: 0px;
  }
}
</style>
