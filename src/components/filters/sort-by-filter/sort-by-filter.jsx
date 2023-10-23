import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { SORT_BY_LIST } from "./sort-by-list";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilterType,
  selectSortBy,
} from "../../../store/action-creators/filters-action-creator";
import { FILTER_TYPES } from "../../../store/actions/filters-actions";
import { resetPagination } from "../../../store/action-creators/pagination-action-creator";
import { selectFilters } from "../../../store/reducers/filters-reducer";
import { selectPagination } from "../../../store/reducers/pagination-reducer";

const FIRST_PAGE = 1;

function SortByFilter() {
  const filters = useSelector(selectFilters);
  const { filterType, sortBy } = filters;
  const pagination = useSelector(selectPagination);
  const { currentPage } = pagination;
  const dispatch = useDispatch();

  function handleSelectSortBy(e) {
    dispatch(selectSortBy(e.target.value));

    if (filterType === FILTER_TYPES.BY_NAME) {
      dispatch(changeFilterType(FILTER_TYPES.BY_SORT_BY));
    }
    if (currentPage !== FIRST_PAGE) {
      dispatch(resetPagination());
    }
  }

  const options = SORT_BY_LIST.map((item) => (
    <MenuItem key={item.id} value={item.name}>
      {item.name}
    </MenuItem>
  ));

  return (
    <Box sx={{ m: "1rem 0rem 1rem 0rem" }}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="sort-by">Сортировать по:</InputLabel>
        <Select
          labelId="sort-by"
          label="Сортировать по:"
          value={sortBy}
          onChange={handleSelectSortBy}
        >
          {options}
        </Select>
      </FormControl>
    </Box>
  );
}

export { SortByFilter };