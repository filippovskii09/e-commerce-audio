import { auth } from "@/firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => await signOut(auth));