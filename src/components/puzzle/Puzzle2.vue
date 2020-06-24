<template>
  <div class="w-100" style="background-color: #D4F0F5;">
    <div id="overlay"></div>
    <div id="modal">
      <p>hello , welcome to puzzle game ^_^</p>
      <button id="startgame" v-on:click="startTheGame">start game</button>
    </div>
    <div id="gameControlls">
      <h4>Score :</h4>
      <span id="scoreText">{{ score }} /6</span>
    </div>
    <br />
    <div class="row">
      <button v-on:click="newGame" class="nextButton">new game</button>
      <a
        class="nextButton"
        id="nextLevel"
        style="display:none;"
        href="/puzzle2"
      >
        next level
      </a>
    </div>

    <br />
    <img id="finalImage" src="" style="display:none" /><br />
    <div class="row">
      <div class="answer">
        <span @drop="drop" @dragover="allowDrop"></span>
        <span @drop="drop" @dragover="allowDrop"></span>
        <span @drop="drop" @dragover="allowDrop"></span>
        <span @drop="drop" @dragover="allowDrop"></span>
        <span @drop="drop" @dragover="allowDrop"></span>
        <span @drop="drop" @dragover="allowDrop"></span>
      </div>
      <br />

      <div class="shuffle">
        <canvas
          id="myCanvas0"
          :draggable="draggable"
          @dragstart="drag"
          @dragover.prevent
        >
        </canvas>

        <canvas
          id="myCanvas1"
          :draggable="draggable"
          @dragstart="drag"
          @dragover.prevent
        >
          Your browser does not support the HTML canvas tag.</canvas
        >

        <canvas
          id="myCanvas2"
          :draggable="draggable"
          @dragstart="drag"
          @dragover.prevent
        >
          Your browser does not support the HTML canvas tag.</canvas
        >

        <canvas
          id="myCanvas3"
          :draggable="draggable"
          @dragstart="drag"
          @dragover.prevent
        >
          Your browser does not support the HTML canvas tag.</canvas
        >
        <canvas
          id="myCanvas4"
          :draggable="draggable"
          @dragstart="drag"
          @dragover.prevent
        >
          Your browser does not support the HTML canvas tag.</canvas
        >

        <canvas
          id="myCanvas5"
          :draggable="draggable"
          @dragstart="drag"
          @dragover.prevent
        >
          Your browser does not support the HTML canvas tag.</canvas
        >
      </div>
      <div id="testCanvas"></div>
    </div>
  </div>
</template>

<script>
import $ from "jquery/dist/jquery.min";
export default {
  name: "puzzle2",
  data() {
    return {
      draggable: true,
      context: null,
      image: null,
      source: null,
      score: 0,
      changeImageSource: null,
      old: null
    };
  },
  methods: {
    startTheGame: function() {
      // let btn = document.getElementById("startgame");
      let divv = document.getElementById("modal");
      let t = document.getElementById("overlay");
      divv.style.display = "none";
      t.style.display = "none";
      this.newGame();
    },
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
        this.answerNum = sound.slice(24, 25);
      }
    },
    newGame: function() {
      canvasDrawing2();
      this.old = canvasImg.src;
      this.changeImageSource = randomize();
      canvasImg.src = "/images/puzzle/" + this.changeImageSource + ".png";
      ccvs();
      if (this.score == 6) {
        $("#finalImage")[0].style.display = "none";
        $(".answer")[0].style.display = "inline-block";
      }
      this.score = 0;
    },
    allowDrop: function(ev) {
      ev.preventDefault();
    },
    drag: function(ev) {
      ev.dataTransfer.setData("draggedCanvas", ev.target.id);
    },
    drop: function(event) {
      let parent = $(".answer")[0];

      event.preventDefault();
      var data = event.dataTransfer.getData("draggedCanvas");
      if (
        (event.target == parent.children[0] && data == "myCanvas0") ||
        (event.target == parent.children[1] && data == "myCanvas2") ||
        (event.target == parent.children[2] && data == "myCanvas4") ||
        (event.target == parent.children[3] && data == "myCanvas1") ||
        (event.target == parent.children[4] && data == "myCanvas3") ||
        (event.target == parent.children[5] && data == "myCanvas5")
      ) {
        event.target.appendChild(document.getElementById(data));
        this.score++;
        console.log(this.score);
      }

      if (this.score == 6) {
        let success = "/sounds/clap.mp3";
        this.playSound(success);
        $("#finalImage")[0].src = this.old;
        $("#finalImage")[0].style.display = "inline-block";
        $(".answer")[0].style.display = "none";
        document.getElementById("nextLevel").style.display = "inline-block";
        let levels = JSON.parse(localStorage.getItem("CardsLevels"));
        levels[6].open = true;
        localStorage.setItem("CardsLevels", JSON.stringify(levels));
      }
    }
  },

  mounted() {
    this.newGame();
    console.log("mounted");
  },
  created() {}
};

var canvasImg = new Image();
let imageSource = randomize();
canvasImg.src = "/images/puzzle/" + imageSource + ".png";

