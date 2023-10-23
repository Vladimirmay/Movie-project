import { Box } from "@mui/material";
import { FilmDetails } from "../../components/film-details/film-details";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFilmDetails } from "../../store/action-creators/films-action-creators/film-details-action-creator";
import { selectUser } from "../../store/reducers/user-reducer";
import { selectFilmDetails } from "../../store/reducers/films-reducer/film-details-reducer";
import { USER_STATUSES } from "../../store/action-creators/user-action-creator";

function FilmDetailsPage() {
  const { film_id: filmId } = useParams();

  const user = useSelector(selectUser);
  const { userStatus, token } = user;
  const filmDetails = useSelector(selectFilmDetails);
  const { isFilmDetailsLoaded } = filmDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilmDetails(token, filmId));
  }, [token]);

  return !isFilmDetailsLoaded ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{ height: "20rem", width: "auto" }}
        component="img"
        src={"../src/public/waiting.gif"}
      />
    </Box>
  ) : (
    userStatus === USER_STATUSES.AUTHTORIZED_USER && (
      <Box
        sx={{
          display: "flex",
          gap: "1.5rem",
          p: "5.5rem 1.5rem 1.5rem 1.5rem",
          width: "100%",
          "@media(max-width: 50rem)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <FilmDetails />
      </Box>
    )
  );
}

export { FilmDetailsPage };