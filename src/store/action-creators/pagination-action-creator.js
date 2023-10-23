import { PAGINATION_ACTIONS } from "../actions/pagination-actions";

function setTotalPages(totalPages) {
  return {
    type: PAGINATION_ACTIONS.SET_TOTAL_PAGES,
    totalPages,
  };
}

function setCurrentPage(currentPage) {
  return {
    type: PAGINATION_ACTIONS.SET_CURRENT_PAGE,
    currentPage,
  };
}

function resetPagination() {
  return {
    type: PAGINATION_ACTIONS.RESET_PAGINATION,
  };
}

export { setTotalPages, setCurrentPage, resetPagination };