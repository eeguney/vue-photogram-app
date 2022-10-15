import Axios from "axios";

let urlParameters = {
  q: "",
  imageType: "all",
  orientation: "all",
  category: null,
  colors: null,
  safesearch: "false",
  order: "popular",
  page: 1,
  perPage: 20,
};

const urlGenerator = (newUrl) => {
  newUrl.forEach((item) => {
    const { type, value } = item;
    urlParameters = {
      ...urlParameters,
      [type]: value,
    };
  });

  let URL =
    `${process.env.VUE_APP_PHOTOS_URL}&order=${urlParameters.order}` +
    `&category=${urlParameters.category}&image_type=${urlParameters.imageType}` +
    `&orientation=${urlParameters.orientation}&colors=${urlParameters.colors}` +
    `&safesearch=${urlParameters.safesearch}` +
    `&per_page=${urlParameters.perPage}&page=${urlParameters.page}` +
    `&q=${urlParameters.q}`;

  return URL;
};

export default {
  async fetchAll({ getters, commit }) {
    commit("setPhotosTimeline", null);
    try {
      const albums = [];
      await Promise.all([
        getters.getCategories.forEach((element) => {
          Axios.get(
            `${urlGenerator([
              { type: "perPage", value: 4 },
            ])}&category=${element}`
          ).then(({ data }) => {
            const { hits } = data;
            const album = [];
            hits.forEach((item) =>
              album.push({ [element]: { ...item, albumTitle: element } })
            );
            albums.push(album);
            commit("setAlbums", albums);
          });
        }),
        Axios.get(
          urlGenerator([
            { type: "order", value: "popular" },
            { type: "perPage", value: 20 },
          ])
        ).then(({ data }) => {
          commit("setPhotosTimeline", data.hits);
        }),
      ]);
    } catch (error) {
      console.log(error);
    }
  },
  async fetchPopular({ commit }) {
    commit("setPhotosTimeline", null);
    try {
      await Promise.all([
        Axios.get(
          urlGenerator([
            { type: "order", value: "popular" },
            { type: "perPage", value: 20 },
            { type: "page", value: 1 },
          ])
        ).then(({ data }) => {
          commit("setPhotosTimeline", data.hits);
        }),
      ]);
    } catch (error) {
      console.log(error);
    }
  },
  async fetchLatest({ commit }) {
    commit("setPhotosTimeline", null);
    try {
      await Promise.all([
        Axios.get(
          urlGenerator([
            { type: "order", value: "latest" },
            { type: "perPage", value: 20 },
            { type: "page", value: 1 },
          ])
        ).then(({ data }) => {
          commit("setPhotosTimeline", data.hits);
        }),
      ]);
    } catch (error) {
      console.log(error);
    }
  },
  async search({ commit }, payload) {
    commit("setPhotosTimeline", null);
    commit("setSearchText", payload);
    try {
      await Promise.all([
        Axios.get(
          urlGenerator([
            { type: "perPage", value: 20 },
            { type: "q", value: encodeURIComponent(payload) },
          ])
        ).then(({ data }) => {
          if (data) {
            if (data.hits.length > 0) {
              commit("setPhotosTimeline", data.hits);
            } else commit("setPhotosTimeline", null);
          }
        }),
      ]);
    } catch (error) {
      console.log(error);
    }
  },
  async filter({ commit }, payload) {
    commit("setPhotosTimeline", null);
    try {
      await Promise.all([
        Axios.get(urlGenerator(payload)).then(({ data }) => {
          if (data) {
            if (data.hits.length > 0) {
              commit("setPhotosTimeline", data.hits);
            } else commit("setPhotosTimeline", null);
          }
        }),
      ]);
    } catch (error) {
      console.log(error);
    }
  },
  async fetchMore({ commit }) {
    commit("setFetchStatus", true);
    try {
      await Promise.all([
        Axios.get(
          urlGenerator([{ type: "page", value: urlParameters.page + 1 }])
        ).then(({ data }) => {
          if (data) {
            if (data.hits.length > 0) {
              commit("morePhotosTimeline", data.hits);
            }
          }
        }),
      ]);
    } catch (error) {
      console.log(error);
    }
  },
  destroySearching({ commit, dispatch }) {
    commit("setSearchText", null);
    dispatch("filter", [{ type: "q", value: "" }]);
  },
};
