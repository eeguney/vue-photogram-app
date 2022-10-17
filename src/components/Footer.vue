<template>
  <footer class="col align-center justify-end">
    <div>This app made with<span>♥</span>by Emre Güney</div>
    <a href="https://github.com/eeguney/vue-photogram-app" target="blank"
      ><font-awesome-icon :icon="['fab', 'fa-github']" size="2x"
    /></a>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {},
};
</script>

<style lang="scss" scoped>
footer {
  font-size: 14px;
  font-weight: 300;
  margin: 2rem 0;
  flex: 1 !important;
  opacity: 0.7;
  transition: all 0.1s ease;
  &:hover {
    opacity: 1;
  }
  span {
    color: red;
    padding: 0 6px;
    font-size: 18px;
  }
  svg {
    margin-top: 10px;
  }
  a {
    color: inherit;
    transition: all 0.1s ease;
    &:hover {
      filter: drop-shadow(0 2px 10px var(--button-color));
    }
  }
}
</style>
