<template>
  <div class="row items-center justify-between mb-1">
    <div class="row">
      <!-- filter button on mobile -->
      <button
        type="button"
        class="filter-button-mobile"
        @click="$store.commit('toggleFilterSection')"
      >
        <font-awesome-icon :icon="['fas', 'fa-filter']" size="sm" />
      </button>
      <label
        class="search-label"
        v-if="getSearchTextFromStorage && getSearchTextFromStorage != ''"
      >
        <button
          type="button"
          class="cancel-search-btn"
          @click="$store.dispatch('destroySearching')"
        >
          <font-awesome-icon :icon="['fas', 'fa-xmark']" size="sm" />
        </button>
        {{ getSearchTextFromStorage }} searching...
      </label>
    </div>
    <div class="order">
      <router-link to="/">Popular</router-link>
      <router-link to="/latest">Latest</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimelineHeader",
  computed: {
    getSearchTextFromStorage() {
      return this.$store.getters.getSearchText;
    },
  },
};
</script>

<style lang="scss" scoped>
.cancel-search-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  padding: 0;
  margin-right: 5px;
  transition: all 0.2s ease;
  &:hover {
    background-color: red;
    color: white;
  }
}
.filter-button-mobile {
  display: block;
  background: var(--main-background-color);
  padding: 6px 10px;
  font-size: 14px;
  @media screen and (min-width: 1024px) {
    display: none;
  }
}
.order {
  display: inline-flex;
  padding: 5px;
  border-radius: 5px;
  height: 45px;
  a {
    padding: 5px 10px;
    color: var(--logo-color);
    font-weight: 500;
    font-size: 13px;
    border-radius: 5px;
    &.router-link-exact-active {
      background: var(--blue-color);
      color: white;
    }
  }
}
.search-label {
  font-size: 12px;
}
</style>
