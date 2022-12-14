export default {
  getSignUpForm(state) {
    return state.signUpForm;
  },
  getCategories(state) {
    return state.categories;
  },
  getAlbums(state) {
    return state.albums;
  },
  getPhotosTimeline(state) {
    return state.photosTimeline;
  },
  getSearchText(state) {
    return state.searchText;
  },
  getFilterSection(state) {
    return state.filterSection;
  },
  getBackdrop(state) {
    return state.backdrop;
  },
  getFetchStatus(state) {
    return state.fetchStatus;
  },
  getDarkmode(state) {
    return state.darkmode;
  }
};
