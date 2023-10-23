import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { ImageWithPlaceholder } from "../image-with-placeholder/image-with-placeholder";
import { ActorList } from "../actor-list/actor-list";
import { FilmDetailList } from "../film-detail-list/film-detail-list";
import { FavoriteIcon } from "../favorite-icon/favorite-icon";
import { useSelector } from "react-redux";
import { selectFilmDetails } from "../../store/reducers/films-reducer/film-details-reducer";

function FilmDetails() {
  const filmDetails = useSelector(selectFilmDetails);
  const {
    details,
    actors: { cast },
  } = filmDetails;

  const navigate = useNavigate();

  const {
    id,
    title,
    overview,
    poster_path: poster,
    backdrop_path: backdrop,
    ...restDetails
  } = details;

  function handleClickBack() {
    navigate(-1);
  }

  return (
    <>
      <ImageWithPlaceholder
        mainImage={poster}
        secondaryImage={backdrop}
        placeholderStyle={{
          alignSelf: "flex-start",
          width: "25rem",
          objectFit: "contain",
          "@media(max-width: 50rem)": {
            alignSelf: "center",
          },
        }}
        imageStyle={{
          alignSelf: "flex-start",
          width: "25rem",
          objectFit: "contain",
          "@media(max-width: 50rem)": {
            alignSelf: "center",
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">{title}</Typography>
          <FavoriteIcon item={details} size={"large"} />
        </Box>
        <IconButton
          sx={{ alignSelf: "flex-start", pl: "0rem" }}
          onClick={handleClickBack}
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <Typography
          variant="body1"
          sx={{ maxWidth: "60rem", fontSize: "1.25rem" }}
        >
          {overview}
        </Typography>
        <Typography variant="h5" sx={{ m: "1.5rem 0rem 1.5rem 0rem" }}>
          Актёры
        </Typography>
        <ActorList cast={cast} />
        <Box sx={{ mt: "1.5rem" }}>
          <Typography variant="h5" sx={{ mb: "1.5rem" }}>
            Детали
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <FilmDetailList details={restDetails} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export { FilmDetails };