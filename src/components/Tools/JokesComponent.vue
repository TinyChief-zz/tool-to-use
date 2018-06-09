<template>
  <div class="jokes-container">
    <h1 class="tools-item__title">
      Цитаты
    </h1>
    <q>{{results.quoteText}}</q>
    <p>{{results.quoteAuthor}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "JokesComponent",
  data() {
    return {
      results: {
        quoteText: "Загрузка..",
        quoteAuthor: "Великий философ"
      }
    };
  },
  methods: {
    getData: function() {
      const proxy = "https://cors-anywhere.herokuapp.com/";
      axios
        .get(
          proxy +
            "api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru"
        )
        .then(response => {
          this.results.quoteText = response.data.quoteText;
          this.results.quoteAuthor = response.data.quoteAuthor;
          console.log(this.results.quoteText);
        });
    }
  },
  beforeMount: function() {
    this.getData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.jokes-container {
  padding-top: 50px;
}
q {
  quotes: "\00ab" "\00bb";
  font-size: 16px;
}
p {
  text-align: right;
}
</style>
