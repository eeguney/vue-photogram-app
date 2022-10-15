<template>
  <div class="filter-item col">
    <label>Orientation</label>
    <div class="layout">
      <button
        type="button"
        v-for="(item, key) in orientations"
        :class="{ active: item.toLowerCase() == active }"
        :key="key"
        :aria-label="`${item.toLowerCase()} orientation type`"
        @click="$emit('changeActive', 'orientation', item.toLowerCase())"
      >
        <span class="status"></span> {{ item == "All" ? "All" : "" }}
        <font-awesome-icon
          v-if="item == 'Horizontal'"
          :icon="['fas', 'fa-left-right']"
        />
        <font-awesome-icon
          v-if="item == 'Vertical'"
          :icon="['fas', 'fa-up-down']"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrientationFilter",
  props: {
    active: String,
  },
  data() {
    return {
      orientations: ["All", "Horizontal", "Vertical"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
