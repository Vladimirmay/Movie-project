import { SERVER_URL } from "../../../js/global-constants";
import { getRequest } from "../../../js/requests/get-request";
import { FILM_DETAILS_ACTIONS } from "../../actions/films-actions/film-details-actions";
import { showErrorDialog } from "../error-action-creator";

function setFilmDetails(details, actors) {
  return {
    type: FILM_DETAILS_ACTIONS.SET_FILM_DETAILS,
    details,
    actors,
  };
}

function setIsFilmDetailsLoaded(isFilmDetailsLoaded) {
  return {
    type: FILM_DETAILS_ACTIONS.SET_IS_FILM_DETAILS_LOADED,
    isFilmDetailsLoaded,
  };
}

function resetFilmDetails() {
  return {
    type: FILM_DETAILS_ACTIONS.RESET_FILM_DETAILS,
  };
}

function getFilmDetails(token, film_id) {
  return async function (dispatch) {
    const details = await getRequest(
      `${SERVER_URL}3/movie/${film_id}?language=ru`,
      token
    );
    const actors = await getRequest(
      `${SERVER_URL}3/movie/${film_id}/credits?language=ru`,
      token
    );

    if (details.isSuccessful && actors.isSuccessful) {
      dispatch(setFilmDetails(details.result, actors.result));
      dispatch(setIsFilmDetailsLoaded(true));
    } else {
      dispatch(
        showErrorDialog(
          details.status || actors.status,
          details.message || actors.message
        )
      );
    }
  };
}

export { resetFilmDetails, getFilmDetails };