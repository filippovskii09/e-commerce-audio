import { db } from "@/firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getAllProducts = createAsyncThunk(
	"products/getAllProducts",
	async (category, {rejectWithValue}) => {
		const collectionRef = collection(db, 'products');
		const q = query(collectionRef, where("category", "==", category));
		try {
			const response = await getDocs(q);
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