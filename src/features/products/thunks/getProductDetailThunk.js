import { db } from "@/firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";

export const getProductDetail = createAsyncThunk(
	"products/getProductDetail",
	async (productId, thunkAPI) => {
		try {
			const snap = await getDoc(doc(db, 'products', productId))
			if (snap.exists()) {
				console.log(snap.data())
			}
			else {
				console.log("No such document")
			}
		} catch(error) {
			console.error("Product detail error ====>", error);
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);