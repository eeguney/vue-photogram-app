<template>
  <div class="filter-item col">
    <label>Color</label>
    <div class="layout color-layout">
      <div class="row">
        <button
          type="button"
          v-for="(item, key) in select"
          :key="key"
          :class="{
            active:
              active == item.toLowerCase() ||
              (active == 'null' && item == 'All'),
          }"
          :aria-label="`${item} orientation type`"
          @click="$emit('changeActive', 'colors', item.toLowerCase())"
        >
          <span class="status"></span> {{ item }}
        </button>
      </div>
      <div class="colors row">
        <button
          type="button"
          v-for="(item, key) in colors"
          :key="key"
          class="color-picker"
          :class="[
            { active: active == item.toLowerCase() },
            item.toLowerCase(),
          ]"
          :aria-label="`${item} color type`"
          @click="$emit('changeActive', 'colors', item.toLowerCase())"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorFilter",
  props: {
    active: String,
  },
  data() {
    return {
      select: ["All", "Grayscale", "Transparent"],
      colors: [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Turquoise",
        "Blue",
        "Brown",
        "Lilac",
        "Pink",
        "White",
        "Gray",
        "Black",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
