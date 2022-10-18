<template>
  <Layout sidebar footer header>
    <div class="row">
      <div class="col flex-1 py-1 md-pl-1 mb-5">

        <Loading v-show="!load" />

        <template v-if="load">
          <vue-masonry-wall
            :items="getPhotosFromStorage"
            :options="{ width: 300, padding: 10 }"
            v-if="load && getPhotosFromStorage != 'not-found'"
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
        v-if="load & (getPhotosFromStorage == 'not-found')"
          text="Ups... 😪 We couldn't find what you're looking for."
        />
      </div>

    </div>
  </Layout>
</template>

<script>
import VueMasonryWall from "vue-masonry-wall";
import Layout from "@/components/Layout.vue";
import Card from "@/components/UI/Card/Card.vue";
import Loading from "@/components/UI/Loading.vue";
import InfoAlert from "@/components/UI/Alert/Info.vue";

import { nextTick } from "vue";

export default {
  components: {
    Layout,
    Card,
    VueMasonryWall,
    Loading,
    InfoAlert,
  },
  data() {
    return {
      load: false,
    };
  },
  methods: {
    async fetchMore() {
      await this.$store.dispatch("fetchMore");
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    getPhotosFromStorage() {
      return this.$store.getters.getPhotosTimeline;
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
      } else {
        this.load = true;
      }
      setTimeout(() => {
        this.load = true;
      }, 700);
    },
  },
  beforeRouteEnter(to, from, next) {
    switch (to.name) {
      case "tag":
        next((vm) => {
          vm.scrollToTop()
          vm.$store.dispatch("search", vm.$route.params.tag);
        });
        break;

      default:
        next();
        break;
    }
  },
  beforeRouteUpdate(to) {
      this.$store.dispatch("search", to.params.tag);
  },
  beforeRouteLeave(to, from, next) {
    if (from.name == "tag") {
      this.$store.dispatch("destroySearching");
      next();
    }
    next();
  },
};
</script>

<style lang="scss" scoped>
.mb-5 {
  margin-bottom: 5rem;
}
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
