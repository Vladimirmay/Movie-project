import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
  } from "@mui/material";
  import Cookies from "js-cookie";
  import { useState } from "react";
  import { COOKIES } from "../../../js/global-constants";
  import { useDispatch, useSelector } from "react-redux";
  import {
    USER_STATUSES,
    getUserAccountId,
    resetToken,
    setToken,
    setUserStatus,
  } from "../../../store/action-creators/user-action-creator";
  import { selectUser } from "../../../store/reducers/user-reducer";
  
  const INPUT_TOKEN_DEFAULT = "";
  
  function AuthDialog() {
    const [inputToken, setInputToken] = useState(INPUT_TOKEN_DEFAULT);
  
    const user = useSelector(selectUser);
    const { userStatus } = user;
    const dispatch = useDispatch();
  
    function handleClickClose() {
      dispatch(resetToken());
      dispatch(setUserStatus(USER_STATUSES.GUEST));
    }
  
    function handleClickEnterToken() {
      if (!inputToken.trim()) return;
  
      Cookies.set(COOKIES.TOKEN, inputToken, { expires: 7 });
      dispatch(setToken(inputToken));
      dispatch(getUserAccountId(inputToken));
    }
  
    function handleChangeToken(e) {
      setInputToken(e.target.value);
    }
  
    return (
      <Dialog
        open={userStatus === USER_STATUSES.WANT_TO_AUTHORIZE}
        onClose={handleClickClose}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Введите токен</DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleChangeToken}
            autoFocus
            margin="dense"
            id="inputToken"
            label="Токен"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>Отмена</Button>
          <Button onClick={handleClickEnterToken}>ОК</Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  export { AuthDialog };