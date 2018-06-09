<template>
  <div class="news-container">
    <h1 class="tools-item__title">Новости</h1>
    {{shortDescription}}
    <ul>

      <li
        v-for="(item, index) in results"
        v-bind:key="index"
      >
        <h4>{{item.title}}</h4>
        <p>{{item.description}}</p>
        <a href="#">подробнее</a>
      </li>

    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewsComponent",
  data() {
    return {
      results: []
    };
  },
  methods: {
    getData: function() {
      var url =
        "https://newsapi.org/v2/top-headlines?" +
        "country=ru&" +
        "pageSize=5&" +
        "apiKey=b88a27ab31564a88b703bd6f5f37960c";
      axios.get(url).then(response => {
        this.results = response.data.articles;
      });
    }
  },
  computed: {
    shortDescription: function() {
      this.results.map(el => {
        if (el.description) {
          el.description = el.description.slice(0, 80) + '...'
        }
      })
    }
  },
  beforeMount: function() {
    this.getData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/_vars.scss";

ul {
  // list-style: circle;
  padding-left: 20px;
  @include for-tablet {
    padding-left: 10px;
  }
}
li {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;  
  position: relative;
  &::before {
    content: 	"•";
    position: absolute;
    left: -15px;
    font-size: 20px;
    line-height: 1;
  }
}
h4 {
  font-size: 18px;
  font-weight: bolder;
  margin-bottom: 0;
  width: 100%;
}
a {
  margin-right: 20px;
  color: darkblue;
  font-style: italic;
  text-decoration: underline;
}
p {
  font-size: 15px;
}
</style>