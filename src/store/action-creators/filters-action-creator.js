import { SERVER_URL, URL_PATHS } from "../../js/global-constants";
import { getRequest } from "../../js/requests/get-request";
import { FILTERS_ACTIONS } from "../actions/filters-actions";
import { showErrorDialog } from "./error-action-creator";

function setFullGenreList(fullGenreList) {
  return {
    type: FILTERS_ACTIONS.SET_FULL_GENRE_LIST,
    fullGenreList,
  };
}

function changeFilterType(filterType) {
  return {
    type: FILTERS_ACTIONS.CHANGE_FILTER_TYPE,
    filterType,
  };
}

function enterNameToSearch(name) {
  return {
    type: FILTERS_ACTIONS.ENTER_NAME_TO_SEARCH,
    name,
  };
}

function selectSortBy(sortBy) {
  return {
    type: FILTERS_ACTIONS.SELECT_SORT_BY,
    sortBy,
  };
}

function selectYears(yearsRange) {
  return {
    type: FILTERS_ACTIONS.SELECT_YEARS,
    yearsRange,
  };
}

function selectGenres(genres) {
  return {
    type: FILTERS_ACTIONS.SELECT_GENRES,
    genres,
  };
}

function resetFilters() {
  return {
    type: FILTERS_ACTIONS.RESET_FILTERS,
  };
}

function getFullGenreList(token) {
  return async function (dispatch) {
    const body = await getRequest(`${SERVER_URL}${URL_PATHS.GENRES}`, token);

    if (!body.isSuccessful) {
      dispatch(showErrorDialog(body.status, body.message));
      return;
    }

    dispatch(setFullGenreList(body.result.genres));
  };
}

export {
  changeFilterType,
  enterNameToSearch,
  selectSortBy,
  selectYears,
  selectGenres,
  resetFilters,
  getFullGenreList,
};