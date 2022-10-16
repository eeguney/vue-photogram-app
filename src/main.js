import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLock,
  faUser,
  faTextHeight,
  faLink,
  faImage,
  faBars,
  faImages,
  faSpinner,
  faThumbsUp,
  faComment,
  faUpDown,
  faLeftRight,
  faXmark,
  faRightFromBracket,
  faEllipsisVertical,
  faMoon,
  faSun,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare, faKeyboard } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faUser,
  faLock,
  faSquare,
  faTextHeight,
  faKeyboard,
  faLink,
  faImage,
  faBars,
  faImages,
  faSpinner,
  faThumbsUp,
  faComment,
  faUpDown,
  faLeftRight,
  faXmark,
  faRightFromBracket,
  faEllipsisVertical,
  faMoon,
  faSun,
  faFilter,
  faGithub
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
