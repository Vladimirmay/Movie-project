import { Box, Typography, Slider } from "@mui/material";
import {
  FILTERS_INITIAL_STATE,
  selectFilters,
} from "../../../store/reducers/filters-reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilterType,
  selectYears,
} from "../../../store/action-creators/filters-action-creator";
import { resetPagination } from "../../../store/action-creators/pagination-action-creator";
import { FILTER_TYPES } from "../../../store/actions/filters-actions";
import { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { selectPagination } from "../../../store/reducers/pagination-reducer";

const DELAY = 500;
const FIRST_PAGE = 1;
const MIN_DISTANCE = 1;

function valueText(value) {
  return `${value}`;
}

function YearsFilter() {
  const filters = useSelector(selectFilters);
  const { filterType, yearsRange } = filters;
  const [localYearsRange, setLocalYearsRange] = useState(yearsRange);
  const pagination = useSelector(selectPagination);
  const { currentPage } = pagination;
  const dispatch = useDispatch();

  useEffect(() => {
    setLocalYearsRange(yearsRange);
  }, [yearsRange]);

  const debounceDispatch = (values) => dispatch(selectYears(values));
  const [stateDebounceDispatch] = useState(() =>
    debounce(debounceDispatch, DELAY, {
      leading: false,
      trailing: true,
    })
  );

  function handleChangeYears(event, values, activeThumb) {
    if (values[1] - values[0] <= MIN_DISTANCE) {
      if (activeThumb === 0) {
        const clamped = Math.min(
          values[0],
          FILTERS_INITIAL_STATE.yearsRange[1] - MIN_DISTANCE
        );
        setLocalYearsRange([clamped, clamped + MIN_DISTANCE]);
      } else {
        const clamped = Math.max(values[1], MIN_DISTANCE);
        setLocalYearsRange([clamped - MIN_DISTANCE, clamped]);
      }
    } else {
      setLocalYearsRange(values);
    }

    stateDebounceDispatch(values);

    if (filterType === FILTER_TYPES.BY_NAME) {
      dispatch(changeFilterType(FILTER_TYPES.BY_SORT_BY));
    }
    if (currentPage !== FIRST_PAGE) {
      dispatch(resetPagination());
    }
  }

  return (
    <>
      <Typography variant="body1" sx={{ mt: "1rem" }}>
        Год релиза:
      </Typography>
      <Typography variant="body1" sx={{ mb: "1rem", fontSize: "0.8rem" }}>
        {`${yearsRange[0]} - ${yearsRange[1]}`}
      </Typography>
      <Box sx={{ m: "1rem 0.5rem 0rem 0.5rem" }}>
        <Slider
          value={localYearsRange}
          min={FILTERS_INITIAL_STATE.yearsRange[0]}
          max={FILTERS_INITIAL_STATE.yearsRange[1]}
          onChange={handleChangeYears}
          getAriaValueText={valueText}
          valueLabelDisplay="auto"
          size="small"
          disableSwap
        />
      </Box>
    </>
  );
}

export { YearsFilter };