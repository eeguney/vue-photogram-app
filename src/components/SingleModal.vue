<template>
  <div class="fixed p-2" v-if="photo">
    <div class="single-layout col center">
      <div class="image-post">
        <Loading v-show="!getImageLoad" single />
        <header class="row" v-show="getImageLoad">
          <span class="category">{{ photo.type }}</span>
          <div class="photo-info row">
            <li>
              <font-awesome-icon :icon="['fas', 'fa-thumbs-up']" size="xs" />
              {{ photo.likes }}
            </li>
            <li>
              <font-awesome-icon :icon="['fas', 'fa-comment']" size="xs" />
              {{ photo.comments }}
            </li>
          </div>
        </header>
        <img
          :src="photo.largeImageURL"
          :alt="photo.tags"
          class="single-image"
          v-show="getImageLoad"
          @load="imageload = true"
        />
        <footer class="row justify-center" v-show="getImageLoad">
          {{ photo.tags }}
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/UI/Loading.vue";
import Axios from "axios";

export default {
  name: "SingleModal",
  components: {
    Loading,
  },
  data() {
    return {
      photo: [],
      imageload: false,
    };
  },
  computed: {
    getImageLoad() {
      return this.imageload;
    }
  },
  async mounted() {
    try {
      const response = await Axios.get(
        `${process.env.VUE_APP_PHOTOS_URL}&id=${this.$route.params.id}`
      );
      if (response) {
        this.photo = { ...response.data.hits[0] };
      } else {
        this.photo = null;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.single-layout {
  height: 100%;
  width: 100%;
  color: white;
  .loading-container {
    margin: 0;
  }
  .single-image {
    max-width: 100%;
    border-radius: 1rem;
    box-shadow: 0 3px 18px -5px #000;
    background-color: var(--main-background-color);
    max-height: calc(100vh - 200px);
  }
}
.image-post {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
header,
footer {
  width: 100%;
  padding: 1rem;
}
header {
  justify-content: space-between;
  .category {
    text-transform: capitalize;
    padding: 5px 12px;
    background-color: var(--blue-color);
    font-size: 14px;
    font-weight: 600;
    border-radius: 5px;
  }
  .photo-info {
    align-items: center;
    li {
      list-style: none;
      padding: 0 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
}
footer {
  justify-content: center;
}
@keyframes backgroundChange {
  0% {
    background: var(--main-background-color);
  }
  50% {
    background: var(--four-background-color);
  }
}
</style>
