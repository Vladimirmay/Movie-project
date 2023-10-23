import { SERVER_URL } from "../../../js/global-constants";
import { getRequest } from "../../../js/requests/get-request";
import { postRequest } from "../../../js/requests/post-request";
import { FAVORITE_FILMS_ACTIONS } from "../../actions/films-actions/favorite-films-actions";
import { showErrorDialog } from "../error-action-creator";

function setFavoriteFilms(favoriteFilmsItems) {
  return {
    type: FAVORITE_FILMS_ACTIONS.SET_FAVORITE_FILMS,
    favoriteFilmsItems,
  };
}

function addFilm(item) {
  return {
    type: FAVORITE_FILMS_ACTIONS.ADD_FILM,
    item,
  };
}

function deleteFilm(id) {
  return {
    type: FAVORITE_FILMS_ACTIONS.DELETE_FILM,
    id,
  };
}

function getFavoriteFilms(token, accountId) {
  return async function (dispatch) {
    const body = await getRequest(
      `${SERVER_URL}3/account/${accountId}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,
      token
    );

    if (!body.isSuccessful) {
      dispatch(showErrorDialog(body.status, body.message));
      return;
    }

    const { results: filmsFromFirstPage, total_pages: totalPages } =
      body.result;

    let films = filmsFromFirstPage;
    const SECOND_PAGE = 2;

    for (let page = SECOND_PAGE; page <= totalPages; page++) {
      const body = await getRequest(
        `${SERVER_URL}3/account/${accountId}/favorite/movies?language=en-US&page=${page}&sort_by=created_at.asc`,
        token
      );

      if (!body.isSuccessful) {
        dispatch(showErrorDialog(body.status, body.message));
        return;
      }

      const { results: additionalFilms } = body.result;
      films = [...films, ...additionalFilms];
    }

    dispatch(setFavoriteFilms(films));
  };
}

function postFavoriteStatus(token, accountId, id, item, isFavorite) {
  return async function (dispatch) {
    const body = await postRequest(
      `${SERVER_URL}3/account/${accountId}/favorite`,
      token,
      id,
      !isFavorite
    );

    if (!body.isSuccessful) {
      dispatch(showErrorDialog(body.status, body.message));
      !isFavorite ? dispatch(deleteFilm(id)) : dispatch(addFilm(item));
      return;
    }
  };
}

export { addFilm, deleteFilm, getFavoriteFilms, postFavoriteStatus };