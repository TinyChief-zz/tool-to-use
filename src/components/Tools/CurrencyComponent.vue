<template>
  <div class="currency-container">
    <h1 class="tools-item__title currency-title">
      Курс валют
    </h1>
    <h2 class="currency-item"><span class="icon">$</span>{{results.usd}} руб.</h2>
    <h2 class="currency-item"><span class="icon">€</span>{{results.euro}} руб.</h2>    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "CurrencyComponent",
  data() {
    return {
      results: {
        usd: 'Загрузка...',
        euro: 'Загрузка...'
      }
    };
  },
  methods: {
    getData: function() {
      axios.get("https://www.cbr-xml-daily.ru/daily_json.js").then(response => {
        this.results.usd = response.data.Valute.USD.Value;
        this.results.euro = response.data.Valute.EUR.Value;
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
@import "@/style/_vars.scss";

.currency-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.currency-item {
  flex-basis: 100%;
  display: flex;
  align-items: center
}
.icon {
  font-weight: bold;
  font-size: 30px;
  margin-right: 15px;
}
.currency-title {
  @include for-tablet {
    font-size: 26px;
  }
}
</style>
