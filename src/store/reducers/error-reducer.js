import { ERROR_ACTIONS } from "../actions/error-actions";

const ERROR_DEFAULT = {
  isVisible: false,
  status: 0,
  message: "",
};

function errorReducer(error = ERROR_DEFAULT, action) {
  switch (action.type) {
    case ERROR_ACTIONS.SHOW_ERROR_DIALOG: {
      return {
        isVisible: true,
        status: action.status,
        message: action.message,
      };
    }
    case ERROR_ACTIONS.HIDE_ERROR_DIALOG: {
      return ERROR_DEFAULT;
    }
    default: {
      return error;
    }
  }
}

const selectError = state => state.error;

export { errorReducer, selectError };