function canvasDrawing2() {
  var newCnvas = document.getElementById("testCanvas");

  var imagePieces = [];
  // var i = 0;
  let counter = 0;
  for (var x = 0; x < 3; ++x) {
    for (var y = 0; y < 2; ++y) {
      // var p = imagePieces[i++];
      var canvas = document.getElementById("myCanvas" + counter);
      var context = canvas.getContext("2d");

      canvas.width = 66.666;
      canvas.height = 110;
      //context.clearRect(0, 0, canvas.width, canvas.height);

      imagePieces.push(context);
      context.drawImage(
        canvasImg,
        x * 66.666,
        y * 110,
        66.666,
        110,
        0,
        0,
        canvas.width,
        canvas.height
      );
      shuffle(imagePieces);
      newCnvas.appendChild(imagePieces[counter].canvas);
      counter++;
    }
  }
}
function ccvs() {
  var newParent = document.getElementsByClassName("shuffle");
  var answerSpan = $(".answer span");
  for (let as = 0; as < 6; as++) {
    if (answerSpan[as].childNodes.length > 0) {
      newParent[0].appendChild(answerSpan[as].childNodes[0]);
    }
  }
}
function shuffle(a) {
  for (
    var j, x, i = a.length;
    i;
    j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x
  );
  return a;
}
function randomize() {
  let randomNumbers = [];

  for (let n = 0; n < 14; n++) {
    randomNumbers.push(n);
  }
  const idx = Math.floor(Math.random() * randomNumbers.length);
  let r = randomNumbers[idx];
  return r;
}
</script>
<style scoped>
#gameControlls {
  height: 5em;
  width: 103%;
  margin: 0em -1.5%;
  background-color: rgb(120, 173, 191);
  border-top-left-radius: 0.6em;
  border-top-right-radius: 0.6em;
}
.row {
  width: 100%;
}
#usedImage {
  width: 200;
  height: 200;
  display: none;
}
.answer,
#finalImage {
  width: 100%;
  margin: 3em 40% 2em;
}

.answer span {
  border: 1px solid black;
  display: inline-block;
  width: 52px;
  height: 210px;
}
.answer span:hover {
  border: 3px solid white;
}

.shuffle {
  margin-left: 30%;
}
.shuffle,
#testCanvas {
  display: inline-block;
}
.shuffle canvas,
#testCanvas canvas {
  border: 1px solid black;
  margin-left: 3em;
}
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  min-height: 100%;
  background-color: rgba(76, 149, 173, 0.9);
}
#modal {
  position: absolute;
  top: 40%;
  left: 35%;
  width: 300px;
  height: 200px;
  text-align: center;
  z-index: 6;
  color: rgb(11, 54, 68);
  background-color: #fff;
  border-radius: 2em;
}
#modal p {
  margin: 3em auto;
  font-family: "Comic Sans MS";
  font-size: large;
}
#startgame {
  padding: 10px;
  background-color: rgb(41, 101, 121);
  color: white;
  border-radius: 1em;
}

.nextButton {
  width: 25%;
  height: 2em;
  margin: 0.2em auto 0;
  text-align: center;
  background-color: white;
  color: rgb(120, 173, 191);
  font-family: "Comic Sans MS";
  font-size: x-large;
  border-radius: 2em;
  border: 2px solid rgb(151, 192, 206);
  transition: all 0.2s ease-in-out;
}
.nextButton:hover {
  color: rgb(120, 173, 191);
  transform: scale(0.9, 1);
  -webkit-transform: scale(0.9, 1);
  -moz-transform: scale(0.9, 1);
  border: 5px double rgb(91, 150, 170);
}
.nextButton:focus {
  color: rgb(120, 173, 191);
  outline: none;
}
.answer span canvas {
  width: 100%;
  height: 100%;
}
@media only screen and (max-width: 450px) {
  .answer {
    width: 100%;
    margin-left: 10%;
  }

  .shuffle {
    margin-left: 5%;
  }
  .shuffle canvas,
  #testCanvas canvas {
    margin-left: 0.5em;
  }
}
@media only screen and (max-width: 750px) {
  .answer {
    margin: 1em 10% 1em;
  }

  .shuffle {
    margin-left: 5%;
  }
  .shuffle canvas,
  #testCanvas canvas {
    margin-left: 0.5em;
  }
  .nextButton {
    font-size: large;
  }
}
@media only screen and (max-width: 550px) {
  .answer {
    width: 60%;
  }
}
@media only screen and (max-width: 1000px) {
  .shuffle {
    margin-left: 10%;
  }
  .shuffle canvas,
  #testCanvas canvas {
    margin-left: 1em;
  }
}
@media only screen and (max-width: 1200px) {
  .answer {
    margin: 2em 30% 1em;
  }
  .shuffle {
    margin-left: 20%;
  }
  .shuffle canvas,
  #testCanvas canvas {
    margin-left: 2em;
  }
}
.answer {
  width: 100%;
}
.answer span {
  border: 1px solid black;
  display: inline-block;
  width: 26%;
  height: 107px;
  margin-top: 0.1em;
}

#finalImage {
  width: 30%;
  margin: 4em 30% 2em;
}
</style>
