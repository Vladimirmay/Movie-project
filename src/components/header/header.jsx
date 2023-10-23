import { IconButton, Paper, Typography } from "@mui/material";
import AccountCircleFilled from "@mui/icons-material/AccountCircle";
import { RegisterDialog } from "../dialogs/register-dialog/register-dialog";
import { AuthDialog } from "../dialogs/auth-dialog/auth-dialog";
import Cookies from "js-cookie";
import { COOKIES } from "../../js/global-constants";
import { useDispatch, useSelector } from "react-redux";
import { USER_STATUSES, setUserStatus } from "../../store/action-creators/user-action-creator";
import { selectUser } from "../../store/reducers/user-reducer";

function Header() {
  const user = useSelector(selectUser);
  const { token } = user;
  const dispatch = useDispatch();

  function handleClickOpenRegisterDialog() {
    if (token) {
      Cookies.remove(COOKIES.TOKEN);
      Cookies.remove(COOKIES.ACCOUNT_ID);
      window.location.reload(true);
    } else {
      dispatch(setUserStatus(USER_STATUSES.WANT_TO_REGISTER));
    }
  }

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          position: "fixed",
          width: "100%",
          zIndex: "1000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "0rem",
          p: "0rem 1rem 0rem 1rem",
          backgroundColor: "rgb(0, 121, 206)",
        }}
      >
        <Typography
          variant="h6"
          sx={{ m: "1rem 0rem 1rem 0rem", color: "white" }}
        >
          Кинопоиск 2.0
        </Typography>
        <IconButton onClick={handleClickOpenRegisterDialog}>
          <AccountCircleFilled fontSize="large" sx={{ color: "white" }} />
        </IconButton>
      </Paper>
      <RegisterDialog />
      <AuthDialog />
    </>
  );
}

export { Header };