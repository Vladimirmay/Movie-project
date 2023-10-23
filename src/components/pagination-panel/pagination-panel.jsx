import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/action-creators/pagination-action-creator";
import { selectPagination } from "../../store/reducers/pagination-reducer";

function PaginationPanel() {
  const pagination = useSelector(selectPagination);
  const { totalPages, currentPage } = pagination;
  const dispatch = useDispatch();

  function handleChangePage(e, page) {
    dispatch(setCurrentPage(page));
  }

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handleChangePage}
      sx={{ alignSelf: "center", mt: "3rem" }}
    />
  );
}

export { PaginationPanel };