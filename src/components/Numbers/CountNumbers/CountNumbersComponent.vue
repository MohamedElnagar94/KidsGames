<template>
  <div class="container" :key="render">
    <img :src="src" class="vloume" @click="play()" alt />
    <div class="row position-relative">
      <img
        src="/storage/Images/congrates.gif"
        class="celebrateimg"
        v-if="count == 4"
      />
      <div :class="count == 4 ? 'col-md-8' : 'col-md-12'">
        <div class="w-100 d-flex justify-content-center align-items-center">
          <div v-for="(item, i) in randomOrder" :key="i" class="col-md-3">
            <div style="text-align:center; line-height: 5">
              <img
                v-for="(single, index) in item.id"
                :key="index + 20"
                :style="[
                  item.id === 1
                    ? { height: '120px', margin: '5px' }
                    : { height: '50px', margin: '5px' }
                ]"
                :src="'/storage/Images/' + item.skitch"
                alt
              />
            </div>
          </div>
        </div>
        <div
          class="w-100 d-flex justify-content-center align-items-center mt-5"
        >
          <div
            v-for="i in 4"
            :key="i"
            class="col-md-3 d-flex justify-content-center align-items-center p-4"
          >
            <div
              class="d-flex justify-content-center align-items-center expectResult"
              style="height: 90px; width: 90px; text-align:center; background-color: lightgray;"
              :id="randomOrder[i - 1].name"
              @drop="drop"
              @dragover="allowDrop"
            ></div>
          </div>
        </div>
        <div
          class="w-100 d-flex justify-content-center align-items-center mt-5"
        >
          <div
            v-for="(item, i) in results"
            :key="i"
            class="col-md-3 d-flex justify-content-center align-items-center p-4"
          >
            <img
              style="height: 75px"
              :src="'/storage/Images/' + item.img"
              alt
              draggable="true"
              @dragstart="onDragging"
              :id="item.id"
            />
          </div>
        </div>
      </div>
      <div
        v-if="count == 4"
        class="col-md-4 d-flex justify-content-center align-items-center"
      >
        <div class="col-md-12 position-relative">
          <div style="width: 100%;">
            <div
              class="pt-3 text-center"
              style="font-size: 50px;font-weight: bold;"
            >
              <p class="text-success">
                <span class="d-block">Well Done</span>
                <span class="d-block" style="font-size: 35px;">My Friend</span>
              </p>
              <img
                class="img-fluid"
                style="width: 55%;"
                src="/storage/Images/boy4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="tooltip" class="w-100">
        <p
          class="space-bottom d-flex justify-content-center align-items-center"
        >
          <b-button
            v-if="count == 4"
            @click.prevent="playAgain()"
            v-b-tooltip.hover
            title="Play Again"
            variant="btn btn-success"
          >
            <i
              class="fa fa-repeat"
              style="font-size: 25px;padding: 0 35px;"
            ></i>
          </b-button>
          <RouterLink to="/numbersLevels" class="">
            <b-button
              v-b-tooltip.hover
              :title="count !== 4 ? 'Back To Levels' : 'Next Level'"
              variant="btn btn-primary"
              >{{ count !== 4 ? "Back To Levels" : "Next Level" }}</b-button
            >
          </RouterLink>
        </p>
      </div>
      <!--  audio -->
      <audio ref="audioElm" src="/storage/Images/happy.mp3"></audio>

      <!--  audio -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CountNumbersComponent",
  data() {
    return {
      numbers: [
        { id: 1, name: "One", img: "1.png", skitch: "fruites6.png" },
        { id: 2, name: "Two", img: "2.png", skitch: "banana.png" },
        { id: 3, name: "Three", img: "3.png", skitch: "apple.png" },
        { id: 4, name: "Four", img: "4.png", skitch: "redApple.png" },
        { id: 5, name: "Five", img: "5.png", skitch: "fruit5.png" },
        { id: 6, name: "Six", img: "6.png", skitch: "fruites6.png" },
        { id: 7, name: "Seven", img: "7.png", skitch: "mango.png" },
        { id: 8, name: "Eight", img: "8.png", skitch: "banana.png" },
        { id: 9, name: "Nine", img: "9.png", skitch: "redApple.png" },
        { id: 10, name: "Ten", img: "10.png", skitch: "mango.png" }
      ],
      results: [],
      randomOrder: [],
      src: "/storage/Images/close.png",
      count: 0,
      render: 0
    };
  },
  methods: {
    playAgain() {
      this.randomArr();
      this.randomOrder = this.reOrderArr();
      this.count = 0;
      this.render++;
    },
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
    randomArr: function() {
      this.results = [];
      while (this.results.length < 4) {
        let item = this.numbers[Math.floor(Math.random() * 10)];
        if (this.results.indexOf(item) === -1) this.results.push(item);
      }
    },

    reOrderArr: function() {
      let array = [...this.results];
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    onDragging(event) {
      event.dataTransfer.setData("text", event.target.id);
    },

    allowDrop(event) {
      event.preventDefault();
    },

    drag(event) {
      event.dataTransfer.setData("text", event.target.id);
    },

    drop(event) {
      event.preventDefault();
      let data = event.dataTransfer.getData("text");
      if (this.numbers[data - 1].name === event.target.id) {
        event.target.appendChild(document.getElementById(data));
        this.count++;
      }
      if (this.count == 4) {
        let levels = JSON.parse(localStorage.getItem("numbersLevels"));
        levels[2].open = true;
        localStorage.setItem("numbersLevels", JSON.stringify(levels));
      }
    }
  },

  created() {
    this.randomArr();
    this.randomOrder = this.reOrderArr();
  }
};
</script>

<style scoped>
.vloume {
  width: 72px;
  height: 49px;
  position: absolute;
  top: 20%;
  left: 50px;
}
.celebrateimg {
  position: absolute;
  /* text-align: center; */
  /* margin: 10px auto; */
  top: 35%;
  left: 35%;
  transform: translate(-50%, -50%);
  width: 320px;
  z-index: 999;
}
</style>
