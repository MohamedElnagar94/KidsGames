<template>
  <!-- MAIN SECTION -->
  <section class="mainContent full-width clearfix">
    <div class="container">
      <div class="row text-left">
        <div class="col-sm-4 col-xs-12">
          <div class="teachersPhoto">
            <img
              src="/storage/Images/child2.jpeg"
              alt="image"
              class="img-rounded img-responsive"
            />
            <!-- <input accept="image/*" type="file" @change=uploadImage> -->
          </div>
        </div>
        <div class="col-sm-8 col-xs-12">
          <div class="teachersInfo">
            <h3>Kid Information</h3>
            <div class="teachersProfession bg-color-1">Kid Name</div>
            <div class="professionDetails">{{ $root.auth.kid_name }}</div>
            <div class="teachersProfession bg-color-6">Class Number</div>
            <div class="professionDetails">{{$root.auth.class_number}}</div>
            <div class="teachersProfession bg-color-3">Parent Email</div>
            <div class="professionDetails">{{$root.auth.email}}</div>
            <div class="teachersProfession bg-color-4">Nursery Name</div>
            <div class="professionDetails">
              {{$root.auth.nurseryName}}
            </div>
            <div class="teachersProfession bg-color-5">Nursery Email</div>
            <div class="professionDetails">{{$root.auth.nurseryEmail}}</div>
            <div class="teachersProfession bg-color-2">Degree</div>
            <div class="professionDetails" style="display: contents;">
              <div class="small">
                <LineChart :chart-data="datacollection"></LineChart>
              </div>
              <div class="small">
                <LineChart :chart-data="datacollection2"></LineChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
// import {Chart} from 'highcharts-vue'
// import Chart from "@/components/RandomChart.vue";
import LineChart from "./../LineChart.js";
export default {
  mounted() {
    console.log("Component mounted.");
    this.fillData();
  },
  data() {
    return {
      degress: [],
      datacollection: null,
      datacollection2: null,
      kidDegree1: [],
      gameName1: [],
      kidDegree2: [],
      gameName2: [],
      dateDegree: [],
      dateDegree2:[],
      // previewImage:null,
      // image : null,
      // imageUrl: null
    };
  },
  methods: {
    // uploadImage(e){
    //     const image = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.readAsDataURL(image);
    //     reader.onload = e =>{
    //         this.previewImage = e.target.result;
    //         console.log(this.previewImage);
    //     };
    //     this.image = image
    //     this.imageUrl = URL.createObjectURL(image)
    //     let data = new FormData();
    //     data.append('name', image, image.name);
    //     data.append('file', image); 
    // },
    fillData: function() {
      this.datacollection = {
        labels: this.dateDegree,
        datasets: [
          {
            label: "Practice 1 ( + , - )",
            backgroundColor: "#84BED6",
            data: this.kidDegree1
          }
        ]
      };
      this.datacollection2 = {
        labels: this.dateDegree2,
        datasets: [
          {
            label: "Practice 2 ( < , > , = )",
            backgroundColor: "#B5D56A",
            data: this.kidDegree2
          }
        ]
      };
    },
    kidDegreeNum1: function() {
      for (let i = 0; i < this.numberExam1.length; i++) {
        this.kidDegree1.push(this.numberExam1[i].kid_degree);
      }
    },
    kidDegreeNum2: function() {
      for (let i = 0; i < this.numberExam2.length; i++) {
        this.kidDegree2.push(this.numberExam2[i].kid_degree);
      }
    },
    createNames1: function() {
      for (let i = 0; i < this.numberExam1.length; i++) {
        this.gameName1.push(this.numberExam1[i].game.game_name);
      }
    },
    createNames2: function() {
      for (let i = 0; i < this.numberExam2.length; i++) {
        this.gameName2.push(this.numberExam2[i].game.game_name);
      }
    },
    createDate: function() {
      for (let i = 0; i < this.numberExam1.length; i++) {
        var d = new Date(this.numberExam1[i].created_at),
          month = "" + (d.getMonth() + 1),
          day = "" + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        console.log([year, month, day].join("-"));
        this.dateDegree.push([year, month, day].join("-"));
      }
    },
    createDate2: function() {
      for (let i = 0; i < this.numberExam2.length; i++) {
        var d = new Date(this.numberExam2[i].created_at),
          month = "" + (d.getMonth() + 1),
          day = "" + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        console.log([year, month, day].join("-"));
        this.dateDegree2.push([year, month, day].join("-"));
      }
    }
  },
  created() {
    axios
      .get(
        `http://127.0.0.1:8000/api/degree?kid_id=${this.$root.auth.id}`,

        { headers: { _token: this.$root.auth.access_token } }
      )
      .then(response => {
        // console.log(response.data.data);
        this.degress = response.data.data;
        this.kidDegreeNum1();
        this.kidDegreeNum2();
        this.createNames1();
        this.createNames2();
        this.createDate();
        this.createDate2();
        this.fillData();
      })
      .catch(() => {}).finally(()=>{
      });
  },
  components: {
    LineChart
  },
  computed: {
    numberExam1: function() {
      return this.degress.filter(item => item.game_id === 6);
    },
    numberExam2: function() {
      return this.degress.filter(item => item.game_id === 7);
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 10px auto;
}
.chartjs-size-monitor,
.chartjs-size-monitor-expand,
.chartjs-size-monitor-shrink {
  position: unset;
}
</style>
