import { auth } from "@/firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

			const simplifiedUser = {
        uid: user.uid,
        email: user.email,
      };
      return simplifiedUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
