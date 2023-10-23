import { IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilm,
  deleteFilm,
  postFavoriteStatus,
} from "../../store/action-creators/films-action-creators/favorite-films-action-creator";
import { selectFavoriteFilms } from "../../store/reducers/films-reducer/favorite-films-reducer";
import { selectUser } from "../../store/reducers/user-reducer";

function FavoriteIcon(props) {
  const { item, size } = props;

  const user = useSelector(selectUser);
  const { token, accountId } = user;
  const favoriteFilms = useSelector(selectFavoriteFilms);
  const { favoriteFilmsItems } = favoriteFilms;
  const dispatch = useDispatch();

  const isFavorite = favoriteFilmsItems.some(
    (favoriteItem) => favoriteItem.id === item.id
  );

  function handleClickFavorite() {
    isFavorite ? dispatch(deleteFilm(item.id)) : dispatch(addFilm(item));
    dispatch(postFavoriteStatus(token, accountId, item.id, item, isFavorite));
  }

  return (
    <IconButton
      onClick={handleClickFavorite}
      sx={{ alignSelf: "flex-start", mt: "0.25rem" }}
    >
      {isFavorite ? (
        <StarIcon fontSize={size} />
      ) : (
        <StarBorderIcon fontSize={size} />
      )}
    </IconButton>
  );
}

export { FavoriteIcon };