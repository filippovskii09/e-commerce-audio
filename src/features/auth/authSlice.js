import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./thunks/registerUserThunk";
import { loginUser } from "./thunks/loginUserThunk";
import { logoutUser } from "./thunks/logoutUserThunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist';
import { postOrderThunk } from "./thunks/postOrderThunk";

const initialState = {
	user: null,
	loading: false,
	error: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
			.addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
				state.loading = false;
        state.user = null;
      })
			.addCase(postOrderThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postOrderThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user.orders.push(action.payload);
      })
      .addCase(postOrderThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const persistConfig = {
	key: "user",
	storage,
	whitelist: ["user"]
}

export const authReducer = persistReducer(persistConfig, authSlice.reducer);