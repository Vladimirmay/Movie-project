import {
    MAXIMUM_PAGINATION_PAGES,
    SERVER_URL,
    URL_PATHS,
  } from "../../../js/global-constants";
  import { createSearchLink } from "../../../js/requests/create-search-link";
  import { getRequest } from "../../../js/requests/get-request";
  import { FILM_LIST_ACTIONS } from "../../actions/films-actions/film-list-actions";
  import { FILTER_TYPES } from "../../actions/filters-actions";
  import { showErrorDialog } from "../error-action-creator";
  import { setTotalPages } from "../pagination-action-creator";
  
  function setFilmList(filmListItems) {
    return {
      type: FILM_LIST_ACTIONS.SET_FILM_LIST,
      filmListItems,
    };
  }
  
  function setIsFilmListLoaded(isFilmListLoaded) {
    return {
      type: FILM_LIST_ACTIONS.SET_IS_FILM_LIST_LOADED,
      isFilmListLoaded,
    };
  }
  
  function getFilmList(
    token,
    filterType,
    sortBy,
    yearsRange,
    genres,
    name,
    currentPage
  ) {
    const sortParametersUrl = createSearchLink(sortBy, yearsRange, genres);
  
    return async function (dispatch) {
      let body;
  
      if (filterType === FILTER_TYPES.BY_SORT_BY) {
        body = await getRequest(
          `${SERVER_URL}${URL_PATHS.SEARCH_BY_SORT_BY}${sortParametersUrl}&page=${currentPage}`,
          token
        );
      }
  
      if (filterType === FILTER_TYPES.BY_NAME) {
        body = await getRequest(
          `${SERVER_URL}3/search/movie?query=${name}&include_adult=false&language=ru&page=${currentPage}`,
          token
        );
      }
  
      if (!body.isSuccessful) {
        dispatch(showErrorDialog(body.status, body.message));
        return;
      }
  
      dispatch(setFilmList(body.result.results));
      const totalPages =
        body.result.total_pages > MAXIMUM_PAGINATION_PAGES
          ? MAXIMUM_PAGINATION_PAGES
          : body.result.total_pages;
      dispatch(setTotalPages(totalPages));
      dispatch(setIsFilmListLoaded(true));
    };
  }
  
  export { getFilmList };