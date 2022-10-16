export default {
  setUsername(state, payload) {
    state.signUpForm = {
      ...state.signUpForm,
      username: payload,
    };
  },
  setPassword(state, payload) {
    state.signUpForm = {
      ...state.signUpForm,
      password: payload,
    };
  },
  setAlbums(state, payload) {
    state.albums = payload;
  },
  setPhotosTimeline(state, payload) {
    state.photosTimeline = payload;
  },
  morePhotosTimeline(state, payload) {
    state.photosTimeline = [...state.photosTimeline, ...payload];
  },
  setSearchText(state, payload) {
    state.searchText = payload;
  },
  toggleFilterSection(state) {
    state.filterSection = !state.filterSection;
  },
  toggleBackdrop(state) {
    state.backdrop = !state.backdrop;
  },
  setFetchStatus(state, payload) {
    state.fetchStatus = payload
  }
};
