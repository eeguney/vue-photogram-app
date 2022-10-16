<template>
  <div
    class="page"
    :class="{ col: col, loginPage: login, overflowHiddenW100: backdrop }"
  >
    <div class="container">
      <Aside v-if="sidebar" :footer="footer" />
      <div
        class="content col"
        :class="{ center: center, h100: login, center: login }"
      >
        <Header v-if="header" />
        <div
          class="content-inner"
          :class="{ heightAuto: heightAuto }"
          v-if="!login"
        >
          <slot />
        </div>
        <slot v-else />
      </div>
    </div>
    <div
      class="backdrop-on-mobile"
      v-show="filterSection"
      @click="$store.commit('toggleFilterSection')"
    ></div>
    <div class="backdrop-on-modal" v-show="backdrop"></div>
  </div>
</template>

<script>
import Aside from "@/components/Aside.vue";
import Header from "@/components/Header.vue";

export default {
  name: "LayoutComponent",
  components: {
    Aside,
    Header,
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
    heightAuto: Boolean,
  },
  computed: {
    filterSection() {
      return this.$store.getters.getFilterSection;
    },
    backdrop() {
      return this.$store.getters.getBackdrop;
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  background-color: var(--main-background-color);
  min-height: 100vh;
  &.overflowHiddenW100 {
    overflow: hidden;
    height: 100vh;
  }
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
        min-height: 120vh;
        border-top: 1px solid var(--second-background-color);
        &.heightAuto {
          min-height: auto;
        }
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
