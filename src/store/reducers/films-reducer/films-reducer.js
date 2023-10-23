import { combineReducers } from "redux";
import { favoriteFilmsReducer } from "./favorite-films-reducer";
import { filmDetailsReducer } from "./film-details-reducer";
import { filmListReducer } from "./film-list-reducer";

const filmsReducer = combineReducers({
  favoriteFilms: favoriteFilmsReducer,
  filmDetails: filmDetailsReducer,
  filmList: filmListReducer
});

export { filmsReducer };