import { db } from "@/firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getAllProducts = createAsyncThunk(
	"products/getAllProducts",
	async (category, {rejectWithValue}) => {
		try {
			const response = await getDocs(query(collection(db, 'products'), where("category", "==", category)));
			const products = response.docs.map((doc) => {
			  const data = doc.data();
			  return {
					id: data.id,
					name: data.name,
					price: data.price,
					description: data.description,
					category: data.category,
					image: data.image
			  };
			});

			return products;
		} catch(error) {
			console.error(error);
			return rejectWithValue(error.message);
		}
	}
)