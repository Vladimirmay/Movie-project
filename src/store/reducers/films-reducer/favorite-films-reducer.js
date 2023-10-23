import { FAVORITE_FILMS_ACTIONS } from "../../actions/films-actions/favorite-films-actions";

const FAVORITE_FILMS_INITIAL_STATE = {
  isFavoriteFilmsLoaded: false,
  favoriteFilmsItems: [],
};

function favoriteFilmsReducer(
  favoriteFilms = FAVORITE_FILMS_INITIAL_STATE,
  action
) {
  switch (action.type) {
    case FAVORITE_FILMS_ACTIONS.SET_FAVORITE_FILMS: {
      return {
        isFavoriteFilmsLoaded: true,
        favoriteFilmsItems: action.favoriteFilmsItems,
      };
    }
    case FAVORITE_FILMS_ACTIONS.ADD_FILM: {
      return {
        ...favoriteFilms,
        favoriteFilmsItems: [...favoriteFilms.favoriteFilmsItems, action.item],
      };
    }
    case FAVORITE_FILMS_ACTIONS.DELETE_FILM: {
      const newFavoriteFilms = favoriteFilms.favoriteFilmsItems.filter(
        (item) => item.id !== action.id
      );
      return {
        ...favoriteFilms,
        favoriteFilmsItems: newFavoriteFilms,
      };
    }
    default: {
      return favoriteFilms;
    }
  }
}

const selectFavoriteFilms = (state) => state.films.favoriteFilms;

export { favoriteFilmsReducer, selectFavoriteFilms };