<template>
  <div class="container">
    <div class="index-wrapper row">
      <div class="text col-md-7 col-xs-12">
        <h1 class="title">Все инструменты в <span>одном</span> месте.</h1>
        <h3 class="subtitle">{{ showText }}</h3>
      </div>
      <div class="tools col">
        <!-- Tools -->
        <div :class="'tools-item ' + index" v-for="(tool, index) in items" v-bind:key="index" v-on:mouseover="showEl(index)">
          <img :src="require('../assets/' + tool.url)" alt="">
          <p>{{ tool.text }}</p>
        </div>
      </div>
      <div class="second-row col">
        <div ref="target" class="tools-use">
          <span v-if="false">Перетащите сюда.</span>
        </div>
        <div class="buttons">
          <a href="" @click.prevent="chooseAll()">Выбрать все и начать</a>
          <a href="" @click.prevent="wasChoosed()">Составить из выбранных</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const tools = [
  {
    url: "005-sun.png",
    text: "Погода",
    example: "В Москве 20 тепла 🌤."
  },
  {
    url: "003-language.png",
    text: "Переводчик",
    example: "🇺🇸 adventure ––> приключение 🇷🇺"
  },
  {
    url: "001-buffoon.png",
    text: "Цитаты",
    example: "Все можно пережить, если подобрать подходящую песню."
  },
  {
    url: "002-text-lines.png",
    text: "Новости",
    example: "ЧМ в Москве стартует 14 июня."
  },
  {
    url: "004-cash.png",
    text: "Курс валют",
    example: "$1 ––> 60₽"
  },
  {
    url: "006-calculator.png",
    text: "Калькулятор",
    example: "83 * 52 = 4316"
  }
];

export default {
  name: "Main",
  data() {
    return {
      items: tools,
      idHover: -1,
      itemsChoosed: []
    };
  },
  methods: {
    showEl: function(id) {
      this.idHover = id;
    },
    wasChoosed: function() {
      this.itemsChoosed.length = 0;
      let a = "";
      const to = document.querySelector(".tools-use");
      for (var i = 0; i < to.children.length; ++i) {
        this.itemsChoosed.push(parseInt(to.children[i].classList[1]));
        a += to.children[i].classList[1];
      }
      console.log(a);
      this.$router.push({
        path: `/tools/${a}`
      });
    },
    chooseAll: function() {
      var a = "";
      for (var i = 0; i < tools.length; ++i) {
        a += i;
      }
      this.$router.push({
        path: `/tools/${a}`
      });
    }
  },
  computed: {
    showText: function() {
      if (this.idHover != -1) {
        return tools[this.idHover].example;
      } else if (this.idHover == -1) {
        return "Один сайт вместо десятков.";
      }
    }
  },
  mounted() {
    const from = document.querySelector(".tools");
    const to = document.querySelector(".tools-use");
    var drake = dragula([from, to], {
      copy: function(el, source) {
        // При перемещении элементы копируются
        return !el.classList.contains("choosed");
      },
      invalid: function(el, target, source, sibling) {
        // Не перемещать из контейнера From
        return el.classList.contains("dropped");
      },
      removeOnSpill: function() {
        // Удалять из контейнера To
        return true;
      },
      accepts: function(el, target, source, sibling) {
        // Не перемещать из To в From
        if (source == to && target == from) {
          return false;
        } else {
          return true;
        }
      }
    });

    // Добавить класс dropped, если элемент уже был перенесен
    drake.on("drop", function(el, target, source, sibling) {
      el.classList += " choosed";
      for (var i = 0; i < from.children.length; ++i) {
        if (from.children[i].classList.contains(el.classList[1])) {
          from.children[i].classList += " dropped";
        }
      }
    });
    // Убирать класс dropped, если элемент был удален
    drake.on("remove", function(el) {
      const tag = el.classList[2];
      for (var i = 0; i < from.children.length; ++i) {
        if (from.children[i].classList.contains(el.classList[1])) {
          console.log("here");
          from.children[i].classList.remove("dropped");
        }
      }
    });
  }
  // created() {
  //   let dracula = document.createElement("script");
  //   dracula.setAttribute("src", "assets/dracula.js");
  //   document.head.appendChild(dracula);
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/_vars.scss";

.index-wrapper {
  display: flex;
  align-items: center;
  min-height: 600px;
  padding-bottom: 30px;
}

.text {
  margin-bottom: 30px;
}

.title {
  font-size: 60px;
  font-weight: bolder;
  line-height: 1.05;
  @include for-tablet() {
    font-size: 46px;
  }
  span {
    color: coral;
  }
}

.subtitle {
  font-size: 18px;
  font-weight: thin;
  font-style: italic;
  // text-align: center;
}

.tools {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    max-width: 450px;
  }
  @include for-tablet {
    justify-content: space-evenly;
    margin-bottom: 20px;
  }
}

.tools-item {
  margin: 10px;
  width: 100px;
  height: 100px;
  border: 4px solid rgba(219, 219, 219, 0.507);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  img {
    flex-basis: 1;
    width: 60px;
    // height: 60px;
  }
  p {
    font-size: 14px;
  }
}

.second-row {
  justify-self: flex-end;
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.tools-use {
  width: 70%;
  margin-bottom: 15px;
  background-color: rgba(46, 46, 46, 0.5);
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
  justify-content: flex-start;
  border: 8px solid rgba(219, 219, 219, 0.507);
  @include for-small-desktop() {
    width: 60%;
  }
  @include for-tablet {
    width: 100%;
    min-height: 150px;
    justify-content: space-evenly;
  }
  span {
    justify-self: center;
    align-content: center;
    align-self: center;
    // display: block;
    width: 100%;
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
  }
}



.dropped {
  background-color: rgba(20, 212, 106, 0.5);
}

// .choosed {
//   // background-color: rgba(223, 223, 223, 0.5);
// }
.buttons {
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  @include for-tablet {
    flex: 1;
  }
  a {
    padding: 8px 10px;
    display: block;
    margin: 10px;
    background-color: #fafafa;
    color: #070707;
    border-radius: 7px;
    transition: background-color 0.2s ease-out;
    &:hover {
      color: #fafafa;
      background-color: coral;
    }
  }
}
</style>
