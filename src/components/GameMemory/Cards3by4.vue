<template>
  <div class="container" style="background-color: rgb(120,173,191);">
    <div>
      <div id="gameControlls">
        <h4>Score :</h4>
        <span id="scoreText">{{ score }} /6</span>
        <h4>Time :</h4>
        <span id="timerPencil" v-text="testSeconds"> </span>
        <h3>seconds</h3>
      </div>
      <div class="row">
        <button class="nextButton" v-on:click="newGame">new game</button>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-md-10">
          <div class="flipper col-sm-3" v-on:click="addFlipClass" v-for="(image, index) in randomImages"
               :key="index">
            <div class="card">
              <div class="front">
              </div>
              <div class="back">
                <img class="h-100 w-100" :src="'images/card/fruits/' + image + '.png'" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from "jquery/dist/jquery.min";
  import swal from "sweetalert"
export default {
  name: "cards-3-4",
  data() {
    return {
      images: [4, 5],
      images2: [0, 1],
      images3: [8, 9],
      images4: [2, 3],
      images5: [10, 11],
      images6: [6, 7],
      selectedImage: "",
      selectedImage2: "",
      selectedImage3: "",
      selectedImage4: "",
      selectedImage5: "",
      selectedImage6: "",
      randomImages: [],
      score: 0,
      timing: null,
      testSeconds: 0,
      count:0
    };
  },
  created() {
    const idx = Math.floor(Math.random() * this.images.length);
    const idx2 = Math.floor(Math.random() * this.images2.length);
    const idx3 = Math.floor(Math.random() * this.images3.length);
    const idx4 = Math.floor(Math.random() * this.images4.length);
    const idx5 = Math.floor(Math.random() * this.images5.length);
    const idx6 = Math.floor(Math.random() * this.images6.length);

    this.selectedImage = this.images[idx];
    this.selectedImage2 = this.images2[idx2];
    this.selectedImage3 = this.images3[idx3];
    this.selectedImage4 = this.images4[idx4];
    this.selectedImage5 = this.images5[idx5];
    this.selectedImage6 = this.images6[idx6];
    for (let n = 0; n < 2; n++) {
      this.randomImages.push(this.selectedImage);
      this.randomImages.push(this.selectedImage2);
      this.randomImages.push(this.selectedImage3);
      this.randomImages.push(this.selectedImage4);
      this.randomImages.push(this.selectedImage5);
      this.randomImages.push(this.selectedImage6);
    }
  },
  methods: {
    randomize() {
      for (let i = this.randomImages.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        let temp = this.randomImages[i];
        this.$set(this.randomImages, i, this.randomImages[randomIndex]);
        this.$set(this.randomImages, randomIndex, temp);
      }
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
    removeFlipCard() {
      $(".flip").removeClass("flip");
    },
    addFlipClass(e) {
      this.clearSetInterval();
      this.timeDisplay();
      $(e.target.parentElement.parentElement).addClass("flip");
      let img = $(".flip .card .back img");
      let firstImage = img[0];
      let secondImage = img[1];
      if (this.count < 12) {
        let flip = $(".flip");
        if (flip.length === 2) {
          if ($(firstImage).attr("src") === $(secondImage).attr("src")) {
            flip.addClass("matched-cards");
            flip.removeClass("flip");
            this.count = $(".matched-cards").length;
            this.score++;
          } else {
            setTimeout(
                    function () {
                      this.removeFlipCard();
                    }.bind(this),
                    1000
            );
          }
        }
      }
      if (this.count === 12) {
        setTimeout(
                function () {
                  this.showAlert();
                  this.count = 0
                }.bind(this),
                500
        );
      }
    },
    showAlert() {
      swal("Great You matched all images");
      this.newGame();
      document.getElementById("nextLevel").style.display = "inline-block";
    },
    newGame() {
      this.testSeconds = 0;
      this.clearSetInterval();
      $(".flipper").removeClass("flip matched-cards");
      this.randomImages = [];
      const idx = Math.floor(Math.random() * this.images.length);
      const idx2 = Math.floor(Math.random() * this.images2.length);
      const idx3 = Math.floor(Math.random() * this.images3.length);
      const idx4 = Math.floor(Math.random() * this.images4.length);
      const idx5 = Math.floor(Math.random() * this.images5.length);
      const idx6 = Math.floor(Math.random() * this.images6.length);
      this.selectedImage = this.images[idx];
      this.selectedImage2 = this.images2[idx2];
      this.selectedImage3 = this.images3[idx3];
      this.selectedImage4 = this.images4[idx4];
      this.selectedImage5 = this.images5[idx5];
      this.selectedImage6 = this.images6[idx6];
      for (let n = 0; n < 2; n++) {
        this.randomImages.push(this.selectedImage);
        this.randomImages.push(this.selectedImage2);
        this.randomImages.push(this.selectedImage3);
        this.randomImages.push(this.selectedImage4);
        this.randomImages.push(this.selectedImage5);
        this.randomImages.push(this.selectedImage6);
      }
      this.score = 0;
      this.seconds = 0;
      this.count = 0;
      this.randomize();
    }
  },
  components: {},
  mounted() {
    console.log("Component mounted.");
  }
};
</script>

<style scoped lang="scss">

  .up {
    color: #55DD11;
  }

  .card {
    text-align: center;
    color: #FFFFFF;
    width: 100%;
    height: 160px;
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
    background-color: black;
  }

  .flipper {
    margin-bottom: 10px;
    perspective: 1000px;
  }

  /* flip the pane when hovered */
  .flipper.flip .card {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    width: 100%;
    padding: 5px;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  /* front pane, placed above back */
  .front {
    z-index: 2;
    /* for firefox 31 */
    transform: rotateY(0deg);
    height: 100%;
  }

  /* back, initially hidden pane */
  .back {
    transform: rotateY(180deg);
    height: 100%;
  }

  .goback {
    position: absolute;
    bottom: 0;
    padding-left: 20px;
    left: 0;
    text-decoration: underline;
    cursor: pointer;
  }

  .flipper.matched-cards .card {
    transform: rotateY(180deg);
  }

  .matched-cards .card .back img {
    opacity: 0.3;
  }

</style>
