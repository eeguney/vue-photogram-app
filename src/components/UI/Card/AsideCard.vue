<template>
  <div class="card">
    <div
      class="covers center"
      :class="{ row: !load, grid: load, padding: load }"
    >
      <Loading v-show="!load" noHeight small />
      <div
        class="cover"
        v-for="item in album"
        :key="Object.values(item)[0].id"
        :style="{
          backgroundImage: `url(${Object.values(item)[0].previewURL})`,
        }"
        v-show="load"
      ></div>
    </div>
    <label>
      {{ substrTitle(Object.keys(this.album[0])[0]) }}
    </label>
  </div>
</template>

<script>
import Loading from "@/components/UI/Loading.vue";

export default {
  name: "AsideCard",
  props: {
    album: [] || null,
  },
  components: {
    Loading,
  },
  data() {
    return {
      load: false,
    };
  },
  methods: {
    substrTitle(title) {
      return title.substr(0, 20) + "...";
    },
  },
  mounted() {
    setTimeout(() => {
      this.load = true;
    }, 700);
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  animation: fromTopWithFade 0.3s ease;
  .covers {
    gap: 0.5rem;
    background-color: var(--second-background-color);
    border-radius: 5px;
    &.padding {
      padding: 10px;
    }
    &.row {
      height: 112px;
      font-size: 13px;
    }
    &:hover {
      background-color: var(--third-background-color);
      .cover {
        background-position: 60% 60%;
        filter: saturate(1.4);
        transition: all 0.3s ease;
      }
    }
    .cover {
      flex: 100%;
      height: 42px;
      background-size: cover;
      border-radius: 5px;
      background-position: 50% 50%;
      filter: saturate(1);
      transition: all 0.3s ease;
    }
  }
  label {
    font-size: 13px;
    text-align: center;
    padding: 6px 0;
    font-weight: 500;
  }
}
</style>
