<template>
  <router-link :to="{ name: 'photo', params: { id: data.id } }">
    <div class="card">
    <div class="thumbnail">
      <img :src="data.webformatURL" class="img" loading="lazy" />
    </div>
    <label>{{ data.tags }} </label>
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
  </router-link>
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
</style>
