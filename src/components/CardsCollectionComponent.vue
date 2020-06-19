<template>
  <!-- MAIN SECTION -->
  <section class="mainContent full-width clearfix coursesSection">
    <div class="container">
      <div class="row text-center">
        <div v-for="data in allData" :key="data.level" class="col-12 col-sm-4 block">
          <div class="thumbnail thumbnailContent">
            <RouterLink :to="data.open === true ? data.href : '#'"><img style="height: 215px;" :src="'/storage/Images/' + data.img" alt="image" class="img-responsive"></RouterLink>
            <div class="caption" :class="data.border">
              <h3><RouterLink :to="data.open === true ? data.href : '#'" :class="data.textColor">{{ data.title }}</RouterLink></h3>
              <p>{{data.description}}</p>
            </div>
          </div>
        </div>
        <div id="tooltip" class="w-100">
          <div class="text-center margin-bottom">
            <RouterLink
                    to="/levels"
                    class="d-flex justify-content-center align-items-center w-100"
            >
              <b-button v-b-tooltip.hover title="Back To Levels" variant="btn btn-primary">Back To Levels</b-button>
            </RouterLink>
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
    let checkCollections = JSON.parse(localStorage.getItem("CardsCollections"));
    if (checkCollections === null) {
      let allData = [
        {
          level: 1,
          open: true,
          href: "/cards-2-2",
          img: "card2-2.png",
          title: "2 * 2",
          textColor:"color-1",
          border:"border-color-1",
          description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
        {
          level: 2,
          open: true,
          href: "/cards-2-3",
          img: "card2-3.png",
          title: "3 * 2",
          textColor:"color-2",
          border:"border-color-2",
          description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
        {
          level: 3,
          open: true,
          href: "/cards-3-4",
          img: "card4-3.png",
          title: "3 * 4",
          textColor:"color-3",
          border:"border-color-3",
          description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
        {
          level: 4,
          open: true,
          href: "/cards-4-4",
          img: "card4-4.png",
          title: "4 * 4",
          textColor:"color-4",
          border:"border-color-4",
          description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        }
      ];
      localStorage.setItem("CardsCollections", JSON.stringify(allData));
      this.allData = JSON.parse(localStorage.getItem("CardsCollections"));
    } else {
      this.allData = JSON.parse(localStorage.getItem("CardsCollections"));
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
