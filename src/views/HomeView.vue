<template>
  <Layout sidebar footer header>
    <div class="row">
      <div class="col flex-1 py-1 md-pl-1">
        <TimelineHeader />

        <Loading v-show="!load" />

        <template v-if="load">
          <vue-masonry-wall
            :items="getPhotosFromStorage"
            :options="{ width: 300, padding: 10 }"
            v-if="load"
          >
            <template v-slot:default="{ item }">
              <Card :data="item" />
            </template>
          </vue-masonry-wall>
          <!-- infinite scroll loading -->
          <span v-show="$store.getters.getFetchStatus" class="infinite-status">
            <font-awesome-icon
              class="loading-spinner"
              :icon="['fas', 'fa-spinner']"
              size="lg"
            />Loading...
          </span>
        </template>

        <InfoAlert
          v-if="load && getPhotosFromStorage == null"
          text="Ups... 😪 We couldn't find what you're looking for."
        />
      </div>

      <Albums :albums="getAlbumsFromStorage" />
    </div>
  </Layout>
</template>

<script>
import VueMasonryWall from "vue-masonry-wall";
import Layout from "@/components/Layout.vue";
import Card from "@/components/UI/Card/Card.vue";
import Loading from "@/components/UI/Loading.vue";
import Albums from "@/components/UI/Widget/Albums.vue";
import TimelineHeader from "@/components/UI/TimelineHeader.vue";
import InfoAlert from "@/components/UI/Alert/Info.vue";
import { nextTick } from "vue";

export default {
  components: {
    Layout,
    Card,
    VueMasonryWall,
    Loading,
    Albums,
    TimelineHeader,
    InfoAlert,
  },
  data() {
    return {
      load: false,
    };
  },
  async created() {
    await this.$store.dispatch("fetchAll");
  },
  methods: {
    async fetchMore() {
      await this.$store.dispatch("fetchMore");
    },
  },
  computed: {
    getPhotosFromStorage() {
      return this.$store.getters.getPhotosTimeline;
    },
    getAlbumsFromStorage() {
      return this.$store.getters.getAlbums;
    },
  },
  async updated() {
    await nextTick();
    if (this.load == true) {
      setTimeout(() => {
        window.onscroll = () => {
          const div = document.querySelector(".content-inner");
          if (window.innerHeight + window.scrollY >= div.offsetHeight) {
            this.fetchMore();
            this.$state.commit("setFetchStatus", false);
          }
        };
      }, 1500);
    }
  },
  watch: {
    async getPhotosFromStorage(last) {
      if (last == null || last == []) {
        this.load = false;
        if (this.getSearchTextFromStorage == "") {
          this.$store.dispatch("fetchPopular");
          return;
        }
      }
      setTimeout(() => {
        this.load = true;
      }, 700);
    },
  },
  beforeRouteEnter(to, from, next) {
    switch (to.name) {
      case "latest":
        next((vm) => {
          vm.$store.dispatch("fetchLatest");
        });
        break;
      case "home":
        next((vm) => {
          vm.$store.dispatch("fetchPopular");
        });
        break;
      default:
        break;
    }
  },
};
</script>

<style lang="scss" scoped>
.infinite-status {
  display: flex;
  justify-content: center;
  padding: 2rem;
  font-size: 1rem;
  align-items: center;
  svg {
    margin-right: 1rem;
  }
}
</style>
