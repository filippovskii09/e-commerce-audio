import { db } from "@/firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"; // Імпортуйте uuid

export const postOrderThunk = createAsyncThunk(
	"auth/postOrderThunk",
	async ({ userId, order, email }, thunkAPI) => {

		try {
			const newOrder = {
				id: uuidv4(),
        customerId: userId,
        customerEmail: email,
        products: order.products,
        orderedTime: new Date().toISOString(),
        status: "Очікує підтвердження",
        total: order.total,
      };

			await updateDoc(doc(db, "users", userId), {
        orders: arrayUnion(newOrder),
      });

			return newOrder;
		} catch(error) {
			console.error(error);
			return thunkAPI.rejectWithValue(error.message);
		}
	}
)