<template>
  <div class="loading-container center" :class="{ noHeight: noHeight, single: single }">
    <div class="loading col">
      <font-awesome-icon
        class="loading-spinner"
        :icon="['fas', 'fa-spinner']"
        size="xl"
      />
      <label :class="{ small: small }">Loading...</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingComponent",
  props: {
    noHeight: Boolean,
    small: Boolean,
    single: Boolean
  },
};
</script>

<style lang="scss" scoped>
.loading-container {
  display: flex;
  margin-top: 30vh;
  &.single {
    position: fixed;
    color: white;
  }
  &.noHeight {
    height: 100%;
    animation: backgroundChange 1.8s linear infinite;
    border-radius: 5px;
    margin: 0;
    width: 100%;
  }
  .loading {
    width: 100%;
    max-width: 400px;
    justify-content: center;
    align-items: center;
    label {
      font-size: 1rem;
      margin-top: 10px;
      &.small {
        font-size: 13px;
        margin-top: 7px;
      }
    }
    .loading-spinner {
      animation: spin 2s ease infinite;
    }
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes backgroundChange {
  0% {
    background: var(--second-background-color);
  }
  50% {
    background: var(--third-background-color);
  }
}
</style>
