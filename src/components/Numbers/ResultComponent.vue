<template>
  <div class="container" v-if="showResult">
    <div class="row">
      <div
        class="col-md-12 d-flex justify-content-center align-items-center p-5"
        style="flex-direction: column;"
      >
        <img
          style="height: 120px"
          :src="'/storage/Images/' + checkNumber + '.png'"
          alt=""
        />
        <div class="lineResult"></div>
        <img style="height: 120px" src="/storage/Images/10.png" alt="" />
      </div>
      <div class="col-md-12 d-flex justify-content-center align-items-center">
        <p class="font-weight-bold" style="font-size: 90px;color: orange;">
          {{ checkAppreciation }}
        </p>
      </div>
      <div id="tooltip" class="w-100 pt-5">
        <p
          class="space-bottom d-flex justify-content-center align-items-center"
        >
          <RouterLink :to="finalResult[0].location" class="">
            <b-button
              v-b-tooltip.hover
              title="Try Again"
              variant="btn btn-primary"
              >Try Again</b-button
            >
          </RouterLink>
          <RouterLink :to="finalResult[0].location" class="">
            <b-button
              v-b-tooltip.hover
              title="Back to numbers levels"
              variant="btn btn-primary"
              >Back to numbers levels</b-button
            >
          </RouterLink>
          <RouterLink
            :to="'/categories'"
            v-if="finalResult[0].location == '/numbersExam'"
            class=""
          >
            <b-button
              v-b-tooltip.hover
              title="Back to Categories"
              variant="btn btn-primary"
              >Categories</b-button
            >
          </RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultComponent",
  data() {
    return {
      finalResult: [],
      showResult: false
    };
  },
  created() {
    this.finalResult = JSON.parse(localStorage.getItem("finalResult"));
    if (this.finalResult.length === 0) {
      window.location.href = "/numbersLevels";
    } else {
      this.showResult = true;
    }
  },
  computed: {
    checkNumber: function() {
      return this.finalResult.filter(item => item.answer === true).length;
    },
    checkAppreciation: function() {
      if (this.checkNumber <= 10 && this.checkNumber >= 9) {
        return "Excellent Work";
      } else if (this.checkNumber === 8) {
        return "Very Good";
      } else if (this.checkNumber < 8 && this.checkNumber >= 6) {
        return "Good";
      } else if (this.checkNumber < 6 && this.checkNumber >= 5) {
        return "Medium";
      } else if (this.checkNumber < 5) {
        return "Bad Work Try Again";
      } else {
        return this.checkNumber;
      }
    }
  }
};
</script>

<style scoped>
.lineResult {
  width: 200px;
  height: 15px;
  border: 1px solid black;
  border-radius: 20px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(220, 219, 224, 1) 27%,
    rgba(255, 255, 255, 1) 50%,
    rgba(224, 224, 224, 1) 73%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>
