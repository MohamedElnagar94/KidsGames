<template>
  <div class="container">
    <img :src="src" class="vloume" @click="play()" alt />
    <div class="row">
      <div
        class="col-md-12 d-flex justify-content-center align-items-center p-4"
        style="font-size: 35px;"
      >
        <span style="margin-right: 15px;">Question</span>
        <img
          style="height: 40px;"
          :src="'/storage/Images/' + count + '.png'"
          alt=""
        />
        <span style="margin: 0 15px;">Of</span>
        <img style="height: 40px;" src="/storage/Images/10.png" alt="" />
      </div>
      <div class="col-md-6">
        <div
          class="col-md-12 d-flex justify-content-center align-items-center p-5"
        >
          <img
            class="m-3"
            style="height: 75px"
            :src="'/storage/Images/' + firstNum + '.png'"
            alt=""
          />
          <div
            class="result d-flex justify-content-center align-items-center"
            :class="{ divBg: changeColor === true }"
            id="result"
            @dragover.prevent
            @drop="dragFinish()"
          ></div>
          <img
            class="m-3"
            style="height: 75px"
            :src="'/storage/Images/' + secondNum + '.png'"
            alt=""
          />
        </div>
        <div
          class="col-md-12 d-flex justify-content-center align-items-center p-4"
        >
          <img
            class="m-4"
            v-for="(result, index) in resultOption"
            :key="index"
            @dragover.prevent
            @dragexit="dragExit(result)"
            @dragstart="dragStart(result)"
            @dragenter="dragEnter"
            @dragleave="dragLeave(result)"
            @dragend="dragEnd"
            :draggable="draggable"
            style="height: 75px;cursor: pointer"
            :src="'/storage/Images/' + result + '.png'"
            alt=""
          />
        </div>
        <div
          class="col-md-12 position-relative d-flex align-items-center"
          style="justify-content: space-evenly;padding: 30px"
        >
          <button class="button" v-on:click="newQuestion">
            {{ buttonNext }}
          </button>
        </div>
      </div>
      <div class="col-md-6 position-relative">
        <div
          style="position: absolute;flex-direction: column;display: flex;justify-content: space-around;align-items: center;top: 15%;left: 40%;width: 53%;"
        >
          <div
            v-if="resultFromDrag !== null"
            class="w-100"
            style="display: flex;justify-content: space-around;align-items: center;"
          >
            <img
              class="m-3"
              style="height: 80px;"
              :src="'/storage/Images/' + resultFromDrag + '.png'"
              alt=""
            />
            <i
              class="fa fa-check"
              v-if="checkResult && result === resultFromDrag"
              style="font-size: 124px;color: greenyellow;"
            ></i>
            <i
              class="fa fa-close"
              v-if="checkResult && result !== resultFromDrag"
              style="font-size: 124px;color: red;"
            ></i>
          </div>
          <div
            class="w-100"
            v-if="checkResult && result !== resultFromDrag"
            style="display: flex;justify-content: space-around;align-items: center;"
          >
            <img
              class="m-3"
              style="height: 80px;"
              :src="'/storage/Images/' + result + '.png'"
              alt=""
            />
            <i
              class="fa fa-check"
              style="font-size: 124px;color: greenyellow;"
            ></i>
          </div>
          <div class="pt-3 text-center">
            <p class="text-white" style="font-size: 50px;font-weight: bold;">
              {{ message }}
            </p>
            <img
              v-if="message == 'Well Done'"
              class="img-fluid"
              style="width: 55%;"
              src="/storage/Images/boy4.png"
              alt=""
            />
            <img
              v-if="message == 'UnLucky'"
              class="img-fluid"
              style="width: 35%;"
              src="/storage/Images/sadboy.png"
              alt=""
            />
          </div>
        </div>
        <img class="img-fluid" src="/storage/Images/presentations.png" alt="" />
      </div>
      <div id="tooltip" class="w-100 pt-5">
        <div class="text-center margin-bottom">
          <RouterLink
            to="/numbersLevels"
            class="d-flex justify-content-center align-items-center w-100"
          >
            <b-button
              v-b-tooltip.hover
              title="Back To Levels"
              variant="btn btn-primary"
              >Back To Levels</b-button
            >
          </RouterLink>
        </div>
      </div>
    </div>
    <!--  audio -->
    <audio ref="audioElm" src="/storage/Images/happy.mp3"></audio>

    <!--  audio -->
  </div>
