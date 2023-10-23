import { ERROR_ACTIONS } from "../actions/error-actions";

function showErrorDialog(status, message) {
  return {
    type: ERROR_ACTIONS.SHOW_ERROR_DIALOG,
    status,
    message,
  };
}

function hideErrorDialog() {
  return {
    type: ERROR_ACTIONS.HIDE_ERROR_DIALOG,
  };
}

export { showErrorDialog, hideErrorDialog };