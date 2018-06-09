<template>
  <div class="weather-component">
    <h1 class="tools-item__title">Погода</h1>
    <!-- <h2 v-for="(item, index) in results" v-bind:key="index">{{item}}</h2> -->
    <p class="part-title">Темпеатура:</p>
    <h1 class="temp">{{results.temp}}°С</h1>
    <p class="part-title">Город:</p>
    <h2 class="city">
      {{results.cityName}}
      <span>
        14:00
      </span>
    </h2>
    <p class="part-title">Погода:</p>
    <h2 class="weather-def">{{results.weather}}</h2>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: "WeatherComponent",
  data() {
    return {
      results: {
        cityName: "Загрузка...",
        temp: "Загрузка...",
        weather: "Загрузка..."
      }
    };
  },
  methods: {
    getData: function() {
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/weather?q=Moscow&APPID=d4b3420eec37ef1ac747f2824ac31109&units=metric"
        )
        .then(response => {
          this.results.cityName = response.data.name;
          this.results.temp = Math.round(response.data.main.temp);
          this.results.weather = response.data.weather[0].description;
        });
    }
  },
  beforeMount: function() {
    this.getData()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.weather-component {
  // height: 600px;
  align-self: stretch;
  text-align: center;
}
.temp {
  margin-bottom: 100px;
  font-size: 60px;
  font-weight: bold;
}
.weather-def {
  text-transform: uppercase;
}
.city {
  text-transform: uppercase;
}
p:first-of-type {
  margin-top: 120px;
}
.part-title {
  text-align: left;
  margin-left: 30px;
  margin-top: 15px;
}
</style>