</template>

<script>
import $ from "jquery/dist/jquery.min";
export default {
  name: "Exam2Component",
  data() {
    return {
      questions: [],
      firstNum: null,
      secondNum: null,
      result: null,
      resultOption: ["bigger-than", "smaller-than", "equal"],
      count: 1,
      changeColor: false,
      resultFromDrag: null,
      draggable: true,
      checkResult: false,
      buttonNext: "Next Question",
      showResult: false,
      message: "",
      src: "/storage/Images/close.png"
    };
  },
  methods: {
    play: function() {
      var a = this.$refs.audioElm;
      if (a.paused) {
        a.play();
        this.src = "/storage/Images/open.png";
      } else {
        a.pause();
        this.src = "/storage/Images/close.png";
      }
    },
    randFun: function() {
      return Math.floor(Math.random() * 11);
    },

    randomNumber: function() {
      this.firstNum = this.randFun();
      this.secondNum = this.randFun();
      if (this.firstNum < this.secondNum) {
        this.result = "smaller-than";
      } else if (this.firstNum > this.secondNum) {
        this.result = "bigger-than";
      } else {
        this.result = "equal";
      }
    },
    newQuestion: function() {
      if (this.showResult === true) {
        window.location.href = "/Result";
      }
      if (this.count < 10) {
        this.randomNumber();
        this.draggable = true;
        this.checkResult = false;
        this.resultFromDrag = null;
        $("#result").html("");
        this.count++;
      }
      if (this.count === 10) {
        this.buttonNext = "Final Result";
        this.showResult = true;
      }
      this.message = "";
    },
    dragEnter: function() {
      console.log("dragenter");
    },
    dragLeave: function(num) {
      // this.changeColor = true;
      console.log("dragLeave", num);
    },
    dragEnd: function() {
      this.changeColor = false;
    },
    dragExit: function(num) {
      console.log("dragExit", num);
    },
    dragFinish: function() {
      $("#result").append(
        `<img class="m-3" style="height: 75px" src="/storage/Images/${this.resultFromDrag}.png" alt="">`
      );
      if (this.result === this.resultFromDrag) {
        this.message = "Well Done";
      } else {
        this.message = "UnLucky";
      }
      this.draggable = false;
      this.checkResult = true;
      this.questions.push({
        firstNum: this.firstNum,
        secondNum: this.secondNum,
        result: this.result,
        resultFromDrag: this.resultFromDrag,
        answer: this.result === this.resultFromDrag,
        location: window.location.pathname
      });
      localStorage.setItem("finalResult", JSON.stringify(this.questions));
      if (this.count === 10) {
        let levels = JSON.parse(localStorage.getItem("numbersLevels"));
        levels[6].open = true;
        localStorage.setItem("numbersLevels", JSON.stringify(levels));
      }
    },
    dragStart: function(num) {
      this.changeColor = true;
      this.resultFromDrag = num;
    }
  },
  created() {
    this.randomNumber();
    localStorage.setItem("finalResult", JSON.stringify([]));
  }
};
</script>

<style scoped>
.button {
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {
  background-color: #3e8e41;
}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.result {
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  box-shadow: 0 0 3px 0 gray, inset 0 0 7px 0 gray;
}
.divBg {
  background-color: rgba(85, 169, 56, 0.5);
}
.vloume {
  width: 72px;
  height: 49px;
  position: absolute;
  top: 20%;
  left: 50px;
}
</style>
