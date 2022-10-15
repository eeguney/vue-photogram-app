<template>
  <aside :class="{openOnMobile: getFilterSection}">
    <div class="col">
      <label class="logo p-1">
        <font-awesome-icon :icon="['fas', 'fa-images']" />Photogram</label
      >
      <FilterWidget />
    </div>
  </aside>
</template>

<script>
import FilterWidget from "@/components/UI/Widget/Filter/Filter.vue";
export default {
  name: "AsideComponent",
  props: {},
  components: {
    FilterWidget,
  },
  data() {
    return {};
  },
  computed: {
    getFilterSection() {
      return this.$store.getters.getFilterSection;
    },
  },
};
</script>

<style lang="scss" scoped>
aside {
  width: 100%;
  max-width: 370px;
  display: flex;
  position: sticky;
  top: 0;
  height: 100vh;
  border-right: 1px solid var(--second-background-color);
  @media screen and (max-width: 370px) {
    max-width: 90%;
  }
  @media screen and (max-width: 1024px) {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    background-color: var(--main-background-color);
    transform: translateX(-100%);
    &.openOnMobile {
      transform: translateX(0);
    }
  }

  .col {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
  label {
    padding: 1.5rem 2rem;
  }
  .logo {
    display: flex;
    align-items: center;
    color: var(--logo-color);
    font-weight: 500;
    font-size: 1.1rem;
    border-color: var(--second-background-color);
    border-width: 0 1px 1px 0;
    border-style: solid;
    background-color: var(--header-background-color);
    svg {
      margin-right: 10px;
    }
  }
}

* {
  scrollbar-width: auto;
  scrollbar-color: var(--third-background-color) #ffffff;
}

*::-webkit-scrollbar {
  width: 4px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--third-background-color);
  border: 0px solid #ffffff;
}
</style>
