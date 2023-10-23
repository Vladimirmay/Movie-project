import { FILM_LIST_ACTIONS } from "../../actions/films-actions/film-list-actions";

const FILM_LIST_INITIAL_STATE = {
  isFilmListLoaded: false,
  filmListItems: [],
};

function filmListReducer(filmList = FILM_LIST_INITIAL_STATE, action) {
  switch (action.type) {
    case FILM_LIST_ACTIONS.SET_FILM_LIST: {
      return {
        ...filmList,
        filmListItems: action.filmListItems,
      };
    }
    case FILM_LIST_ACTIONS.SET_IS_FILM_LIST_LOADED: {
      return {
        ...filmList,
        isFilmListLoaded: action.isFilmListLoaded,
      };
    }
    default: {
      return filmList;
    }
  }
}

const selectFilmList = (state) => state.films.filmList;

export { filmListReducer, selectFilmList };