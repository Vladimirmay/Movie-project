import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
  } from "@mui/material";
  import { useDispatch, useSelector } from "react-redux";
  import { hideErrorDialog } from "../../../store/action-creators/error-action-creator";
  import { selectError } from "../../../store/reducers/error-reducer";
  
  function ErrorDialog() {
    const error = useSelector(selectError);
    const { isVisible, status, message } = error;
    const dispatch = useDispatch();
  
    function handleClickClose() {
      dispatch(hideErrorDialog())
    }
  
    return (
      <Dialog open={isVisible} onClose={handleClickClose} fullWidth maxWidth="xs">
        <DialogTitle>Ошибка</DialogTitle>
        <DialogContent>
          <Typography
            variant="body1"
            component="div"
            sx={{ pb: "0rem", overflowY: "hidden" }}
          >
            {status}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ overflowY: "hidden" }}
          >
            {message}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>ОК</Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  export { ErrorDialog };