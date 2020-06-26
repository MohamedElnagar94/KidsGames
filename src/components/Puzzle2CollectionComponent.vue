<template>
  <!-- MAIN SECTION -->
  <section class="mainContent full-width clearfix coursesSection">
    <div class="container">
      <div class="row">
        <div
          v-for="data in allData"
          :key="data.level"
          class="col-12 col-sm-4 block"
        >
          <div class="thumbnail thumbnailContent">
            <RouterLink :to="data.open === true ? data.href : '#'"
              ><img
                style="height: 215px;"
                :src="'/storage/Images/' + data.img"
                alt="image"
                class="img-responsive"
            /></RouterLink>
            <div class="caption" :class="data.border">
              <h3>
                <RouterLink
                  :to="data.open === true ? data.href : '#'"
                  :class="data.textColor"
                  >{{ data.title }}</RouterLink
                >
              </h3>
              <p>{{ data.description }}</p>
            </div>
          </div>
        </div>
        <div id="tooltip" class="w-100 pt-5">
          <div class="text-center margin-bottom">
            <RouterLink
              to="/cardsLevels"
              class="d-flex justify-content-center align-items-center w-100"
            >
              <b-button
                v-b-tooltip.hover
                title="Back To Entertainment Levels"
                variant="btn btn-primary"
                >Back To Levels</b-button
              >
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
      localStorage.getItem("puzzle2Collections")
    );
    if (checkCollections === null) {
      let allData = [
        {
          level: 1,
          open: true,
          href: "/puzzle3",
          img: "puzzle3.png",
          title: "Puzzle Level 3",
          textColor: "color-1",
          border: "border-color-1",
          description:
            ""
        },
        {
          level: 2,
          open: true,
          href: "/puzzle4",
          img: "puzzle4.png",
          title: "Puzzle Level 4",
          textColor: "color-2",
          border: "border-color-2",
          description:
            ""
        }
      ];
      localStorage.setItem("puzzle2Collections", JSON.stringify(allData));
      this.allData = JSON.parse(localStorage.getItem("puzzle2Collections"));
    } else {
      this.allData = JSON.parse(localStorage.getItem("puzzle2Collections"));
    }
  }
};
</script>

<style scoped>
.move {
  position: relative;
}
</style>
