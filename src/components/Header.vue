<template>
  <header>
    <div class="logo">
      <!-- <h3><router-link :to="{ path : '/' }" class="logo-link">Usefool Tools</router-link></h3> -->
      <h3><a class="logo-link" href="/">USEFOOL TOOLS</a></h3>
    </div>
    <nav>
      <ul>
        <li>
          <router-link :to="{ path : 'guide' }" class="nav-link">Гайд</router-link>
        </li>
        <li>
          <router-link :to="{ path : 'feedback' }" class="nav-link">Отзывы</router-link>
        </li>
        <li>
          <router-link :to="{ path : 'contact' }" class="nav-link">Контакты</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/_vars.scss";

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include for-tablet() {
    margin-bottom: 30px;
  }
}
ul {
  display: flex;
  justify-content: space-between;
  margin: 0;
  @include for-tablet() {
    display: none;
  }
}
.logo {
  @include for-tablet() {
    padding: 20px 0;
  }
  a {
    padding: 0;
  }
}
a {
  padding: 25px 20px;
  font-weight: bold;
}
// Для активной ссылки в навигации
.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
