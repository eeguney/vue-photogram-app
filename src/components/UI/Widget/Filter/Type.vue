<template>
  <div class="filter-item col">
    <label>Type</label>
    <div class="layout">
      <button
        type="button"
        :class="{ active: item.toLowerCase() == active }"
        v-for="(item, key) in types"
        :key="key"
        :aria-label="`${item.toLowerCase()} type`"
        @click="$emit('changeActive', 'imageType', item.toLowerCase())"
      >
        <span class="status"></span> {{ item }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeFilter",
  data() {
    return {
      types: ["All", "Photo", "Illustration", "Vector"],
    };
  },
  props: {
    active: String,
  },
};
</script>

<style lang="scss" scoped></style>
