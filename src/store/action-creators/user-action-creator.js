import Cookies from "js-cookie";
import { COOKIES, SERVER_URL, URL_PATHS } from "../../js/global-constants";
import { getRequest } from "../../js/requests/get-request";
import { showErrorDialog } from "./error-action-creator";
import { createAction } from "@reduxjs/toolkit";

const USER_STATUSES = {
  GUEST: "GUEST",
  WANT_TO_REGISTER: "WANT_TO_REGISTER",
  REGISTERED_USER: "REGISTERED_USER",
  WANT_TO_AUTHORIZE: "WANT_TO_AUTHORIZE",
  AUTHTORIZED_USER: "AUTHTORIZED_USER",
};

const setToken = createAction("SET_TOKEN");
const resetToken = createAction("RESET_TOKEN");
const setUserStatus = createAction("SET_USER_STATUS");
const setAccoundId = createAction("SET_ACCOUNT_ID");

function getUserAccountId(inputToken) {
  return async function (dispatch) {
    const body = await getRequest(
      `${SERVER_URL}${URL_PATHS.ACCOUNT_ID}`,
      inputToken
    );

    if (!body.isSuccessful) {
      dispatch(showErrorDialog(body.status, body.message));
      return;
    }

    Cookies.set(COOKIES.ACCOUNT_ID, body.result.id, { expires: 7 });
    dispatch(setUserStatus(USER_STATUSES.AUTHTORIZED_USER));
    dispatch(setAccoundId(body.result.id));
  };
}

export { USER_STATUSES, setToken, resetToken, setUserStatus, setAccoundId, getUserAccountId };