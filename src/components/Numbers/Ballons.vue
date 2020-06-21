<template>
  <div class="w-100">
    <div class="containers">
      <div id="gameControlls">
        <h4>Score :</h4>
        <span>{{ score }}</span>
        <h4>Time :</h4>
        <span id="timerPencil" v-text="testSeconds"> </span>
        <h3>seconds</h3>
      </div>
      <div
        class="col-md-12 d-flex justify-content-center align-items-center p-4"
      >
        <h1>Question : {{ count }}</h1>
      </div>

      <div
        class="col-md-12 position-relative d-flex align-items-center"
        style="justify-content: space-evenly;padding: 30px"
      >
        <button
          class="btn btn-primary btn-lg"
          id="mp3"
          v-on:click="
            playSound(newArray[Math.floor(Math.random() * newArray.length)])
          "
        >
          <i class="fa fa-play"></i>
        </button>
        <button v-on:click="resetGame" class="btn btn-primary btn-lg">
          <i class="fa fa-repeat"></i>
        </button>
      </div>

      <br />
      <div
        class="col-md-12 d-flex justify-content-center align-items-center p-4"
      >
        <div
          class="m-4 balloon"
          v-for="(result, index) in newArray"
          v-on:click="clickedBallon($event)"
          :key="index"
          style="cursor: pointer"
        >
          <span>{{ result }}</span>
        </div>
      </div>
    </div>
    <div id="tooltip" class="w-100 pt-5">
      <div class="text-center margin-bottom">
        <RouterLink
          to="/numbersLevels"
          class="d-flex justify-content-center align-items-center w-100"
        >
          <b-button
            v-b-tooltip.hover
            title="Back To Collection"
            variant="btn btn-primary"
            >Back To Collection</b-button
          >
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from "jquery/dist/jquery.min";
import swal from "sweetalert";
export default {
  name: "ballons",
  data() {
    return {
      firstNum: null,
      result: null,
      count: 1,
      showResult: false,
      score: 0,
      answerNum: null,
      ballonNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      newArray: [],
      timing: null,
      testSeconds: 0,
      localStorageArrayBallons: []
    };
  },
  methods: {
    playSound(sound) {
      this.clearSetInterval();
      var audio = new Audio(`/storage/sounds/numbers/${sound}.mp3`);
      audio.play();
      if (!isNaN(sound)) {
        this.answerNum = sound;
      }
      this.timeDisplay();
    },
    timeDisplay() {
      this.timing = setInterval(() => {
        document.getElementById("timerPencil").innerText = this.testSeconds;
        this.testSeconds++;
      }, 1000);
    },
    clearSetInterval() {
      clearInterval(this.timing);
    },
    randomize(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        let temp = arr[i];
        this.$set(arr, i, arr[randomIndex]);
        this.$set(arr, randomIndex, temp);
      }
    },
    ballonRandom() {
      for (let i = 0; i < 4; i++) {
        this.firstNum = Math.floor(Math.random() * this.ballonNumbers.length);
        if (this.newArray.length < 4) {
          if (this.newArray.includes(this.firstNum) == false) {
            this.newArray.push(this.firstNum);
            this.firstNum = null;
            this.randomize(this.ballonNumbers);
          } else {
            this.ballonRandom();
          }
        }
      }
    },
    resetGame: function() {
      this.newArray = [];
      this.ballonRandom();
      this.testSeconds = 0;
      this.clearSetInterval();
      this.count = 1;
      this.score = 0;
      this.localStorageArrayBallons = [];
    },
    clickedBallon: function(e) {
      let balloonPop = "ballon";
      let success = "clap";
      let notSuccess = "tryAgain";
      this.localStorageArrayBallons.push({
        soundNumber: this.answerNum,
        ballonClickedNumber: e.target.innerText,
        rightOrWrong: this.answerNum == e.target.innerText
      });
      localStorage.setItem(
        "ballonsAnswers",
        JSON.stringify(this.localStorageArrayBallons)
      );
      // console.log(localStorage.getItem("ballonsAnswers"));
      if (e.target.innerText == this.answerNum) {
        e.target.classList.addClass = "hideBalloon";
        this.score += 1;
        // let audio1 = new Audio(balloonPop);
        // audio1.play();
        this.playSound(balloonPop);
      }

      if (this.count < 11) {
        this.newArray = [];
        this.ballonRandom();
        this.count++;
      }
      if (this.count === 11) {
        this.showResult = true;
        this.newArray = [];
      }
      if (this.showResult == true) {
        if (this.score >= 5) {
          swal("Great You got " + this.score + " out of  ten ");
          this.playSound(success);
          // let audio2 = new Audio(success);
          // audio2.play();
          this.showResult = false;
          // $(".nextButton")[0].style.display = "inline-block";
          this.resetGame();
        } else {
          swal("You got " + this.score + " out of  ten ");
          this.playSound(notSuccess);
          // let audio3 = new Audio(notSuccess);
          // audio3.play();
          this.showResult = false;
          this.resetGame();
        }
        let levels = JSON.parse(localStorage.getItem("numbersLevels"));
        levels[4].open = true;
        localStorage.setItem("numbersLevels", JSON.stringify(levels));
      }
    }
  },
  created() {
    this.ballonRandom();
    localStorage.setItem("ballonsAnswers", JSON.stringify([]));
  }
};
</script>

