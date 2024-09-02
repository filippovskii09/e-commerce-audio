import { auth, db } from "@/firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			const firebaseUser = userCredential.user;
			const user = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        createdAt: new Date().toISOString(),
				role: "user",
				orders: [],
			};
			
			await setDoc(doc(db, "users", firebaseUser.uid), user);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
