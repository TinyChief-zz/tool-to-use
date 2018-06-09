<template>
  <div class="container">
    <!-- <h1>here will be next tools {{ tools }}</h1> -->
    <div class="tools grid-container">
        <component :class="'item tools-item-' + index" v-for="(hero, index) in toolNames" :key="index" v-bind:is="hero"></component>
    </div>
    <calculator-component class="calculator-container" v-if="showCalculator"></calculator-component>
    <div class="open-calculator" @click="showCalculator = !showCalculator">
      <img :src="require('../assets/calculator.png')" alt="" width="45px">
    </div>
  </div>
</template>

<script>
import WeatherComponent from "@/components/Tools/WeatherComponent";
import TranslatorComponent from "@/components/Tools/TranslatorComponent";
import NewsComponent from "@/components/Tools/NewsComponent";
import CurrencyComponent from "@/components/Tools/CurrencyComponent";
import JokesComponent from "@/components/Tools/JokesComponent";
import CalculatorComponent from "@/components/Tools/CalculatorComponent";

export default {
  components: {
    WeatherComponent,
    TranslatorComponent,
    NewsComponent,
    JokesComponent,
    CalculatorComponent,
    CurrencyComponent
  },
  name: "Tools",
  data() {
    return {
      initialNames: [
        "WeatherComponent",
        "TranslatorComponent",
        "JokesComponent",
        "NewsComponent",
        "CurrencyComponent",
      ],
      tools: [],
      toolNames: [],
      showCalculator: false,
    };
  },
  methods: {
    getTools: function() {
      return this.$route.params.tools;
    }
  },
  beforeMount: function() {
    this.tools = this.getTools();
    console.log(this.tools);
    this.tools
      .split("")
      .sort((a, b)=> {
        return a > b
      })
      .map(el => {
      this.toolNames.push(this.initialNames[el]);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body {
  position: relative;
}
.tools {
  font-size: 14px;
}
.grid-container {
  // display: flex;
  display: grid;
  grid-template-columns: 40% auto minmax(auto, 40%);
  grid-template-rows: max-content auto auto;
  align-content: start;
  // grid-gap: 10px;
}
.tools-item-0 {
  grid-column-start: span 1;
  grid-row-start: span 2;
}
.tools-item-1 {
  grid-column-start: span 2;
}
.tools-item-2 {
  grid-column-start: span 2;

  // grid-column-end: 3;
}
.tools-item-3 {
  grid-column-start: span 2;
}

.item {
  padding: 10px;
  padding-top: 50px;
  border: 1px solid peachpuff;
  position: relative;
  background-color: rgb(171, 210, 255); 
  color: rgb(7, 21, 37);
  align-self: start;
  p {
    font-size: 16px;
  }
  h2 {
    font-size: 20px;
  }
}
.tools-item__title {
  position: absolute;
  top: 0;
  right: 0;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bold;
  color: white;
  z-index: 0;
}
.open-calculator {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: blueviolet;
  // position: absolute;
  top: calc(100vh - 100px);
  right: 10%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
.calculator-container {
  // position: absolute;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,255,255, 0.4);
}
</style>
