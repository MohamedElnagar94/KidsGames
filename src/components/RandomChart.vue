<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
import LineChart from "./../LineChart.js";

export default {
  components: {
    LineChart
  },
  props: ["chartData1", "chartData2", "allDegrees"],
  data() {
    return {
      datacollection: null,
      kidDegree1: [],
      gameName1: [],
      kidDegree2: [],
      gameName2: [],
      dateDegree: []
    };
  },
  created() {
    this.kidDegreeNum1();
    this.kidDegreeNum2();
    this.createNames1();
    this.createNames2();
    this.createDate();
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: this.dateDegree,
        datasets: [
          {
            label: "Practice 1 ( + , - )",
            backgroundColor: "#84BED6",
            data: this.kidDegree1
          },
          {
            label: "Practice 2 ( < , > , = )",
            backgroundColor: "#B5D56A",
            data: this.kidDegree2
          }
        ]
      };
    },
    kidDegreeNum1: function() {
      //   console.log(this.chartData[0].game.game_name)
      for (let i = 0; i < this.chartData1.length; i++) {
        this.kidDegree1.push(this.chartData1[i].kid_degree);
      }
    },
    kidDegreeNum2: function() {
      //   console.log(this.chartData[0].game.game_name)
      for (let i = 0; i < this.chartData2.length; i++) {
        this.kidDegree2.push(this.chartData2[i].kid_degree);
      }
    },
    createNames1: function() {
      for (let i = 0; i < this.chartData1.length; i++) {
        this.gameName1.push(this.chartData1[i].game.game_name);
      }
    },
    createNames2: function() {
      for (let i = 0; i < this.chartData2.length; i++) {
        this.gameName2.push(this.chartData2[i].game.game_name);
      }
    },
    createDate: function() {
      for (let i = 0; i < this.allDegrees.length; i++) {
        var d = new Date(this.allDegrees[i].created_at),
          month = "" + (d.getMonth() + 1),
          day = "" + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        // return [year, month, day].join('-');
        // let date = new Date(this.chartData[i].created_at,"yyyy-MM-dd")
        console.log([year, month, day].join("-"));
        this.dateDegree.push([year, month, day].join("-"));
      }
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
