<template>
  <div class="filter-area px-2 col">
    <h3>Filter</h3>

    <TypeFilter @changeActive="changeActive" :active="imageType.value" />
    <OrientationFilter
      @changeActive="changeActive"
      :active="orientation.value"
    />
    <ColorFilter @changeActive="changeActive" :active="colors.value" />
    <SafeSearchFilter @changeActive="changeActive" :active="safesearch.value" />

    <div class="flex row mt-1">
      <button
        type="button"
        aria-label="Filter"
        class="apply-btn"
        @click="filter"
      >
        Apply
      </button>
      <button
        type="button"
        aria-label="rest"
        class="reset"
        @click="reset"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script>
import TypeFilter from "@/components/UI/Widget/Filter/Type.vue";
import OrientationFilter from "@/components/UI/Widget/Filter/Orientation.vue";
import ColorFilter from "@/components/UI/Widget/Filter/Color.vue";
import SafeSearchFilter from "@/components/UI/Widget/Filter/SafeSearch.vue";

const defaultProps = {
  imageType: { type: "imageType", value: "all" },
  orientation: { type: "orientation", value: "all" },
  colors: { type: "colors", value: "null" },
  safesearch: { type: "safesearch", value: "false" },
};

export default {
  name: "FilterWidget",
  components: {
    TypeFilter,
    OrientationFilter,
    ColorFilter,
    SafeSearchFilter,
  },
  data() {
    return {
      ...defaultProps,
    };
  },
  methods: {
    filter() {
      this.$store.dispatch("filter", [
        this.imageType,
        this.orientation,
        this.colors,
        this.safesearch,
      ]);
    },
    reset() {
      this.imageType = { type: "imageType", value: "all" };
      this.orientation = { type: "orientation", value: "all" };
      this.colors = { type: "colors", value: "null" };
      this.safesearch = { type: "safesearch", value: "false" };
      this.filter();
    },
    changeActive(type, active) {
      this[type] = { ...this[type], value: active };
      this.scrollToTop();
      this.filter();
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
.filter-area {
  h3 {
    color: var(--logo-color);
    font-weight: 500;
    font-size: 1.1rem;
    margin-bottom: 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--second-background-color);
  }
  .filter-item {
    flex: 0;
    padding: 1rem 0;
    border-bottom: 1px solid var(--second-background-color);
    label {
      margin-bottom: 10px;
      padding: 0;
      font-size: 13px;
    }
    .layout {
      display: flex;
      flex-wrap: wrap;
      .row {
        flex-wrap: wrap;
      }
      button {
        margin-right: 7px;
        margin-bottom: 7px;
        padding: 6px 1rem;
        font-size: 13px;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        transition: all 0.1s ease;
        &:hover {
          background-color: var(--four-background-color);
          .status {
            background-color: var(--logo-color);
          }
        }
        .status {
          background-color: var(--four-background-color);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 7px;
          box-shadow: 0 0 0 -0 transparent;
          transition: all 0.2s ease;
        }
        &.active {
          .status {
            background-color: var(--green-color);
            box-shadow: 0 0 9px -1px var(--green-light-color);
          }
        }
      }
    }
    .color-layout {
      display: flex;
      flex-direction: column;
      .color-picker {
        padding: 0 !important;
        background: transparent;
        width: 1.5rem;
        margin-right: 1rem !important;
        margin-bottom: 1rem;
        height: 1.5rem;
        border-radius: 50%;
        outline: 1px solid var(--four-background-color);
        border: 2px solid var(--main-background-color);
        &.active {
          outline: 2px solid var(--logo-color);
        }
        &.red {
          background: red;
        }
        &.green {
          background: green;
        }
        &.yellow {
          background: yellow;
        }
        &.white {
          background: white;
        }
        &.pink {
          background: pink;
        }
        &.gray {
          background: gray;
        }
        &.orange {
          background: orange;
        }
        &.turquoise {
          background: turquoise;
        }
        &.blue {
          background: blue;
        }
        &.lilac {
          background: #c8a2c8;
        }
        &.black {
          background: #222;
        }
        &.brown {
          background: brown;
        }
      }
      .colors {
        width: 80%;
        margin-top: 10px;
        flex-wrap: wrap;
      }
    }
  }
  .apply-btn {
    flex: 2;
    background-color: var(--blue-color);
    font-size: 14px;
    padding: 1rem;
    color: white;
    &:hover {
      background-color: var(--blue-dark-color);
    }
  }
  .reset {
    flex: 1;
    background-color: transparent;
    font-size: 14px;
    padding: 1rem;
  }
}
</style>
