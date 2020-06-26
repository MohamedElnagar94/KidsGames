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
import axios from "axios";
import Swal from "sweetalert2";
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
    this.showResult = true;
    console.log(this.finalResult[0].location);
    if (this.finalResult[0].location == "/numbersExam") {
      axios
        .post(
          "http://127.0.0.1:8000/api/degree",
          {
            kid_id: this.$root.auth.id,
            game_id: "ff4a3b6e-c254-50ce-9f16-195ea6198870",
            result_degree: this.checkNumber,
            final_degree: 10
          },
          { headers: { _token: this.$root.auth.access_token } }
        )
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 2000
          });
          this.finalResult = [];
          localStorage.setItem("finalResult", JSON.stringify(this.finalResult));
        })
        .catch(error => {
          if (!error.response) {
            // network error
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "server not found !"
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.message
            });
          }
        })
        .then(() => {});
    } else if (this.finalResult[0].location == "/exam2") {
      axios
        .post(
          "http://127.0.0.1:8000/api/degree",
          {
            kid_id: this.$root.auth.id,
            game_id: "d045770c-355a-5dd1-957e-f9e925b9602b",
            result_degree: this.checkNumber,
            final_degree: 10
          },
          { headers: { _token: this.$root.auth.access_token } }
        )
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 2000
          });
          this.finalResult = [];
          localStorage.setItem("finalResult", JSON.stringify(this.finalResult));
        })
        .catch(error => {
          if (!error.response) {
            // network error
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "server not found !"
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.message
            });
          }
        })
        .then(() => {});
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
