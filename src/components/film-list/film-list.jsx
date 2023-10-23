import { Box, Typography } from "@mui/material";
import { FilmCard } from "../film-card/film-card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../store/reducers/filters-reducer";
import { selectPagination } from "../../store/reducers/pagination-reducer";
import { getFilmList } from "../../store/action-creators/films-action-creators/film-list-action-creator";
import { selectFilmList } from "../../store/reducers/films-reducer/film-list-reducer";
import { selectUser } from "../../store/reducers/user-reducer";

function FilmList() {
  const user = useSelector(selectUser);
  const { token } = user;
  const filters = useSelector(selectFilters);
  const { filterType, sortBy, yearsRange, genres, name } = filters;
  const pagination = useSelector(selectPagination);
  const { currentPage } = pagination;
  const filmList = useSelector(selectFilmList);
  const { isFilmListLoaded, filmListItems } = filmList;
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [filmList]);

  useEffect(() => {
    dispatch(
      getFilmList(
        token,
        filterType,
        sortBy,
        yearsRange,
        genres,
        name,
        currentPage
      )
    );
  }, [token, filterType, sortBy, yearsRange, genres, name, currentPage]);

  const filmCardList = filmListItems.map((item) => {
    return <FilmCard key={item.id} item={item} />;
  });

  return !isFilmListLoaded ? (
    <Box
      sx={{
        ml: "20.5rem",
        height: "20rem",
        width: "auto",
        "@media(max-width: 50rem)": {
          ml: "0rem",
        },
      }}
      component="img"
      src={"./src/public/waiting.gif"}
    />
  ) : filmCardList.length > 0 ? (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignContent: "flex-start",
        gap: "1rem",
        pl: "26.5rem",
        "@media(max-width: 50rem)": {
          p: "0rem",
        },
      }}
    >
      {filmCardList}
    </Box>
  ) : (
    <Box>
      <Typography
        sx={{
          m: "0rem 0rem 1rem 26.5rem",
          color: "grey",
          fontSize: "1.15rem",
          "@media(max-width: 50rem)": {
            ml: "0rem",
          },
        }}
      >
        <i>Фильмы по запросу не найдены</i>
      </Typography>
      <Box
        sx={{
          ml: "26.5rem",
          height: "7rem",
          width: "auto",
          "@media(max-width: 50rem)": {
            ml: "0rem",
          },
        }}
        component="img"
        src={"./src/public/no-results.png"}
      ></Box>
    </Box>
  );
}

export { FilmList };