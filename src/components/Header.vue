<template>
  <header>
    <div class="row p-1 px-1 md-px-2">
      <div class="categories">
        <button
          type="button"
          class="selector"
          @click="showCategory = !showCategory"
        >
          <font-awesome-icon :icon="['fas', 'fa-bars']" size="xl" />
        </button>
        <div class="col drop-down" v-show="showCategory">
          <button
            class="homepage"
            @click="
              showCategory = false;
              $router.push('/');
            "
          >
            Homepage
          </button>
          <ul>
            <router-link
              v-for="item in $store.getters.getCategories"
              :key="item.index"
              :to="{ name: 'category', params: { category: item } }"
            >
              <button class="item">
                {{ item }}
              </button>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="search">
        <input
          type="search"
          placeholder="What did you looking for..."
          ref="search"
          tabindex="1"
          aria-label="Search something..."
          spellcheck="false"
          v-model="getSearchText"
          @input="handleSearch"
        />
      </div>
      <div class="options-dropdown ml-1">
        <button
          type="button"
          class="options-btn"
          @click="showOptions = !showOptions"
        >
          <font-awesome-icon
            :icon="['fas', 'fa-ellipsis-vertical']"
            size="xl"
          />
        </button>
        <ul class="main" v-show="showOptions">
          <li>
            <label>Switch Theme</label>
            <ul>
              <li>
                <button
                  type="button"
                  aria-label="Auto theme"
                  @click="removeDarkmode"
                >
                  Auto
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="active-theme"
                  aria-label="Dark theme"
                  @click="toggleDarkmode(true)"
                >
                  <font-awesome-icon :icon="['fas', 'fa-moon']" size="lg" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  aria-label="Light theme"
                  @click="toggleDarkmode(false)"
                >
                  <font-awesome-icon :icon="['fas', 'fa-sun']" size="lg" />
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {},
  components: {},
  data() {
    return {
      showCategory: false,
      showOptions: false,
    };
  },
  computed: {
    getSearchText() {
      return this.$store.getters.getSearchText;
    },
  },
  methods: {
    handleSearch(e) {
      setTimeout(() => {
        this.$store.dispatch("search", e.target.value);
      }, 500);
    },
    toggleDarkmode(status) {
      this.$store.dispatch("setdarkmode", status);
    },
    removeDarkmode() {
      document.body.removeAttribute("data-theme");
      localStorage.removeItem("darkmode");
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  position: sticky;
  top: 0;
  height: 72px;
  display: flex;
  z-index: 1000;
  background: var(--header-background-color);
  backdrop-filter: blur(25px);
  .row {
    flex: 1;
    align-items: center;
  }
  .search {
    flex: 1;
    height: 48px;
    input {
      height: 100%;
      width: 100%;
      border: none;
      padding: 0 1rem;
      border-radius: 5px;
      background-color: var(--second-background-color);
      color: var(--login-form-label-color);
      outline: 0;
      &:focus {
        background-color: var(--third-background-color);
      }
    }
  }
  .categories {
    position: relative;
    margin-right: 1rem;
    .selector {
      font-size: 16px;
      font-weight: 600;
      padding: 0.9rem 0.5rem;
      background: transparent;
      border-radius: 5px;
      color: var(--button-color);
      background-size: 150% 100%;
      transition: all 0.4s ease;
      &:hover,
      &:focus {
        background-position: 100% 20%;
      }
    }
    .drop-down {
      border-radius: 5px;
      position: absolute;
      top: 58px;
      left: 0;
      margin: 0;
      background: linear-gradient(
        38deg,
        var(--blue-light-color),
        var(--purple-light-color)
      );
      padding: 1rem 3rem 1rem 1rem;
      box-shadow: 0px 2px 15px -5px #000;
      column-gap: 1rem;
      max-height: 80vh;
      overflow: auto;
      .homepage {
        background: transparent;
        text-align: left;
        padding: 0.5rem;
        padding-top: 0;
        position: sticky;
        top: 0;
        backdrop-filter: blur(8px);
        color: white;
      }
      ul {
        margin: 0;
        padding: 0;
        button {
          border-radius: 0;
          background-color: transparent;
          font-size: 13px;
          text-align: start;
          padding: 0.5rem 4rem 0.5rem 0.5rem;
          border-radius: 5px;
          transition: all 0.1s ease;
          color: white;

          &:hover {
            background: #00000040;
          }
        }
      }
    }
  }
  .options-dropdown {
    position: relative;
    display: flex;
    flex-direction: column;
    .options-btn {
      background-color: transparent;
      padding: 1rem;
    }
    ul.main {
      position: fixed;
      right: 1rem;
      top: 48px;
      background-color: var(--contrast-color);
      z-index: 999;
      padding: 1rem;
      width: 100%;
      max-width: 350px;
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      box-shadow: 0 3px 18px -11px #000;
      li {
        display: flex;
        flex-direction: column;
        label {
          font-size: 14px;
          border-bottom: 1px solid var(--second-background-color);
          padding: 10px 0;
          text-align: center;
          font-weight: 500;
        }
        ul {
          display: flex;
          padding: 0;
          margin: 0;
          gap: 10px;
          margin: 1rem 0;
          justify-content: center;
          li {
            font-size: 13px;
            border: none;
          }
        }
      }
    }
  }
}
* {
  scrollbar-width: auto;
  scrollbar-color: white;
}

*::-webkit-scrollbar {
  width: 4px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: white;
  border: 5px solid transparent;
}
</style>
