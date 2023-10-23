import { SORT_BY_LIST } from "../../components/filters/sort-by-filter/sort-by-list";
import { FILTERS_ACTIONS, FILTER_TYPES } from "../actions/filters-actions";

const EARLIEST_YEAR = 1920;
const currentYear = new Date().getFullYear();
const NAME_DEFAULT = "";

const FILTERS_INITIAL_STATE = {
  fullGenreList: [],
  isFullGenreListLoaded: false,
  filterType: FILTER_TYPES.BY_SORT_BY,
  name: NAME_DEFAULT,
  sortBy: SORT_BY_LIST[0].name,
  yearsRange: [EARLIEST_YEAR, currentYear],
  genres: [],
};

function filtersReducer(filters = FILTERS_INITIAL_STATE, action) {
  switch (action.type) {
    case FILTERS_ACTIONS.SET_FULL_GENRE_LIST: {
      return {
        ...filters,
        fullGenreList: action.fullGenreList,
        isFullGenreListLoaded: true,
      };
    }
    case FILTERS_ACTIONS.CHANGE_FILTER_TYPE: {
      if (action.filterType === FILTER_TYPES.BY_NAME) {
        return {
          ...filters,
          filterType: action.filterType,
          sortBy: FILTERS_INITIAL_STATE.sortBy,
          yearsRange: FILTERS_INITIAL_STATE.yearsRange,
          genres: FILTERS_INITIAL_STATE.genres,
        };
      }
      if (action.filterType === FILTER_TYPES.BY_SORT_BY) {
        return {
          ...filters,
          filterType: action.filterType,
          name: FILTERS_INITIAL_STATE.name,
        };
      }
    }
    case FILTERS_ACTIONS.ENTER_NAME_TO_SEARCH: {
      return {
        ...filters,
        name: action.name,
      };
    }
    case FILTERS_ACTIONS.SELECT_SORT_BY: {
      return {
        ...filters,
        sortBy: action.sortBy,
      };
    }
    case FILTERS_ACTIONS.SELECT_YEARS: {
      return {
        ...filters,
        yearsRange: action.yearsRange,
      };
    }
    case FILTERS_ACTIONS.SELECT_GENRES: {
      return {
        ...filters,
        genres: action.genres,
      };
    }
    case FILTERS_ACTIONS.RESET_FILTERS: {
      return {
        ...filters,
        filterType: FILTERS_INITIAL_STATE.filterType,
        name: FILTERS_INITIAL_STATE.name,
        sortBy: FILTERS_INITIAL_STATE.sortBy,
        yearsRange: FILTERS_INITIAL_STATE.yearsRange,
        genres: FILTERS_INITIAL_STATE.genres,
      };
    }
    default: {
      return filters;
    }
  }
}

const selectFilters = (state) => state.filters;

export { filtersReducer, FILTERS_INITIAL_STATE, selectFilters };