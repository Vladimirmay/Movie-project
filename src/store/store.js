import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user-reducer";
import { filtersReducer } from "./reducers/filters-reducer";
import { paginationReducer } from "./reducers/pagination-reducer";
import { filmsReducer } from "./reducers/films-reducer/films-reducer";
import { errorReducer } from "./reducers/error-reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    filters: filtersReducer,
    pagination: paginationReducer,
    films: filmsReducer,
    error: errorReducer,
  },
});

export { store };