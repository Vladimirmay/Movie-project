import { FILM_DETAILS_ACTIONS } from "../../actions/films-actions/film-details-actions";

const FILM_DETAILS_INITIAL_STATE = {
  isFilmDetailsLoaded: false,
  details: null,
  actors: null,
};

function filmDetailsReducer(filmDetails = FILM_DETAILS_INITIAL_STATE, action) {
  switch (action.type) {
    case FILM_DETAILS_ACTIONS.SET_FILM_DETAILS:
      return {
        ...filmDetails,
        details: action.details,
        actors: action.actors,
      };
    case FILM_DETAILS_ACTIONS.SET_IS_FILM_DETAILS_LOADED:
      return {
        ...filmDetails,
        isFilmDetailsLoaded: action.isFilmDetailsLoaded,
      };
    case FILM_DETAILS_ACTIONS.RESET_FILM_DETAILS:
      return FILM_DETAILS_INITIAL_STATE;
    default:
      return filmDetails;
  }
}

const selectFilmDetails = (state) => state.films.filmDetails;

export { filmDetailsReducer, selectFilmDetails };