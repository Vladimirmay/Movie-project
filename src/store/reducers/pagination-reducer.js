import { PAGINATION_ACTIONS } from "../actions/pagination-actions";

const PAGINATION_INITIAL_STATE = {
  totalPages: 1,
  currentPage: 1,
};

function paginationReducer(pagination = PAGINATION_INITIAL_STATE, action) {
  switch (action.type) {
    case PAGINATION_ACTIONS.SET_TOTAL_PAGES: {
      return {
        ...pagination,
        totalPages: action.totalPages,
      };
    }
    case PAGINATION_ACTIONS.SET_CURRENT_PAGE: {
      return {
        ...pagination,
        currentPage: action.currentPage,
      };
    }
    case PAGINATION_ACTIONS.RESET_PAGINATION: {
      return {
        ...pagination,
        currentPage: PAGINATION_INITIAL_STATE.currentPage,
      };
    }
    default: {
      return pagination;
    }
  }
}

const selectPagination = (state) => state.pagination;

export { paginationReducer, selectPagination };