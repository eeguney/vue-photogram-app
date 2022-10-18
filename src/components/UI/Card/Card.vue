<template>
  <div class="card">
    <router-link :to="{ name: 'photo', params: { id: data.id } }">
      <div class="thumbnail">
        <img :src="data.webformatURL" class="img" loading="lazy" :width="data.webformatWidth" :height="data.webformatHeight" />
      </div>
    </router-link>

    <label>
      <router-link
        v-for="(tag, key) in getTags"
        class="tag"
        :key="key"
        :to="{ name: 'tag', params: { tag: tag } }"
        >{{ tag }}</router-link
      >
    </label>
    <div class="card-info">
      <li>
        <font-awesome-icon :icon="['fas', 'fa-thumbs-up']" size="xs" />
        {{ data.likes }}
      </li>
      <li>
        <font-awesome-icon :icon="['fas', 'fa-comment']" size="xs" />
        {{ data.comments }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    data: [] || null,
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
  computed: {
    getTags() {
      return this.data.tags.split(",");
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
  .thumbnail {
    border-radius: 5px;
    overflow: hidden;
    background-color: var(--second-background-color);
    animation: backgroundChange 1.8s linear infinite;
    &:hover {
      .img {
        filter: saturate(1.6);
        transition: all 0.3s ease;
        transform: scale(1.3) translate(20px, 20px);
      }
    }
    .img {
      width: 100%;
      border-radius: 5px;
      filter: saturate(1);
      transition: all 0.3s ease;
      display: flex;
      min-height: 150px;
    }
  }
  label {
    font-size: 13px;
    text-align: center;
    padding: 6px 0;
    padding-bottom: 0;
    font-weight: 500;
    .tag {
      &:not(:last-child) {
        &::after {
          content: ",";
        }
      }
      &:hover {
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 2px;
      }
    }
  }
  .card-info {
    display: flex;
    justify-content: center;
    li {
      list-style: none;
      padding: 0 5px;
      font-size: 13px;
    }
  }
}

@keyframes backgroundChange {
  0% {
    background: var(--main-background-color);
  }
  50% {
    background: var(--second-background-color);
  }
}
</style>
