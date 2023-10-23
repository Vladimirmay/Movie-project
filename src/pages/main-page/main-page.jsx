import Cookies from "js-cookie";
import { Header } from "../../components/header/header";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { COOKIES } from "../../js/global-constants";
import { ErrorDialog } from "../../components/dialogs/error-dialog/error-dialog";
import { useDispatch, useSelector } from "react-redux";
import {
  USER_STATUSES,
  setAccoundId,
  setToken,
  setUserStatus,
} from "../../store/action-creators/user-action-creator";
import { getFavoriteFilms } from "../../store/action-creators/films-action-creators/favorite-films-action-creator";
import { resetFilmDetails } from "../../store/action-creators/films-action-creators/film-details-action-creator";
import { selectUser } from "../../store/reducers/user-reducer";
import { selectFavoriteFilms } from "../../store/reducers/films-reducer/favorite-films-reducer";

function MainPage() {
  const location = useLocation();

  const user = useSelector(selectUser);
  const { userStatus, token, accountId } = user;
  const favorteFilms = useSelector(selectFavoriteFilms);
  const { isFavoriteFilmsLoaded } = favorteFilms;
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get(COOKIES.TOKEN);
    const accountId = Cookies.get(COOKIES.ACCOUNT_ID);

    if (token && accountId) {
      dispatch(setToken(token));
      dispatch(setAccoundId(accountId));
      dispatch(setUserStatus(USER_STATUSES.AUTHTORIZED_USER));
    }
  }, []);

  useEffect(() => {
    if (userStatus === USER_STATUSES.AUTHTORIZED_USER) {
      dispatch(getFavoriteFilms(token, accountId));
    }
  }, [userStatus, token]);

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(resetFilmDetails());
    }
  }, [location]);

  return (
    <>
      <Header />
      {isFavoriteFilmsLoaded && <Outlet />}
      <ErrorDialog />
    </>
  );
}

export { MainPage };