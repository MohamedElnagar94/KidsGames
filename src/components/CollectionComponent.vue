<template>
  <!-- MAIN SECTION -->
  <section class="mainContent full-width clearfix coursesSection">
    <div class="container">
      <div class="row">
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
    let checkCollections = JSON.parse(
      localStorage.getItem("level3Collections")
    );
    if (checkCollections === null) {
      let allData = [
        {
          level: 1,
          open: true,
          href: "/pencilInBox",
          img: "pencilInBox.png",
          title: "Pencils in box",
          textColor:"color-1",
          border:"border-color-1",
          description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
        {
          level: 2,
          open: true,
          href: "/order",
          img: "order.png",
          title: "Sort numbers",
          textColor:"color-2",
          border:"border-color-2",
          description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
        {
          level: 3,
          open: true,
          href: "/ballons",
          img: "ballons.png",
          title: "Ballons",
          textColor:"color-3",
          border:"border-color-3",
          description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        }
      ];
      localStorage.setItem("level3Collections", JSON.stringify(allData));
      this.allData = JSON.parse(localStorage.getItem("level3Collections"));
    } else {
      this.allData = JSON.parse(localStorage.getItem("level3Collections"));
    }
  }
};
</script>

<style scoped>
.move {
  position: relative;
}
.move img:hover {
  /*position: absolute;*/
  /*animation: moveimage 1s infinite linear alternate*/
}
/*@keyframes moveimage {*/
/*  0%  {top: 0;}*/
/*  50%  {top: 20px;}*/
/*  50% {top: -10px;}*/
/*  100% {top: 0;}*/
/*}*/
</style>
