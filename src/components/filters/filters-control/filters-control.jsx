import { Box, IconButton, Typography } from "@mui/material";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../../store/action-creators/filters-action-creator";
import { resetPagination } from "../../../store/action-creators/pagination-action-creator";

function FiltersControl() {
  const dispatch = useDispatch();

  function handleClickResetFilters() {
    dispatch(resetFilters());
    dispatch(resetPagination());
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">Фильтры</Typography>
      <IconButton onClick={handleClickResetFilters}>
        <ClearSharpIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
}

export { FiltersControl };