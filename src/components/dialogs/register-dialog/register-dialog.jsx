import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
  } from "@mui/material";
  import { useDispatch, useSelector } from "react-redux";
  import { USER_STATUSES, setUserStatus } from "../../../store/action-creators/user-action-creator";
  import { selectUser } from "../../../store/reducers/user-reducer";
  
  function RegisterDialog() {
    const user = useSelector(selectUser);
    const { userStatus } = user;
    const dispatch = useDispatch();
  
    function handleClickClose() {
      dispatch(setUserStatus(USER_STATUSES.GUEST));
    }
  
    function handleClickRequestToken() {
      dispatch(setUserStatus(USER_STATUSES.WANT_TO_AUTHORIZE));
    }
  
    return (
      <Dialog
        open={userStatus === USER_STATUSES.WANT_TO_REGISTER}
        onClose={handleClickClose}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Запросить токен</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Почта"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>Отмена</Button>
          <Button onClick={handleClickRequestToken}>Запросить</Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  export { RegisterDialog };