<template>
  <div class="albums" :class="{ closed: closed }">
    <div class="col py-1 sticky-albums">
      <button
        type="button"
        aria-label="Close albums section"
        class="close-section right"
        @click="toggleSection"
      >
        <font-awesome-icon :icon="['fas', 'fa-right-from-bracket']" size="sm" />
      </button>
      <div class="col closeable">
        <label class="pl-2 pt-1">
          <font-awesome-icon :icon="['fas', 'fa-images']" />Albums</label
        >
        <div class="grid py-1 px-1">
          <AsideCard v-for="item in albums" :key="item.id" :album="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AsideCard from "@/components/UI/Card/AsideCard.vue";

export default {
  name: "AlbumsComponent",
  props: {
    albums: Array,
  },
  data() {
    return {
      closed: false,
    };
  },
  components: {
    AsideCard,
  },
  mounted() {
    const showAlbumSection = JSON.parse(
      localStorage.getItem("showAlbumSection")
    );
    if (showAlbumSection) {
      this.closed = Boolean(showAlbumSection);
    }
  },
  methods: {
    toggleSection() {
      this.closed = !this.closed;
      localStorage.setItem("showAlbumSection", JSON.stringify(this.closed));
      this.$store.dispatch("destroySearching");
    },
  },
};
</script>

<style lang="scss" scoped>
.albums {
  width: 420px;
  margin-left: 2rem;
  border-left: 1px solid var(--second-background-color);
  transition: all 0.1s ease;
  @media screen and (max-width: 1340px) {
    display: none;
  }
  @media screen and (max-width: 1450px) {
    width: 310px;
  }
  .closeable {
    overflow: hidden;
    transition: all 0.1s ease;
    opacity: 1;
  }
  &.closed {
    width: 0;
    transition: all 0.3s ease;
    .closeable {
      width: 0;
      opacity: 0;
    }
  }
  .sticky-albums {
    position: sticky;
    top: 73px;
  }
  label {
    display: flex;
    align-items: center;
    color: var(--logo-color);
    font-weight: 500;
    font-size: 1.1rem;
    padding-top: 10px;
    svg {
      margin-right: 10px;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    max-height: 100%;
    background: var(--main-background-color);
    overflow-y: auto;
    padding-left: 2rem;
    @media screen and (max-width: 1450px) {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
