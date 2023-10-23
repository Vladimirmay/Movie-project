import {
    Chip,
    Box,
    Autocomplete,
    TextField,
    Checkbox,
    CircularProgress,
  } from "@mui/material";
  import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
  import CheckBoxIcon from "@mui/icons-material/CheckBox";
  import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {
    changeFilterType,
    getFullGenreList,
    selectGenres,
  } from "../../../store/action-creators/filters-action-creator";
  import { resetPagination } from "../../../store/action-creators/pagination-action-creator";
  import { selectFilters } from "../../../store/reducers/filters-reducer";
  import { selectUser } from "../../../store/reducers/user-reducer";
  import { FILTER_TYPES } from "../../../store/actions/filters-actions";
  import { selectPagination } from "../../../store/reducers/pagination-reducer";
  
  const ICON = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const CHECKED_ICON = <CheckBoxIcon fontSize="small" />;
  const LIMIT_TAGS = 5;
  const FIRST_PAGE = 1;
  
  function GenreFilter() {
    const user = useSelector(selectUser);
    const { token } = user;
    const filters = useSelector(selectFilters);
    const { filterType, fullGenreList, isFullGenreListLoaded, genres } = filters;
    const pagination = useSelector(selectPagination);
    const { currentPage } = pagination;
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getFullGenreList(token));
    }, []);
  
    function handleSelectGenres(e, values) {
      dispatch(selectGenres(values));
  
      if (filterType === FILTER_TYPES.BY_NAME) {
        dispatch(changeFilterType(FILTER_TYPES.BY_SORT_BY));
      }
      if (currentPage !== FIRST_PAGE) {
        dispatch(resetPagination());
      }
    }
  
    return !isFullGenreListLoaded ? (
      <Box sx={{ width: "20rem", mt: "1rem" }}>
        <CircularProgress />
      </Box>
    ) : (
      <Autocomplete
        multiple
        limitTags={LIMIT_TAGS}
        options={fullGenreList}
        value={genres}
        getOptionLabel={(option) => option.name}
        onChange={handleSelectGenres}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={ICON}
              checkedIcon={CHECKED_ICON}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.name}
          </li>
        )}
        renderInput={(params) => <TextField {...params} label="Жанры" />}
        renderTags={(value, getTagProps) => {
          const numTags = value.length;
          const limitTags = LIMIT_TAGS;
          return (
            <>
              {value.slice(0, limitTags).map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  key={index}
                  label={option.name}
                />
              ))}
  
              {numTags > limitTags && ` +${numTags - limitTags}`}
            </>
          );
        }}
        disableCloseOnSelect
        ListboxProps={{ sx: { maxHeight: "20rem" } }}
        noOptionsText={"Нет подходящих жанров"}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        sx={{ width: "100%", mt: "1rem" }}
      />
    );
  }
  
  export { GenreFilter };