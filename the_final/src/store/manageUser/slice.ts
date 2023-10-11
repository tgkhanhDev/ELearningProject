import { createSlice } from "@reduxjs/toolkit";
import { LoginUser, UserInfo } from "types";
import { getUserInfoThunk, loginThunk } from "./thunk";

type manageUser = {
  user?: LoginUser | UserInfo;
  accessToken?: string;
};
const initialState: manageUser = {
  user: undefined,
  accessToken: localStorage.getItem("USER"),
};
export const manageUserSlice = createSlice({
  name: "manageUser",
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem("USER");
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user=payload;
        state.accessToken = payload.accessToken;
        localStorage.setItem("USER", payload.accessToken);
      })
      .addCase(getUserInfoThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
      });
  },
});
export const { reducer: manageUserReducer, actions: manageUserActions } =
  manageUserSlice;
