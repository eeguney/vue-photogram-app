<template>
  <div class="page" :class="{ col: col, loginPage: login }">
    <div class="container">
      <Aside v-if="sidebar" />
      <div
        class="content col"
        :class="{ center: center, h100: login, center: login }"
      >
        <Header v-if="header" />
        <div class="content-inner" v-if="!login">
          <slot />
        </div>
        <slot v-else />
        <Footer v-if="footer" />
      </div>
    </div>
    <div
      class="backdrop-on-mobile"
      v-show="filterSection"
      @click="$store.commit('toggleFilterSection')"
    >
      {{ filterSection }}
    </div>
  </div>
</template>

<script>
import Aside from "@/components/Aside.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  name: "LayoutComponent",
  components: {
    Aside,
    Header,
    Footer,
  },
  props: {
    header: {
      type: Boolean,
    },
    center: {
      type: Boolean,
      default: false,
    },
    sidebar: {
      type: Boolean,
      default: false,
    },
    footer: {
      type: Boolean,
      default: false,
    },
    col: {
      type: Boolean,
      default: false,
    },
    login: Boolean,
  },
  computed: {
    filterSection() {
      return this.$store.getters.getFilterSection;
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  background-color: var(--main-background-color);
  min-height: 100vh;
  &.loginPage {
    background-color: var(--login-background-color);
    @media screen and (min-width: 600px) {
      background-color: var(--login-background-color);
    }
  }
  @media screen and (min-width: 600px) {
    background-color: var(--main-background-color);
  }
  .container {
    display: flex;
    flex: 1;
    .content {
      flex: 1;
      display: flex;
      &.h100 {
        height: 100vh;
      }
      .content-inner {
        flex: 1;
        padding: 0 1rem;
        border-top: 1px solid var(--second-background-color);
      }
    }
    @media screen and (min-width: 600px) {
      .center {
        padding: 2rem;
      }
    }
  }
}
</style>
