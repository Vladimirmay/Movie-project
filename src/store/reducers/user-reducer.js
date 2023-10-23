import { createReducer } from "@reduxjs/toolkit";
import { USER_STATUSES, resetToken, setAccoundId, setToken, setUserStatus } from "../action-creators/user-action-creator";

const USER_INITIAL_STATE = {
  userStatus: USER_STATUSES.GUEST,
  token: "",
  accountId: "",
};

const userReducer = createReducer(USER_INITIAL_STATE, (builder) => {
  builder
    .addCase(setToken, (user, action) => {
      user.token = action.payload;
    })
    .addCase(resetToken, (user) => {
      user.token = USER_INITIAL_STATE.token;
    })
    .addCase(setUserStatus, (user, action) => {
      user.userStatus = action.payload;
    })
    .addCase(setAccoundId, (user, action) => {
      user.accountId = action.payload;
    });
});

const selectUser = (state) => state.user;

export { userReducer, selectUser };