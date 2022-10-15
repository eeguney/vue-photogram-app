<template>
  <Layout center col login>
    <div class="login-card" role="form">
      <form
        @submit.prevent="submit()"
        aria-label="Log in"
        spellcheck="false"
        autocomplete="off"
      >
        <div class="col">
          <h3>Welcome!</h3>
          <div class="login-inputs">
            <div class="col">
              <label for="username">Username</label>
              <div class="row input-area">
                <span class="icon">
                  <font-awesome-icon :icon="['fas', 'fa-user']" />
                </span>
                <input
                  type="text"
                  id="username"
                  accesskey="u"
                  aria-label="Type your username"
                  placeholder="Type your username"
                  autofocus="true"
                  minlength="3"
                  maxlength="30"
                  v-model="username"
                  @input="$store.commit('setUsername', username)"
                  required
                />
              </div>
            </div>
            <div class="col">
              <label for="password">Password</label>
              <div class="row input-area">
                <span class="icon">
                  <font-awesome-icon :icon="['fas', 'fa-lock']" />
                </span>
                <input
                  type="password"
                  id="password"
                  accesskey="p"
                  aria-label="Type your password"
                  placeholder="Type your password"
                  minlength="8"
                  maxlength="30"
                  v-model="password"
                  @input="$store.commit('setPassword', password)"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row end">
            <a
              @click.once="log"
              href="/"
              class="forgot-link"
              aria-label="Forgot your password"
              >Forgot password?</a
            >
          </div>
          <button type="submit" class="submit-btn" aria-label="Log in">
            Login
          </button>
          <div class="col question">
            <div class="question-title">
              <span>Are you not a member?</span>
            </div>
            <button type="button" class="signup-btn" aria-label="Sign up">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue'

export default {
  name: "LoginView",
  components: {
    Layout
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submit() {
      console.log(this.$store.getters.getSignUpForm);
    },
    log() {
      console.log("stop");
    },
  },
};
</script>

<style lang="scss" scoped>
.login-card {
  background: var(--second-background-color);
  padding: 1rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 400px;
  animation: fromTopWithFade 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  @media screen and (min-width: 600px) {
    padding: 5rem 2rem;
    box-shadow: var(--login-form-card-shadow);
  }
  h3 {
    text-align: center;
    font-weight: 800;
  }
  label {
    font-size: 12px;
    font-weight: 600;
    color: var(--login-form-label-color);
    margin-bottom: 3px;
  }
  .input-area {
    position: relative;
    input {
      flex: 1;
      padding: 1rem 1rem 1rem 3rem;
      border: none;
      outline: 0;
      transition: all 0.2s ease;
      background: var(--login-form-input-background-color);
      border-bottom: 2px solid transparent;
      border-radius: 0.5rem;
      &:focus {
        border-color: #5e60d4;
        background: var(--login-form-input-focus-background-color);
      }
    }
    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      left: 1rem;
      height: 100%;
      margin-top: -1px;
    }
  }
  .col {
    margin-bottom: 1rem;
  }
  .forgot-link {
    font-size: 12px;
    font-weight: 600;
    color: var(--login-form-link-color);
  }
  .submit-btn {
    margin: 1.5rem 0;
    padding: 1rem;
    background-image: linear-gradient(to right, #66d4e0, #9798e6, #e23ff5);
    background-size: 300%;
    background-position: center;
    color: white;
    font-weight: 600;
    text-shadow: 0 1px 1px #00000020;
    &:hover {
      box-shadow: 0 2px 12px -8px #000;
      background-position: 0;
    }
    &:focus {
      box-shadow: none;
      transform: translateY(1px);
    }
  }
  .question {
    .question-title {
      position: relative;
      text-align: center;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 100%;
        height: 0;
        border-bottom: 2px dotted var(--second-background-color);
      }
      span {
        position: relative;
        font-size: 14px;
        color: #6d6d6d;
        z-index: 3;
        font-weight: 600;
        background-color: var(--second-background-color);
        padding: 0 1rem;
      }
    }
    .signup-btn {
      margin-top: 1rem;
      padding: 1rem;
      font-weight: 600;
      font-size: 15px;
      color: var(--button-color);
      &:hover {
        background: var(--button-background-hover-color);
      }
    }
  }
}
</style>