<style scoped>
.container-fluid {
  background-image: url(/img/drawings.png);
}

.row h2 {
  margin-left: 20%;
  margin-top: 0.5em;
  /* font-family:Kristen ITC; */
  /* font-family:'Comic Sans MS'; */
  font-family: Jokerman, "Comic Sans MS";
  font-size: 500%;
  color: #fff;
  -webkit-text-stroke: 0.04em rgb(23, 125, 193);
}

.containers {
  width: 80%;
  /* background-color: rgb(23,125,193); */
  margin: 1em auto;
  height: 49em;
  background-color: rgb(212, 240, 245);
}

#gameControlls {
  height: 5em;
  width: 100%;
  margin: 0em auto;
  background-color: rgb(120, 173, 191);
  border-top-left-radius: 0.6em;
  border-top-right-radius: 0.6em;
}

#gameControlls h4,
#gameControlls span,
#gameControlls h3 {
  color: white;
  font-family: "Comic Sans MS";
  font-size: xx-large;
  width: 25%;
  margin-top: 0.5em;
  margin-left: 0.3em;
  display: inline-block;
}

#gameControlls h3,
#gameControlls span {
  font-size: x-large;
  width: 13%;
  margin-left: 0.1em;
  margin-right: 0.2em;
}

@font-face {
  font-family: "MisterVampire";
  src: url("/fonts/vendor/font-awesome/MISTV___.TTF");
}

.balloon {
  display: inline-block;
  width: 120px;
  height: 145px;
  background: hsl(215, 50%, 65%);
  border-radius: 80%;
  position: relative;
  box-shadow: inset -10px -10px 0 rgba(0, 0, 0, 0.07);
  margin: 20px 30px;
  transition: transform 0.5s ease;
  z-index: 10;
  animation: balloons 4s ease-in-out infinite;
  transform-origin: bottom center;
  font-size: xx-large;
}

.balloon span {
  font-size: 120%;
  font-family: "Comic Sans MS";
  margin: 1.3em 1.5em;
  display: block;
  color: white;
}

@keyframes balloons {
  0%,
  100% {
    transform: translateY(0) rotate(-4deg);
  }
  50% {
    transform: translateY(-25px) rotate(4deg);
  }
}

.balloon:before {
  content: "▲";
  font-size: 20px;
  color: hsl(215, 30%, 50%);
  display: block;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: -12px;
  z-index: -100;
}

.balloon:after {
  display: inline-block;
  top: 4.5em;
  position: absolute;
  height: 6em;
  width: 2px;
  /*margin: 0 1.6em;*/
  content: "";
  background: rgba(0, 0, 0, 0.2);
}

.balloon:nth-child(1) {
  background: hsl(245, 100%, 65%);
  animation-duration: 3.5s;
}

.balloon:nth-child(1):before {
  color: hsl(245, 100%, 65%);
}

.balloon:nth-child(2) {
  background: hsl(130, 100%, 60%);
  animation-duration: 3s;
}

.balloon:nth-child(2):before {
  color: hsl(139, 100%, 50%);
}

.balloon:nth-child(3) {
  background: hsl(0, 100%, 59%);
  animation-duration: 5s;
}

.balloon:nth-child(3):before {
  color: hsl(0, 100%, 50%);
}

.balloon:nth-child(4) {
  background: hsl(53, 100%, 58%);
  animation-duration: 4.5s;
}

.balloon:nth-child(4):before {
  color: hsl(59, 100%, 52%);
}

.balloon:nth-child(5) {
  background: hsl(23, 100%, 57%);
  animation-duration: 5s;
}

.balloon:nth-child(5):before {
  color: hsl(23, 100%, 46%);
}

@keyframes example {
  from {
    height: 6.5em;
  }
  to {
    height: 0px;
  }
}

.hideBalloon {
  animation-name: example;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

@media only screen and (max-width: 800px) {
  h2 {
    font-size: 250%;
  }
}

@media only screen and (max-width: 1000px) {
  h2 {
    font-size: 350%;
  }
}
</style>
