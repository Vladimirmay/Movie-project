import { Card, CardContent, CardActions, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { ImageWithPlaceholder } from "../image-with-placeholder/image-with-placeholder";
import { FavoriteIcon } from "../favorite-icon/favorite-icon";

function FilmCard(props) {
  const { item } = props;

  const {
    id,
    title,
    vote_average: rating,
    backdrop_path: backdrop,
    poster_path: poster,
  } = item;

  return (
    <Card sx={{ width: "20rem", height: "25rem" }}>
      <Link to={`/film/${id}`}>
        <ImageWithPlaceholder
          mainImage={backdrop}
          secondaryImage={poster}
          placeholderStyle={{
            height: "15rem",
          }}
          imageStyle={{
            height: "15rem",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Link>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <CardContent>
          <Link
            to={`/film/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ maxHeight: "6rem", overflowY: "hidden" }}
            >
              {title}
            </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            Рейтинг {rating.toFixed(1)}
          </Typography>
        </CardContent>
        <CardActions>
          <FavoriteIcon item={item} size={"medium"} />
        </CardActions>
      </Box>
    </Card>
  );
}

export { FilmCard };