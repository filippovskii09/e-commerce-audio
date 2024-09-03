import { db } from "@/firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, onSnapshot } from "firebase/firestore";

export const subscribeToOrders = createAsyncThunk(
	"auth/subscribeToOrders",
	async(_, thunkAPI) => {
		try {
			const store = thunkAPI.getState();
			const userId = store.auth.user.uid;

      return new Promise((resolve, reject) => {
        const userDocRef = doc(db, "users", userId);

        const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            thunkAPI.dispatch({ 
              type: 'auth/subscribeToOrders/fulfilled', 
              payload: userData.orders || [] 
            });
          } else {
            reject("User document does not exist");
          }
        });

        thunkAPI.extra = thunkAPI.extra || {};
        thunkAPI.extra.unsubscribe = unsubscribe;  // Зберігаємо функцію відписки
      });

		}catch(error) {
			console.error(error);
			return thunkAPI.rejectWithValue(error.message);
		}
	}
)