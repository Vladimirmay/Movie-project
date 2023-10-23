import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_TYPES } from "../../../store/actions/filters-actions";
import {
  changeFilterType,
  enterNameToSearch,
} from "../../../store/action-creators/filters-action-creator";
import { resetPagination } from "../../../store/action-creators/pagination-action-creator";
import { selectFilters } from "../../../store/reducers/filters-reducer";
import { selectPagination } from "../../../store/reducers/pagination-reducer";

const FIRST_PAGE = 1;

function SearchByName() {
  const filters = useSelector(selectFilters);
  const { name } = filters;
  const pagination = useSelector(selectPagination);
  const { currentPage } = pagination;
  const dispatch = useDispatch();

  function handleChangeName(e) {
    dispatch(enterNameToSearch(e.target.value));

    e.target.value.trim()
      ? dispatch(changeFilterType(FILTER_TYPES.BY_NAME))
      : dispatch(changeFilterType(FILTER_TYPES.BY_SORT_BY));
    if (currentPage !== FIRST_PAGE) {
      dispatch(resetPagination());
    }
  }

  return (
    <TextField
      onChange={handleChangeName}
      value={name}
      label="Название фильма"
      variant="outlined"
      sx={{
        m: "1rem 0rem 1rem 0rem",
        width: "100%",
      }}
    />
  );
}

export { SearchByName };