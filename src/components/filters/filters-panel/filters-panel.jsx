import { Box, Paper } from "@mui/material";
import { FiltersControl } from "../filters-control/filters-control";
import { SortByFilter } from "../sort-by-filter/sort-by-filter";
import { YearsFilter } from "../years-filter/years-filter";
import { GenreFilter } from "../genre-filter/genre-filter";
import { PaginationPanel } from "../../pagination-panel/pagination-panel";
import { SearchByName } from "../search-by-name/search-by-name";

function FiltersPanel() {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "25rem",
        "@media(max-width: 50rem)": {
          position: "static",
        },
      }}
    >
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          p: "1rem 1rem 3rem 1rem",
        }}
      >
        <FiltersControl />
        <SearchByName />
        <SortByFilter />
        <YearsFilter />
        <GenreFilter />
        <PaginationPanel />
      </Paper>
    </Box>
  );
}

export { FiltersPanel };