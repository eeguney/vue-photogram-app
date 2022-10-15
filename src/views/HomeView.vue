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
            @append="append"
            v-if="load"
          >
            <template v-slot:default="{ item }">
              <Card :data="item" />
            </template>
          </vue-masonry-wall>
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
  computed: {
    getPhotosFromStorage() {
      return this.$store.getters.getPhotosTimeline;
    },
    getAlbumsFromStorage() {
      return this.$store.getters.getAlbums;
    },
  },
  watch: {
    getPhotosFromStorage(last) {
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

<style lang="scss" scoped></style>
