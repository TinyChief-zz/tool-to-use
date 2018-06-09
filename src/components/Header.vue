<template>
    <header>
      <div class="container">

      <div class="logo">
        <!-- <h3><router-link :to="{ path : '/' }" class="logo-link">Usefool Tools</router-link></h3> -->
        <h3><a class="logo-link" href="/">USEFOOL TOOLS</a></h3>
      </div>
      <nav>
        <ul class="nav">
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
      <button class="hamburger " type="button" @click="isActive = !isActive" :class="[buttonClass, isActive ? activeClass : '']">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      <div class="mobile-nav" :style="isActive ? mobileNavClass : ''">
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
      </div>
      </div>
    </header>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      buttonClass: "hamburger hamburger--collapse",
      activeClass: "is-active",
      isActive: false,
      mobileNavClass: {
        maxHeight: "500px",
        transition: "max-height 0.5s ease-in"
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/_vars.scss";
@import "@/style/hamburgers/hamburgers.scss";

.container {
  min-height: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @include for-tablet {
    flex-wrap: wrap;
  }
}

header {
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0.2);
}

ul.nav {
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
  h3 {
    margin-bottom: 0;
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

.hamburger {
  transform: scale(0.5);
  border: 3px solid white;
  border-radius: 14px;
  position: absolute;
  right: 0;
  top: 5px;
  transform: scale(0.8);
  display: none;
  @include for-tablet {
    display: inline-flex;
  }
}

.mobile-nav {
  flex-basis: 100%;
  transition: max-height 0.3s ease-out;
  max-height: 0;
  overflow: hidden;
  display: none;
  @include for-tablet {
    display: block;
  }
  ul {
    padding: 0;
    li {
      border-bottom: 1px solid coral;
      &:last-child {
        border-bottom: none;
      }
    }
    a {
      padding: 8px 10px;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>
