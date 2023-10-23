const SERVER_URL = "https://api.themoviedb.org/";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const URL_PATHS = {
  SEARCH_BY_NAME: "3/search/movie?include_adult=true&language=ru&page=",
  SEARCH_BY_SORT_BY: "3/discover/movie?language=ru&",
  GENRES: "3/genre/movie/list?language=ru",
  TOP_RATED_LIST: "3/movie/top_rated?language=ru&page=",
  POPULAR_LIST: "3/movie/popular?language=ru&page=",
  ACCOUNT_ID: "3/account/account_id",
};

const COOKIES = {
  TOKEN: "tokenKinopoisk",
  ACCOUNT_ID: "accountIdKinopoisk",
};

const MAXIMUM_PAGINATION_PAGES = 50;

export { SERVER_URL, IMG_URL, URL_PATHS, COOKIES, MAXIMUM_PAGINATION_PAGES };