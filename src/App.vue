<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "@/style/_vars.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url("assets/bg.png") center center;
  background-size: cover;
  // min-height: 100vh;
  color: $mainColor;
  font-size: 16px;
}

a {
  color: $mainColor;
  &:hover {
    color: $mainColor;
    text-decoration: none;
  }
}

li {
  text-decoration: none;
}

ul {
  list-style: none;
}

.container {
  min-height: 100vh;
  @include for-desktop() {
    max-width: $smDesktopWidth;
  }
  @include for-small-desktop() {
    max-width: $tabletWidth;
  }
  @include for-tablet() {
    max-width: $phoneWidth;
  }
  @include for-phone() {
    max-width: $smPhoneWidth;
  }
  @include for-small-phone() {
    max-width: $smPhoneWidth - 50px;
  }
}

p {
  margin: 0;
}
</style>
